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
 * Atto superpen libfile.
 *
 * @package    atto_superpen
 * @copyright  COPYRIGHTINFO
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();


/**
 * Initialise this plugin
 * @param string $elementid
 */
function atto_superpen_strings_for_js() {
    global $PAGE;

    $PAGE->requires->strings_for_js(array('redpen',
                                          'greenpen',
                                          'bluepen',
                                          'custompen'),
                                    'atto_superpen');
}

/**
 * Return the js params required for this module.
 * @return array of additional params to pass to javascript init function for this module.
 */
function atto_superpen_params_for_js($elementid, $options, $fpoptions) {


	//init pens visible flag
	$redpenvisible=true;
	$greenpenvisible=true;
	$bluepenvisible=true;
	$custompenvisible=true;

	
	//if its visible in config don't show it.
	//get config object
	$config = get_config('atto_superpen');
	$redpenvisible = $config->redpenvisible;
    $greenpenvisible = $config->greenpenvisible;
    $bluepenvisible = $config->bluepenvisible;
    $custompenvisible = $config->custompenvisible;
	 
					
	//coursecontext
	global $COURSE;
	$coursecontext=context_course::instance($COURSE->id);	
	//If they don't have permission for the pen don't show it
	if(!has_capability('atto/superpen:redpenvisible', $coursecontext) ){
			$redpenvisible=false;
	}
	if(!has_capability('atto/superpen:greenpenvisible', $coursecontext) ){
			$greenpenvisible=false;
	}
	if(!has_capability('atto/superpen:bluepenvisible', $coursecontext) ){
			$bluepenvisible=false;
	}
	if(!has_capability('atto/superpen:custompenvisible', $coursecontext) ){
			$custompenvisible=false;
	}

	//config our array of data to pass to javascript
	$params = array();
    $params['redpenvisible'] = $redpenvisible;
    $params['greenpenvisible'] = $greenpenvisible;
    $params['bluepenvisible'] = $bluepenvisible;
    $params['custompenvisible'] = $custompenvisible;

    //return params array for use in js
    return $params;
}

