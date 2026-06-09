<?php

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/field.bundle.css',
	'js' => 'dist/field.bundle.js',
	'lang' => '/bitrix/modules/main/date_format.php',
	'rel' => [
		'booking.const',
		'booking.lib.segments',
		'main.core',
		'ui.date-picker',
		'booking.lib.slot-ranges',
		'main.date',
		'main.loader',
		'booking.component.mixin.loc-mixin',
	],
	'skip_core' => false,
	'options' => [
		'webpacker' => [
			'useAllLangs' => true,
		],
	],
];
