/**
* Zimlet to load an iframe in a tab
* Copyright (C) 2015 Truong Anh Tuan <tuanta@iwayvietnam.com>
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * Defines the Zimlet handler class.
 *   
 */
function com_zimbra_tabiframe_HandlerObject() {
}

/**
 * Makes the Zimlet class a subclass of ZmZimletBase.
 *
 */
com_zimbra_tabiframe_HandlerObject.prototype = new ZmZimletBase();
com_zimbra_tabiframe_HandlerObject.prototype.constructor = com_zimbra_tabiframe_HandlerObject;

var tabLabel = "Lịch Lãnh đạo Bộ";
var url = "http://congvan.mt.gov.vn/lichlamviec.nsf/lichlamviec.html"; //Should be HTTPS to avoid mixed content issue.
var tabDesc = "Open tab to view page: " + url;

/**
 * This method gets called by the Zimlet framework when the zimlet loads.
 *  
 */
com_zimbra_tabiframe_HandlerObject.prototype.init =
function() {

	this._simpleAppName = this.createApp(tabLabel, "zimbraIcon", tabDesc);

};

/**
 * This method gets called by the Zimlet framework each time the application is opened or closed.
 *  
 * @param	{String}	appName		the application name
 * @param	{Boolean}	active		if true, the application status is open; otherwise, false
 */
com_zimbra_tabiframe_HandlerObject.prototype.appActive =
function(appName, active) {
	
	switch (appName) {
		case this._simpleAppName: {
		
			var app = appCtxt.getApp(appName); // get access to ZmZimletApp

			//Hide left object
			skin._showEl("skin_tr_search", false);
			skin._showEl("skin_td_tree", false);
			skin._showEl("ztb__NEW_MENU", false);
			skin._reflowApp();
			
			break;
		}
	}
	
};

/**
 * This method gets called by the Zimlet framework when the application is opened for the first time.
 *  
 * @param	{String}	appName		the application name		
 */
com_zimbra_tabiframe_HandlerObject.prototype.appLaunch =
function(appName) {

	switch (appName) {
		case this._simpleAppName: {
			// do something
		
			var app = appCtxt.getApp(appName); // get access to ZmZimletApp

			app.setContent("<iframe id=\"tabiframe-app\" name=\"tabiframe-app\" src=" + url + " width=\"100%\" height=\"100%\" style=\"border: 1px solid #ccc;\" /></iframe>"); // write HTML to app

			break;
		}
	}

};
