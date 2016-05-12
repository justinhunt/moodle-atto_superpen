Atto Superpen Plugin for Moodle
========================================

A simple pen module for learning Atto plugin development with Moodle.

The following steps should get you up and running with
this module "superpen".


* Place the plugin folder "superpen" into the /lib/editor/atto/plugins folder of the moodle
  directory.


* Visit Settings > Site Administration > Notifications, and let Moodle guide you through the install.

* Go to Site Administration > Plugins > Text Editors > Atto Toolbar Settings
  and you should find that this plugin has been added to the list of
  installed modules.
  IMPORTANT: Now add the name of the plugin, "superpen," to the menu structure near the bottom of the page
  e.g style1 = title, bold, italic, superpen

  
* When making changes, you will need to generate the js for your editor icon button. 
  Your icon won't even show on the editor until you have done this.
  The source for the button is at yui/src/button/js/button.js
  Changes to button.js won't do anything until you have run "shifter" over them.
  Once you have everything set up to run shifter, go to the folder with build.json in it,
  probably: yui/src/button
  then type "shifter" , hopefully you don't get errors (lots of warnings are normal)
  See:  http://docs.moodle.org/dev/YUI/Shifter
 

  For more information on developing Atto plugins
  see: http://docs.moodle.org/dev/Atto#Atto_Plugins

Good luck!

Justin Hunt
@poodllguy
