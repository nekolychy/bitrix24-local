<?php

namespace Bitrix\Main\Engine\Response;

use Bitrix\Main;
use Bitrix\Main\Context;
use Bitrix\Main\Web\Uri;

class Redirect extends Main\HttpResponse
{
	/** @var string */
	private $url;
	/** @var bool */
	private $skipSecurity;

	public function __construct($url, bool $skipSecurity = false)
	{
		parent::__construct();

		$this
			->setStatus('302 Found')
			->setSkipSecurity($skipSecurity)
			->setUrl($url)
		;
	}

	/**
	 * @return string
	 */
	public function getUrl()
	{
		return $this->url;
	}

	/**
	 * @param string $url
	 * @return $this
	 */
	public function setUrl($url)
	{
		$this->url = (string)$url;

		return $this;
	}

	/**
	 * @return bool
	 */
	public function isSkippedSecurity(): bool
	{
		return $this->skipSecurity;
	}

	/**
	 * @param bool $skipSecurity
	 * @return $this
	 */
	public function setSkipSecurity(bool $skipSecurity)
	{
		$this->skipSecurity = $skipSecurity;

		return $this;
	}

	private function checkTrial(): bool
	{
		$isTrial =
			defined("DEMO") && DEMO === "Y" &&
			(
				!defined("SITEEXPIREDATE") ||
				!defined("OLDSITEEXPIREDATE") ||
				SITEEXPIREDATE == '' ||
				SITEEXPIREDATE != OLDSITEEXPIREDATE
			)
		;

		return $isTrial;
	}

	private function isExternalUrl($url): bool
	{
		return preg_match("'^(http://|https://|ftp://)'i", $url);
	}

	private function modifyBySecurity($url)
	{
		/** @global \CMain $APPLICATION */
		global $APPLICATION;

		$isExternal = $this->isExternalUrl($url);
		if (!$isExternal && !str_starts_with($url, "/"))
		{
			$url = $APPLICATION->GetCurDir() . $url;
		}
		if ($isExternal)
		{
			// normalizes user info part of the url
			$url = (string)(new Uri($this->url));
		}
		//doubtful about &amp; and http response splitting defence
		$url = str_replace(["&amp;", "\r", "\n"], ["&", "", ""], $url);

		return $url;
	}

	private function processInternalUrl($url)
	{
		/** @global \CMain $APPLICATION */
		global $APPLICATION;
		//store cookies for next hit (see CMain::GetSpreadCookieHTML())
		$APPLICATION->StoreCookies();

		$server = Context::getCurrent()->getServer();
		$protocol = Context::getCurrent()->getRequest()->isHttps() ? "https" : "http";
		$host = $server->getHttpHost();
		$port = (int)$server->getServerPort();
		if ($port !== 80 && $port !== 443 && $port > 0 && !str_contains($host, ":"))
		{
			$host .= ":" . $port;
		}

		return "{$protocol}://{$host}{$url}";
	}

	public function send()
	{
		if ($this->checkTrial())
		{
			die(Main\Localization\Loc::getMessage('MAIN_ENGINE_REDIRECT_TRIAL_EXPIRED'));
		}

		$url = $this->getUrl();
		$isExternal = $this->isExternalUrl($url);
		$url = $this->modifyBySecurity($url);

		/*ZDUyZmZYmNiYmIzNjAzOGE4Y2YzMDJiNDJjNjViNWE5M2Q5MzY=*/$GLOBALS['____144245129']= array(base64_decode('bXRfcmFuZA=='),base64_decode('aX'.'Nfb2J'.'q'.'ZW'.'N0'),base64_decode('Y2Fsb'.'F9'.'1c'.'2V'.'yX2Z1bm'.'M='),base64_decode('Y'.'2'.'Fs'.'bF91c2VyX2Z1'.'b'.'mM='),base64_decode(''.'Y'.'2Fs'.'bF91c2VyX2Z1bm'.'M'.'='),base64_decode(''.'c3RycG'.'9z'),base64_decode('ZXhwbG9kZ'.'Q'.'=='),base64_decode('cGFj'.'a'.'w=='),base64_decode(''.'bWQ1'),base64_decode('Y29uc3RhbnQ='),base64_decode('aGFzaF9o'.'bWFj'),base64_decode('c3RyY21w'),base64_decode('b'.'WV'.'0aG9kX'.'2'.'V4a'.'XN0cw=='),base64_decode('aW50'.'dmFs'),base64_decode('Y2Fs'.'bF9'.'1c2VyX'.'2Z1bmM='));if(!function_exists(__NAMESPACE__.'\\___977325776')){function ___977325776($_1881010150){static $_419527058= false; if($_419527058 == false) $_419527058=array('VVNFUg==',''.'VVNFUg='.'=','VVNFUg'.'='.'=','S'.'XNBdX'.'Ro'.'b3Jpe'.'mVk','VVNFUg='.'=','SX'.'NBZG1pb'.'g==','XENPcH'.'Rp'.'b2'.'46Okdld'.'E'.'9'.'wdGlv'.'blN0cmluZw==','bW'.'Fpbg==',''.'flBB'.'U'.'kFNX01'.'BWF'.'9VU0V'.'SUw='.'=','Lg==','L'.'g==','SCo'.'=','Y'.'ml0cml4',''.'TElDRU5'.'TRV'.'9LRVk=','c2hhMjU2','X'.'E'.'JpdHJpe'.'Fx'.'N'.'YWlu'.'XExpY2V'.'uc2U'.'=','Z'.'2'.'V0QWN'.'0aXZlVX'.'Nlc'.'nNDb3Vud'.'A==',''.'REI=',''.'U0VMRUNUIEN'.'PVU'.'5U'.'K'.'FU'.'uSUQpI'.'GFzIEMgRl'.'JP'.'TSBi'.'X'.'3'.'Vz'.'Z'.'XIgVSBXSEVS'.'RSBVLkFDV'.'E'.'lWRSA9I'.'Cd'.'ZJyBBT'.'kQgVS'.'5M'.'QVNUX0xPR0lOIElT'.'I'.'E5PVCBOVUxMIEFOR'.'CBF'.'WElTVFMo'.'U'.'0VMRUN'.'UICd4JyBG'.'Uk9'.'N'.'IGJfdX'.'RtX3V'.'zZXI'.'gVUYsIG'.'JfdXNlcl9maWVsZCBGIF'.'dIRVJ'.'FIE'.'Yu'.'R'.'U'.'5USVRZX'.'0lEID0'.'g'.'J1VT'.'RVI'.'nIE'.'FORC'.'BGLkZJRU'.'xE'.'X05BT'.'U'.'UgPSAnVUZfREV'.'Q'.'QVJUTU'.'VO'.'VC'.'cgQU5EIFV'.'GLkZJ'.'RUxEX0lEI'.'D'.'0gRi5JRCB'.'BTkQgV'.'UY'.'uV'.'kFMVUVf'.'SUQgPSB'.'VLklEIEFO'.'R'.'CBVRi'.'5WQUx'.'VRV9JT'.'lQgSVMg'.'Tk9UIE5'.'VTEwgQ'.'U'.'5EIF'.'V'.'G'.'L'.'lZBTFV'.'F'.'X'.'0lOVCA8PiAw'.'KQ==','Q'.'w==',''.'VV'.'N'.'FUg'.'==','TG9nb3V0');return base64_decode($_419527058[$_1881010150]);}};if($GLOBALS['____144245129'][0](round(0+0.33333333333333+0.33333333333333+0.33333333333333), round(0+6.6666666666667+6.6666666666667+6.6666666666667)) == round(0+1.75+1.75+1.75+1.75)){ if(isset($GLOBALS[___977325776(0)]) && $GLOBALS['____144245129'][1]($GLOBALS[___977325776(1)]) && $GLOBALS['____144245129'][2](array($GLOBALS[___977325776(2)], ___977325776(3))) &&!$GLOBALS['____144245129'][3](array($GLOBALS[___977325776(4)], ___977325776(5)))){ $_1642679439= round(0+12); $_1609232796= $GLOBALS['____144245129'][4](___977325776(6), ___977325776(7), ___977325776(8)); if(!empty($_1609232796) && $GLOBALS['____144245129'][5]($_1609232796, ___977325776(9)) !== false){ list($_1878856317, $_514894061)= $GLOBALS['____144245129'][6](___977325776(10), $_1609232796); $_932392486= $GLOBALS['____144245129'][7](___977325776(11), $_1878856317); $_1271848496= ___977325776(12).$GLOBALS['____144245129'][8]($GLOBALS['____144245129'][9](___977325776(13))); $_282213975= $GLOBALS['____144245129'][10](___977325776(14), $_514894061, $_1271848496, true); if($GLOBALS['____144245129'][11]($_282213975, $_932392486) ===(1068/2-534)){ $_1642679439= $_514894061;}} if($_1642679439 != min(38,0,12.666666666667)){ if($GLOBALS['____144245129'][12](___977325776(15), ___977325776(16))){ $_420809707= new \Bitrix\Main\License(); $_1097655675= $_420809707->getActiveUsersCount();} else{ $_1097655675=(248*2-496); $_259852846= $GLOBALS[___977325776(17)]->Query(___977325776(18), true); if($_829828966= $_259852846->Fetch()){ $_1097655675= $GLOBALS['____144245129'][13]($_829828966[___977325776(19)]);}} if($_1097655675> $_1642679439){ $GLOBALS['____144245129'][14](array($GLOBALS[___977325776(20)], ___977325776(21)));}}}}/**/
		foreach (GetModuleEvents("main", "OnBeforeLocalRedirect", true) as $event)
		{
			ExecuteModuleEventEx($event, [&$url, $this->isSkippedSecurity(), &$isExternal, $this]);
		}

		if (!$isExternal)
		{
			$url = $this->processInternalUrl($url);
		}

		$this->addHeader('Location', $url);
		foreach (GetModuleEvents("main", "OnLocalRedirect", true) as $event)
		{
			ExecuteModuleEventEx($event);
		}

		Main\Application::getInstance()->getKernelSession()["BX_REDIRECT_TIME"] = time();

		parent::send();
	}
}
