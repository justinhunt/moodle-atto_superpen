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
    initializer: function(config) {
       

        var theicons = ['redpen', 'greenpen','bluepen','nopen'];
        debugger;

        Y.Array.each(theicons, function(theicon) {
              //check the param passed from PHP
             // If the icon is available, add the button
            if (config[theicon + 'visible']=='1' || theicon =='nopen'){
                // Add the superpen icon/buttons
                this.addButton({
                    icon: 'ed/' + theicon,
                    iconComponent: COMPONENTNAME,
                    title: theicon,
                    buttonName: theicon,
                    callback: this._applypenstyle,
                    callbackArgs: theicon
                });
            }
        }, this);

    },

   
    /**
     * Applies a span + class of the selected pen.
     *
     * @method applypenstyle
     */
    _applypenstyle: function(e,thepen) {
        //fetch our selection
        var host = this.get('host');
        var selection =  host.getSelection();
        
        //dealing with selected text is a tricky business
        //the rangy helper class deals with that for us
        //but we have to save and restore the selected range identifiers
        var savedSelection = window.rangy.saveSelection();
        
        //we use the rangy helpers to handle the applying of css classes and
        //and creation of span tags to do that, if necessary
        var redApplier =  window.rangy.createCssClassApplier(COMPONENTNAME + "_redpen", true);
        var greenApplier =  window.rangy.createCssClassApplier(COMPONENTNAME + "_greenpen", true);
        var blueApplier =  window.rangy.createCssClassApplier(COMPONENTNAME + "_bluepen", true);
        
        //if we don't have a selection, don't do anything
        if (selection) {
            //remove any classes we applied to this selection previously
            redApplier.undoToSelection();
            greenApplier.undoToSelection();
            blueApplier.undoToSelection();
          //depending on the pen, apply the css class
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
 //Javascript is a bit of a headspin in the way you declare functions, handlers
 //and pass parameters. The ATTRS object is how we pass params from PHP to our JS
}, {
        redpenvisible: {
            value: true
        },
        greenpenvisible: {
            value: true
        },
        bluepenvisible: {
            value: true
        }

});


}, '@VERSION@', {"requires": ["moodle-editor_atto-plugin"]});
