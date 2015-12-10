<?php
/*
 */

// ----------------------------------------------------------------------
// Original Author of file: Olivier Moron
// Purpose of file: Provides frame for masking button clicks and key pressed
// ----------------------------------------------------------------------

// Init the hooks of the plugin
function plugin_init_mask() {
   global $PLUGIN_HOOKS,$LANG,$CFG_GLPI;

   $PLUGIN_HOOKS['csrf_compliant']['mask'] = true;
   
   // Add specific files to add to the header : javascript or css
   $PLUGIN_HOOKS['add_javascript']['mask'] = array( 'lib/jquery.blockUI.js', 'js/mask.js');
}


// Get the name and the version of the plugin - Needed
function plugin_version_mask() {

   return array('name'           => 'Mask',
                'version'        => '2.0.0',
                'author'         => 'Olivier Moron',
                'license'        => 'GPLv2+',
                'homepage'       => 'https://forge.glpi-project.org/projects/mask/',
                'minGlpiVersion' => '0.90');
}


// Optional : check prerequisites before install : may print errors or add to message after redirect
function plugin_mask_check_prerequisites() {

   if (version_compare(GLPI_VERSION,'0.90','lt') || version_compare(GLPI_VERSION,'0.91','ge')) {
      echo "This plugin requires GLPI >= 0.90";
      return false;
   }
   return true;
}


// Check configuration process for plugin : need to return true if succeeded
// Can display a message only if failure and $verbose is true
function plugin_mask_check_config($verbose=false) {
   global $LANG;

   if (true) { // Your configuration check
      return true;
   }
   if ($verbose) {
      echo $LANG['plugins'][2];
   }
   return false;
}


?>