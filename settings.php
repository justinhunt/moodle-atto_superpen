<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * superpen settings.
 *
 * @package   atto_superpen
 * @copyright COPYRIGHTINFO
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */


defined('MOODLE_INTERNAL') || die();

$ADMIN->add('editoratto', new admin_category('atto_superpen', new lang_string('pluginname', 'atto_superpen')));

$settings = new admin_settingpage('atto_superpen_settings', new lang_string('settings', 'atto_superpen'));
if ($ADMIN->fulltree) {

	$settings->add(new admin_setting_configcheckbox('atto_superpen/redpenvisible', 
	   get_string('redpen', 'atto_superpen'),'', 1));
	
	$settings->add(new admin_setting_configcheckbox('atto_superpen/greenpenvisible', 
	   get_string('greenpen', 'atto_superpen'),'', 1));
	   
	$settings->add(new admin_setting_configcheckbox('atto_superpen/bluepenvisible', 
	   get_string('bluepen', 'atto_superpen'),'', 1));	
	   
	$settings->add(new admin_setting_configcheckbox('atto_superpen/custompenvisible', 
	   get_string('custompen', 'atto_superpen'),'', 1));	
	   
	$settings->add(new admin_setting_configtext('atto_superpen/custompenclass', 
		get_string('custompenclass', 'atto_superpen'), '', 'atto_superpen_custompen', PARAM_TEXT)); 
	
}
