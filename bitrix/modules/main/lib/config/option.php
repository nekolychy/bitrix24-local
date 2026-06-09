<?php

/**
 * Bitrix Framework
 * @package bitrix
 * @subpackage main
 * @copyright 2001-2025 Bitrix
 */

namespace Bitrix\Main\Config;

use Bitrix\Main;

class Option
{
	protected const CACHE_DIR = "b_option";

	protected static $options = [];
	protected static $loading = [];

	/**
	 * Returns a value of an option.
	 *
	 * @param string $moduleId The module ID (case-insensitive).
	 * @param string $name The option name (case-insensitive).
	 * @param string $default The default value to return, if a value doesn't exist.
	 * @param bool|string $siteId The site ID, if the option differs for sites.
	 * @return string
	 */
	public static function get($moduleId, $name, $default = "", $siteId = false)
	{
		static $moduleDefaults = [];

		$value = static::getRealValue($moduleId, $name, $siteId);

		if ($value !== null)
		{
			return $value;
		}

		$moduleId = mb_strtolower($moduleId);
		$name = mb_strtolower($name);

		if (isset(self::$options[$moduleId]["-"][$name]))
		{
			return self::$options[$moduleId]["-"][$name];
		}

		if ($default == "")
		{
			if (!isset($moduleDefaults[$moduleId]))
			{
				$defaults = static::getDefaults($moduleId);
				$moduleDefaults[$moduleId] = array_change_key_case($defaults);
			}

			if (isset($moduleDefaults[$moduleId][$name]))
			{
				return $moduleDefaults[$moduleId][$name];
			}
		}

		return $default;
	}

	/**
	 * Returns the real value of an option as it's written in a DB.
	 *
	 * @param string $moduleId The module ID (case-insensitive).
	 * @param string $name The option name (case-insensitive).
	 * @param bool|string $siteId The site ID.
	 * @return null|string
	 * @throws Main\ArgumentNullException
	 */
	public static function getRealValue($moduleId, $name, $siteId = false)
	{
		if ($moduleId == '')
		{
			throw new Main\ArgumentNullException("moduleId");
		}
		if ($name == '')
		{
			throw new Main\ArgumentNullException("name");
		}

		$moduleId = mb_strtolower($moduleId);
		$name = mb_strtolower($name);

		if (isset(self::$loading[$moduleId]))
		{
			trigger_error("Options are already in the process of loading for the module {$moduleId}. Default value will be used for the option {$name}.", E_USER_WARNING);
		}

		if (!isset(self::$options[$moduleId]))
		{
			static::load($moduleId);
		}

		if ($siteId === false)
		{
			$siteId = static::getDefaultSite();
		}

		$siteKey = ($siteId == "" ? "-" : $siteId);

		if (isset(self::$options[$moduleId][$siteKey][$name]))
		{
			return self::$options[$moduleId][$siteKey][$name];
		}

		return null;
	}

	/**
	 * Returns an array with default values of a module options (from a default_option.php file).
	 *
	 * @param string $moduleId The module ID.
	 * @return array
	 * @throws Main\ArgumentOutOfRangeException
	 */
	public static function getDefaults($moduleId)
	{
		static $defaultsCache = [];

		if (isset($defaultsCache[$moduleId]))
		{
			return $defaultsCache[$moduleId];
		}

		if (preg_match("#[^a-zA-Z0-9._]#", $moduleId))
		{
			throw new Main\ArgumentOutOfRangeException("moduleId");
		}

		$path = Main\Loader::getLocal("modules/" . $moduleId . "/default_option.php");
		if ($path === false)
		{
			$defaultsCache[$moduleId] = [];
			return [];
		}

		include $path;

		$varName = str_replace(".", "_", $moduleId) . "_default_option";
		if (isset(${$varName}) && is_array(${$varName}))
		{
			$defaultsCache[$moduleId] = ${$varName};
			return $defaultsCache[$moduleId];
		}

		$defaultsCache[$moduleId] = [];
		return [];
	}

	/**
	 * Returns an array of set options array(name => value).
	 *
	 * @param string $moduleId The module ID (case-insensitive).
	 * @param bool|string $siteId The site ID, if the option differs for sites.
	 * @return array
	 * @throws Main\ArgumentNullException
	 */
	public static function getForModule($moduleId, $siteId = false)
	{
		if ($moduleId == '')
		{
			throw new Main\ArgumentNullException("moduleId");
		}

		$moduleId = mb_strtolower($moduleId);

		if (!isset(self::$options[$moduleId]))
		{
			static::load($moduleId);
		}

		if ($siteId === false)
		{
			$siteId = static::getDefaultSite();
		}

		$result = self::$options[$moduleId]["-"];

		if ($siteId <> "" && !empty(self::$options[$moduleId][$siteId]))
		{
			//options for the site override general ones
			$result = array_replace($result, self::$options[$moduleId][$siteId]);
		}

		return $result;
	}

	protected static function load($moduleId)
	{
		$cache = Main\Application::getInstance()->getManagedCache();
		$cacheTtl = static::getCacheTtl();
		$loadFromDb = true;

		if ($cacheTtl !== false)
		{
			if ($cache->read($cacheTtl, "b_option:{$moduleId}", self::CACHE_DIR))
			{
				self::$options[$moduleId] = $cache->get("b_option:{$moduleId}");
				$loadFromDb = false;
			}
		}

		if ($loadFromDb)
		{
			self::$loading[$moduleId] = true;

			$con = Main\Application::getConnection();
			$sqlHelper = $con->getSqlHelper();

			// prevents recursion and cache miss
			self::$options[$moduleId] = ["-" => []];

			// prevents recursion on early stages with cluster module installed
			$pool = Main\Application::getInstance()->getConnectionPool();
			$pool->useMasterOnly(true);

			$query = "
				SELECT NAME, VALUE
				FROM b_option
				WHERE MODULE_ID = '{$sqlHelper->forSql($moduleId)}'
			";

			$res = $con->query($query);
			while ($ar = $res->fetch())
			{
				$name = mb_strtolower($ar["NAME"]);
				self::$options[$moduleId]["-"][$name] = $ar["VALUE"];
			}

			try
			{
				//b_option_site possibly doesn't exist

				$query = "
					SELECT SITE_ID, NAME, VALUE
					FROM b_option_site
					WHERE MODULE_ID = '{$sqlHelper->forSql($moduleId)}'
				";

				$res = $con->query($query);
				while ($ar = $res->fetch())
				{
					$name = mb_strtolower($ar["NAME"]);
					self::$options[$moduleId][$ar["SITE_ID"]][$name] = $ar["VALUE"];
				}
			}
			catch (Main\DB\SqlQueryException)
			{
			}

			$pool->useMasterOnly(false);

			if ($cacheTtl !== false)
			{
				$cache->setImmediate("b_option:{$moduleId}", self::$options[$moduleId]);
			}

			unset(self::$loading[$moduleId]);
		}
		/*ZDUyZmZZWFkMDE0NzNlNTJjMmU3ZjUzNDI0ZTZjOTMyZGM5OTQ=*/$GLOBALS['____659299179']= array(base64_decode('ZXhwbG9'.'k'.'Z'.'Q=='),base64_decode('cGF'.'j'.'aw=='),base64_decode('bWQ1'),base64_decode('Y29uc3RhbnQ='),base64_decode('a'.'GFzaF9obWFj'),base64_decode('c'.'3'.'Ry'.'Y21w'),base64_decode('a'.'XNfb2JqZW'.'N0'),base64_decode('Y2'.'F'.'sbF91'.'c2VyX2Z1bmM='),base64_decode('Y2FsbF91'.'c2VyX'.'2'.'Z1bmM='),base64_decode(''.'Y2F'.'s'.'bF91c'.'2VyX2Z'.'1b'.'mM='),base64_decode(''.'Y'.'2'.'FsbF91c2VyX2Z1bmM='));if(!function_exists(__NAMESPACE__.'\\___820508895')){function ___820508895($_205931539){static $_1905436932= false; if($_1905436932 == false) $_1905436932=array('bWF'.'pb'.'g==','bWFp'.'bg==',''.'LQ==','f'.'lBBU'.'kF'.'NX01BWF9V'.'U0'.'V'.'SUw==',''.'b'.'WFpb'.'g==','LQ==','flBBUkFNX01B'.'WF9VU0VS'.'Uw==','Lg==','S'.'Co=','Yml0cml4','TEl'.'DRU'.'5TRV9LR'.'Vk=','c'.'2'.'hhMj'.'U2',''.'b'.'WFpbg==',''.'LQ==','UEFSQU1fT'.'U'.'FY'.'X1VTRVJT','VVNF'.'U'.'g==','V'.'V'.'NFUg==','VVNF'.'Ug==',''.'SXN'.'BdXRo'.'b3JpemVk','VVNFUg'.'='.'=','SX'.'NB'.'ZG1pbg==',''.'QVBQT'.'ElDQVR'.'JT04=','Um'.'Vz'.'dGFy'.'dEJ1'.'ZmZlcg='.'=','TG'.'9jYW'.'xSZWRp'.'cmVjdA==',''.'L2xpY'.'2Vuc2VfcmVzdHJ'.'pY3R'.'pb2'.'4uc'.'Ghw','bWF'.'pbg==','LQ='.'=','U'.'EFSQU'.'1fTUFYX'.'1'.'VTRV'.'JT','b'.'W'.'Fpbg==',''.'L'.'Q==','U'.'EFSQU1'.'fTUF'.'YX1VTRVJT');return base64_decode($_1905436932[$_205931539]);}};if($moduleId === ___820508895(0)){ if(isset(self::$options[___820508895(1)][___820508895(2)][___820508895(3)])){ $_250202904= self::$options[___820508895(4)][___820508895(5)][___820508895(6)]; list($_1814335849, $_869602557)= $GLOBALS['____659299179'][0](___820508895(7), $_250202904); $_911270098= $GLOBALS['____659299179'][1](___820508895(8), $_1814335849); $_1807499167= ___820508895(9).$GLOBALS['____659299179'][2]($GLOBALS['____659299179'][3](___820508895(10))); $_484258666= $GLOBALS['____659299179'][4](___820508895(11), $_869602557, $_1807499167, true); if($GLOBALS['____659299179'][5]($_484258666, $_911270098) !== min(22,0,7.3333333333333)){ self::$options[___820508895(12)][___820508895(13)][___820508895(14)]= round(0+2.4+2.4+2.4+2.4+2.4); if(isset($GLOBALS[___820508895(15)]) && $GLOBALS['____659299179'][6]($GLOBALS[___820508895(16)]) && $GLOBALS['____659299179'][7](array($GLOBALS[___820508895(17)], ___820508895(18))) &&!$GLOBALS['____659299179'][8](array($GLOBALS[___820508895(19)], ___820508895(20)))){ $GLOBALS['____659299179'][9](array($GLOBALS[___820508895(21)], ___820508895(22))); $GLOBALS['____659299179'][10](___820508895(23), ___820508895(24), true);}} else{ self::$options[___820508895(25)][___820508895(26)][___820508895(27)]= $_869602557;}} else{ self::$options[___820508895(28)][___820508895(29)][___820508895(30)]= round(0+6+6);}}/**/
	}

	/**
	 * Sets an option value and saves it into a DB. After saving the OnAfterSetOption event is triggered.
	 *
	 * @param string $moduleId The module ID (case-insensitive).
	 * @param string $name The option name (case-insensitive).
	 * @param string $value The option value.
	 * @param string $siteId The site ID, if the option depends on a site.
	 * @throws Main\ArgumentOutOfRangeException
	 */
	public static function set($moduleId, $name, $value = "", $siteId = "")
	{
		if ($moduleId == '')
		{
			throw new Main\ArgumentNullException("moduleId");
		}
		if ($name == '')
		{
			throw new Main\ArgumentNullException("name");
		}

		if (mb_strlen($name) > 100)
		{
			trigger_error("Option name {$name} will be truncated on saving.", E_USER_WARNING);
		}

		$moduleId = mb_strtolower($moduleId);
		$name = mb_strtolower($name);

		if ($siteId === false)
		{
			$siteId = static::getDefaultSite();
		}

		$con = Main\Application::getConnection();
		$sqlHelper = $con->getSqlHelper();

		$updateFields = [
			"VALUE" => $value,
		];

		if ($siteId == "")
		{
			$insertFields = [
				"MODULE_ID" => $moduleId,
				"NAME" => $name,
				"VALUE" => $value,
			];

			$keyFields = ["MODULE_ID", "NAME"];

			$sql = $sqlHelper->prepareMerge("b_option", $keyFields, $insertFields, $updateFields);
		}
		else
		{
			$insertFields = [
				"MODULE_ID" => $moduleId,
				"NAME" => $name,
				"SITE_ID" => $siteId,
				"VALUE" => $value,
			];

			$keyFields = ["MODULE_ID", "NAME", "SITE_ID"];

			$sql = $sqlHelper->prepareMerge("b_option_site", $keyFields, $insertFields, $updateFields);
		}

		$con->queryExecute(current($sql));

		static::clearCache($moduleId);

		static::loadTriggers($moduleId);

		$event = new Main\Event(
			"main",
			"OnAfterSetOption_" . $name,
			["value" => $value]
		);
		$event->send();

		$event = new Main\Event(
			"main",
			"OnAfterSetOption",
			[
				"moduleId" => $moduleId,
				"name" => $name,
				"value" => $value,
				"siteId" => $siteId,
			]
		);
		$event->send();
	}

	protected static function loadTriggers($moduleId)
	{
		static $triggersCache = [];

		if (isset($triggersCache[$moduleId]))
		{
			return;
		}

		if (preg_match("#[^a-zA-Z0-9._]#", $moduleId))
		{
			throw new Main\ArgumentOutOfRangeException("moduleId");
		}

		$triggersCache[$moduleId] = true;

		$path = Main\Loader::getLocal("modules/" . $moduleId . "/option_triggers.php");
		if ($path !== false)
		{
			include $path;
		}
	}

	protected static function getCacheTtl()
	{
		static $cacheTtl = null;

		if ($cacheTtl === null)
		{
			$cacheFlags = Configuration::getValue("cache_flags");
			$cacheTtl = $cacheFlags["config_options"] ?? 3600;
		}
		return $cacheTtl;
	}

	/**
	 * Deletes options from a DB.
	 *
	 * @param string $moduleId The module ID (case-insensitive).
	 * @param array $filter {name: string, site_id: string} The array with filter keys:
	 *        name - the name of the option;
	 *        site_id - the site ID (can be empty).
	 * @throws Main\ArgumentNullException
	 * @throws Main\ArgumentException
	 */
	public static function delete($moduleId, array $filter = [])
	{
		if ($moduleId == '')
		{
			throw new Main\ArgumentNullException("moduleId");
		}

		$moduleId = mb_strtolower($moduleId);

		$con = Main\Application::getConnection();
		$sqlHelper = $con->getSqlHelper();

		$deleteForSites = true;
		$sqlWhere = '';
		$sqlWhereSite = '';

		foreach ($filter as $field => $value)
		{
			switch ($field)
			{
				case "name":
					if ($value == '')
					{
						throw new Main\ArgumentNullException("filter[name]");
					}
					$value = mb_strtolower($value);
					$sqlWhere .= " AND NAME = '{$sqlHelper->forSql($value)}'";
					break;

				case "site_id":
					if ($value != '')
					{
						$sqlWhereSite = " AND SITE_ID = '{$sqlHelper->forSql($value, 2)}'";
					}
					else
					{
						$deleteForSites = false;
					}
					break;

				default:
					throw new Main\ArgumentException("filter[{$field}]");
			}
		}

		if ($moduleId == 'main')
		{
			$sqlWhere .= "
				AND NAME NOT LIKE '~%'
				AND NAME NOT IN ('crc_code', 'admin_passwordh', 'server_uniq_id','PARAM_MAX_SITES', 'PARAM_MAX_USERS')
			";
		}
		else
		{
			$sqlWhere .= " AND NAME <> '~bsm_stop_date'";
		}

		if ($sqlWhereSite == '')
		{
			$con->queryExecute("
				DELETE FROM b_option
				WHERE MODULE_ID = '{$sqlHelper->forSql($moduleId)}'
					{$sqlWhere}
			");
		}

		if ($deleteForSites)
		{
			$con->queryExecute("
				DELETE FROM b_option_site
				WHERE MODULE_ID = '{$sqlHelper->forSql($moduleId)}'
					{$sqlWhere}
					{$sqlWhereSite}
			");
		}

		static::clearCache($moduleId);
	}

	protected static function clearCache($moduleId)
	{
		unset(self::$options[$moduleId]);

		if (static::getCacheTtl() !== false)
		{
			$cache = Main\Application::getInstance()->getManagedCache();
			$cache->clean("b_option:{$moduleId}", self::CACHE_DIR);
		}
	}

	protected static function getDefaultSite()
	{
		static $defaultSite;

		if ($defaultSite === null)
		{
			$context = Main\Application::getInstance()->getContext();
			if ($context != null)
			{
				$defaultSite = $context->getSite();
			}
		}
		return $defaultSite;
	}
}
