YUI.add('moodle-atto_superpen-button', function (Y, NAME) {

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

/*
 * @package    atto_superpen
 * @copyright  COPYRIGHTINFO
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_superpen-button
 */

/**
 * Atto text editor superpen plugin.
 *
 * @namespace M.atto_superpen
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

var COMPONENTNAME = 'atto_superpen';

Y.namespace('M.' + COMPONENTNAME).Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {

  
	/**
     * Initialize the button
     *
     * @method Initializer
     */
    initializer: function() {
        // If we don't have the capability to view then give up.
        if (this.get('disabled')){
            return;
        }

        var theicons = ['bluepen', 'redpen', 'greenpen','nopen'];

        Y.Array.each(theicons, function(theicon) {
            // Add the superpen icon/buttons
            this.addButton({
                icon: 'ed/' + theicon,
                iconComponent: COMPONENTNAME,
                buttonName: theicon,
                callback: this._applypenstyle,
                callbackArgs: theicon
            });
        }, this);

    },

   
    /**
     * Applies a span + class of the selected pen.
     *
     * @method applypenstyle
     */
    _applypenstyle: function(e,thepen) {
    	var host = this.get('host');
    	var selection =  host.getSelection();
        // Save the current selection - we want to restore this.
        var savedSelection = window.rangy.saveSelection();
        
        var redApplier =  window.rangy.createCssClassApplier("atto_superpen_redpen", true);
        var greenApplier =  window.rangy.createCssClassApplier("atto_superpen_greenpen", true);
        var blueApplier =  window.rangy.createCssClassApplier("atto_superpen_bluepen", true);
        
        if (selection) {
        	redApplier.undoToSelection();
        	greenApplier.undoToSelection();
        	blueApplier.undoToSelection();
          switch(thepen){
           	  case 'redpen': redApplier.applyToSelection();break;
        	  case 'greenpen': greenApplier.applyToSelection();break;
        	  case 'bluepen': blueApplier.applyToSelection();break;
          }
        }

        // Change selection from the containing paragraph to the original one.
        window.rangy.restoreSelection(savedSelection);

        // Mark the text as having been updated.
        this.markUpdated();
    }
}, { ATTRS: {
		disabled: {
			value: false
		},

		usercontextid: {
			value: null
		},

		defaultflavor: {
			value: ''
		}
	}
});


}, '@VERSION@', {"requires": ["moodle-editor_atto-plugin"]});
