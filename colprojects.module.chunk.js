webpackJsonp(["colprojects.module"],{

/***/ "../../../../../src/app/colprojects/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" style=\"padding-top:0em\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <!-- <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-12\"> -->\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" style=\"margin-top:2em ;margin-bottom:1em\">\r\n            <h4 class=\"card-title\">Colours Projects</h4>\r\n            <!-- <p class=\"category\">Vertical tabs</p> -->\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <div class=\"row\">\r\n              <div class=\"left-vertical-tabs\" style=\"width:120px\">\r\n                <ul class=\"nav nav-stacked\" role=\"tablist\" style=\"width:142px\">\r\n                  <li>\r\n                    <a href=\"#dash\" role=\"tab\" data-toggle=\"tab\">\r\n                      Dashboard\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#standards\" role=\"tab\" data-toggle=\"tab\">\r\n                      Standards\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#setup\" role=\"tab\" data-toggle=\"tab\">\r\n                      <!--  (click)=\"sidebarClose()\"  ngclick=\"sidebarClose()\"-->\r\n                      Setup\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#planning\" role=\"tab\" data-toggle=\"tab\">\r\n                      Planning\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"active\">\r\n                    <a href=\"#impl\" role=\"tab\" data-toggle=\"tab\">\r\n                      Implementation\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#reporting\" role=\"tab\" data-toggle=\"tab\">\r\n                      Reporting\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"right-text-tabs col-mod-12\">\r\n                <!-- Tab panes -->\r\n                <div class=\"tab-content\">\r\n                  <div class=\"tab-pane\" id=\"setup\">\r\n                    <!-- <div class=\"right-text-tabs\"> -->\r\n                    <!-- Tab panes -->\r\n                    <div class=\"card-content\" style=\"margin-top:-2em\">\r\n                      <div class=\"nav-tabs-navigation\">\r\n                        <div class=\"nav-tabs-wrapper\">\r\n                          <ul id=\"tabs\" class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n                            <li class=\"active\">\r\n                              <a data-target=\"#directory\" data-toggle=\"tab\" aria-expanded=\"true\">Project Directory</a>\r\n                            </li>\r\n                            <li>\r\n                              <a data-target=\"#description\" data-toggle=\"tab\" aria-expanded=\"true\">Project Description</a>\r\n                            </li>\r\n                            <li>\r\n                              <a data-target=\"#labour\" data-toggle=\"tab\" aria-expanded=\"true\">Project Labour Returns</a>\r\n                            </li>\r\n                            <li>\r\n                              <a data-target=\"#plant\" data-toggle=\"tab\" aria-expanded=\"true\">Project Plant Returns</a>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      </div>\r\n                      <div id=\"my-tab-content\" class=\"tab-content\">\r\n                        <div class=\"tab-pane active\" id=\"directory\">\r\n                          <div class=\"card card-plain col-md-12\" style=\" padding-left: 0px; padding-right: 0px\">\r\n                            <button type=\"button\" class=\"btn btn-info btn-simple\" data-toggle=\"modal\" data-target=\"#myModal\">Add Company to Directory</button>\r\n                            <table class=\"table\">\r\n                              <thead>\r\n                                <tr>\r\n                                  <th>Role</th>\r\n                                  <th>Company</th>\r\n                                  <th>Address</th>\r\n                                  <th>Contact Name</th>\r\n                                  <!-- <th>Title</th> -->\r\n                                  <th>Tel/Fax</th>\r\n                                  <th>Mobile</th>\r\n                                  <th>Email Address</th>\r\n                                </tr>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr>\r\n                                  <td style=\" padding-left: 0px; padding-right: 0px\">\r\n                                    <textarea class=\"form-control setp-control-xs\" name=\"\" id=\"\" cols=\"30\" rows=\"1\" placeholder=\"Principal\" style=\"padding-left: 5px; padding-right: 5px\"></textarea>\r\n                                  </td>\r\n                                  <td style=\" padding-left: 0px; padding-right: 0px\">\r\n                                    <textarea class=\"form-control setp-control-xs\" name=\"\" id=\"\" cols=\"30\" rows=\"1\" placeholder=\"Southland\" style=\"padding-left: 5px; padding-right: 5px\"></textarea>\r\n                                  </td>\r\n                                  <td style=\"padding-top:1.em; padding-left: 0px; padding-right: 0px\">\r\n                                    <textarea class=\"form-control setp-control\" name=\"\" id=\"\" cols=\"50\" rows=\"1\" placeholder=\"1 First Street\" style=\"padding-left: 5px; padding-right: 5px\"></textarea>\r\n                                  </td>\r\n                                  <td style=\" padding-left: 0px; padding-right: 0px\">\r\n                                    <textarea class=\"form-control setp-control\" name=\"\" id=\"\" cols=\"30\" rows=\"1\" placeholder=\"Simon Moyo\" style=\"padding-left: 5px; padding-right: 5px\"></textarea>\r\n                                  </td>\r\n                                  <td style=\" padding-left: 0px; padding-right: 0px\">\r\n                                    <textarea class=\"form-control setp-control-txt\" name=\"\" id=\"\" cols=\"30\" rows=\"1\" placeholder=\"042585255\" style=\"padding-left: 5px; padding-right: 5px\"></textarea>\r\n                                  </td>\r\n                                  <td style=\" padding-left: 0px; padding-right: 0px\">\r\n                                    <textarea class=\"form-control setp-control-txt\" name=\"\" id=\"\" cols=\"30\" rows=\"1\" placeholder=\"0785245225\" style=\"padding-left: 5px; padding-right: 5px\"></textarea>\r\n                                  </td>\r\n                                  <td style=\" padding-left: 0px; padding-right: 1px\">\r\n                                    <textarea class=\"form-control setp-control\" name=\"\" id=\"\" cols=\"30\" rows=\"1\" placeholder=\"simon@mail.com\" style=\"padding-left: 5px; padding-right: 0px\"></textarea>\r\n                                  </td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                            <br>\r\n                            <div>\r\n                              <button type=\"button\" class=\"btn btn-primary btn-simple pull-right\" ng-click=\"addRegister(comp)\">Save</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"tab-pane \" id=\"description\">\r\n                          <div class=\"col-md-10 col-md-offset-1\">\r\n                            <!-- <div class=\"card\"> -->\r\n                            <div class=\"card-header\">\r\n                              <h5 class=\"card-title\">Project Description</h5>\r\n                              <p class=\"category\">The description of your project must divide your project into different sections e.g. Blocks\r\n                                and/or other sections like Civils etc.</p>\r\n                              <p class=\"category\">These sections may be further divided into sub-sections for each section e.g. a block divided\r\n                                into floors. Tasks and activities may then be planned within this framework.</p>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n                              <div id=\"acordeon\">\r\n                                <div class=\"panel-group\" id=\"accordion\">\r\n                                  <!-- ngRepeat: section in thisProjectDescription -->\r\n                                </div>\r\n                                <!--  end acordeon -->\r\n                              </div>\r\n                            </div>\r\n                            <button type=\"button\" class=\"btn btn-info btn-simple\" data-toggle=\"modal\" data-target=\"#sectionModal\" ng-click=\"resetSection()\">Add new Section</button>\r\n                            <!-- </div> -->\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"tab-pane \" id=\"labour\">\r\n                          <div class=\"col-md-10 col-md-offset-1\">\r\n                            <!-- <div class=\"card\"> -->\r\n                            <div class=\"card-header\">\r\n                              <h5 class=\"card-title\">Project Labour Returns</h5>\r\n                              <p class=\"category\">The description of your project must divide your project into different sections e.g. Blocks\r\n                                and/or other sections like Civils etc.</p>\r\n                              <p class=\"category\">These sections may be further divided into sub-sections for each section e.g. a block divided\r\n                                into floors. Tasks and activities may then be planned within this framework.</p>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n                              <div id=\"acordeon\">\r\n                                <div class=\"panel-group\" id=\"accordion\">\r\n                                  <!-- ngRepeat: section in thisProjectDescription -->\r\n                                </div>\r\n                                <!--  end acordeon -->\r\n                              </div>\r\n                            </div>\r\n                            <button type=\"button\" class=\"btn btn-info btn-simple\" data-toggle=\"modal\" data-target=\"#sectionModal\" ng-click=\"resetSection()\">Add new Section</button>\r\n                            <!-- </div> -->\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"tab-pane \" id=\"plant\">\r\n                          <div class=\"col-md-10 col-md-offset-1\">\r\n                            <!-- <div class=\"card\"> -->\r\n                            <div class=\"card-header\">\r\n                              <h5 class=\"card-title\">Project Plant Returns</h5>\r\n                              <p class=\"category\">The description of your project must divide your project into different sections e.g. Blocks\r\n                                and/or other sections like Civils etc.</p>\r\n                              <p class=\"category\">These sections may be further divided into sub-sections for each section e.g. a block divided\r\n                                into floors. Tasks and activities may then be planned within this framework.</p>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n                              <div id=\"acordeon\">\r\n                                <div class=\"panel-group\" id=\"accordion\">\r\n                                  <!-- ngRepeat: section in thisProjectDescription -->\r\n                                </div>\r\n                                <!--  end acordeon -->\r\n                              </div>\r\n                            </div>\r\n                            <button type=\"button\" class=\"btn btn-info btn-simple\" data-toggle=\"modal\" data-target=\"#sectionModal\" ng-click=\"resetSection()\">Add new Section</button>\r\n                            <!-- </div> -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"dash\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-4 col-sm-6\" style=\"padding-left:45px\">\r\n                        <div class=\"card\" style=\"height:480px\">\r\n                          <!--  style=\"height:600px\" -->\r\n                          <div class=\"card-content btn-magnify\">\r\n                            <div class=\"row col-x-5\" style=\"margin-left:1em; padding-bottom: -1em\">\r\n                              <div class=\"pull-left\" style=\"color: steelblue\">\r\n                                <!-- <a><font size=\"5\">Colours Personal</font></a> -->\r\n                                <h5>\r\n                                  <i class=\"ti-palette\"></i> Colours Personal</h5>\r\n                              </div>\r\n                            </div>\r\n                            <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\r\n                            <div class=\"pull-left\" style=\"margin-left:1em;padding-top: -1em; color: steelblue \">\r\n                              <font size=\"3\">My Diary Today</font>\r\n                            </div>\r\n                            <div class=\"spacer\" style=\"height: 2em;\"></div>\r\n                            <div class=\"row\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-xs-6\" style=\"margin-left:2.0em\">\r\n                                  <p style=\"color:lightgrey\">\r\n                                    <font size=3>Meeting</font>\r\n                                  </p>\r\n                                </div>\r\n                                <div class=\"col-xs-4\">\r\n                                  <div class=\"pull-right\">\r\n                                    <span class=\"label label-warning\">\r\n                                      1000 Hrs\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-xs-6\" style=\"margin-left:2.0em\">\r\n                                  <p style=\"color:lightgrey\">\r\n                                    <font size=3>Email</font>\r\n                                  </p>\r\n                                </div>\r\n                                <div class=\"col-xs-4\">\r\n                                  <div class=\"pull-right\">\r\n                                    <span class=\"label label-success\">\r\n                                      1230 Hrs\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-xs-6\" style=\"margin-left:2.0em\">\r\n                                  <p style=\"color:lightgrey\">\r\n                                    <font size=3>Skype</font>\r\n                                  </p>\r\n                                </div>\r\n                                <div class=\"col-xs-4\">\r\n                                  <div class=\"pull-right\">\r\n                                    <span class=\"label label-success\">\r\n                                      1400 Hrs\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-content btn-magnify\">\r\n                            <div class=\"pull-left\" style=\"margin-left:1.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\r\n                              <a>\r\n                                <i class=\"fa fa-pie-chart fa-fw\"></i>\r\n                                <font size=\"3\"> Metrics</font>\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"spacer\" style=\"height:2.1em\"></div>\r\n                            <!-- chart1 -->\r\n                            <div class=\"row\">\r\n                              <div class=\"card-content\">\r\n                                <a class=\"pull-left\" style=\"color:lightgrey; margin-left:1em\">\r\n                                  <font size=3> Total Progress</font>\r\n                                </a>\r\n                                <div id=\"chartTotalEarnings\"></div>\r\n                              </div>\r\n                              <div class=\"card-content\">\r\n                                <p style=\"color:lightgrey;margin-left:1em\">\r\n                                  <font size=3>Weekly progress</font>\r\n                                </p>\r\n                                <div id=\"chartTotalSubscriptions\"></div>\r\n                              </div>\r\n                            </div>\r\n                            <!-- ****End of Charts**** -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-sm-6\">\r\n                        <div class=\"card\" style=\"height:480px\">\r\n                          <!--  style=\"height:410px\" data-background-color=\"green\" -->\r\n                          <div class=\"card-content btn-magnify\">\r\n                            <div class=\"row col-x-5\" style=\"margin-left:1em; padding-bottom: -1em \">\r\n                              <div class=\"pull-left\" style=\"color: steelblue\">\r\n                                <h5>\r\n                                  <i class=\"ti-layout-tab-v\"></i> Colours Projects</h5>\r\n                              </div>\r\n                            </div>\r\n                            <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\r\n                            <div class=\"pull-left\" style=\"margin-left:.5em;padding-top: -1em; color: steelblue; \">\r\n                              <font size=\"3\">My Current Priority Projects</font>\r\n                            </div>\r\n                            <div class=\"spacer\" style=\"height:2.4em;\"></div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10 \" style=\"margin-left:1.0em\">\r\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                  <font size=3>Joina City</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10 \" style=\"margin-left:1.0em\">\r\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                  <font size=3>Aripo Offices</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10 \" style=\"margin-left:1.0em\">\r\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                  <font size=3>Colours Software</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10 \" style=\"margin-left:1.0em\">\r\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                  <font size=3>Beitbridge</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-content btn-magnify\">\r\n                            <div class=\"pull-left\" style=\"margin-left:1.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\r\n                              <a>\r\n                                <font size=\"3\">\r\n                                  <i class=\"fa fa-line-chart fa-fw\"></i> Project Metrics</font>\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"spacer\" style=\"height:2.1em\"></div>\r\n                            <!-- chart1 -->\r\n                            <div class=\"row\">\r\n                              <div class=\"card-content\">\r\n                                <a class=\"pull-left\" style=\"color:lightgrey; margin-left:1em\">\r\n                                  <font size=3> Total Progress</font>\r\n                                </a>\r\n                                <div id=\"chartTotalDownloads\"></div>\r\n                              </div>\r\n                              <div class=\"card-content\">\r\n                                <p style=\"color:lightgrey;margin-left:1em\">\r\n                                  <font size=3>Weekly progress</font>\r\n                                </p>\r\n                                <div id=\"chartActivity\"></div>\r\n                              </div>\r\n                            </div>\r\n                            <!-- ****End of Charts**** -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-sm-6\">\r\n                        <div class=\"card\" style=\"height:480px\">\r\n                          <!--  style=\"height:410px\" -->\r\n                          <div class=\"card-content btn-magnify\">\r\n                            <div class=\"row col-x-5\" style=\"margin-left:.5em; padding-bottom: -1em \">\r\n                              <div class=\"pull-left\" style=\"color:steelblue\">\r\n                                <h5>\r\n                                  <i class=\"ti-briefcase\"></i> Colours Enterprise</h5>\r\n                              </div>\r\n                            </div>\r\n                            <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\r\n                            <div class=\"pull-left\" style=\"margin-left:1em;padding-top: -1em; color: steelblue; \">\r\n                              <font size=\"3\">High Priority Enterprise Tasks</font>\r\n                            </div>\r\n                            <!-- <div class=\"numbers\" style=\"margin-left:1em; color:rgb(15, 4, 4)\">High Priority Enterprise Tasks</div> -->\r\n                            <div class=\"spacer\" style=\"height:2.4em;\"></div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10 \" style=\"margin-left:1em\">\r\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                  <!-- style=\"color:darkgrey\" -->\r\n                                  <font size=3>Send Agenda</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10\" style=\"margin-left:1em\">\r\n                                <a href=\"#Respond_to_mail\" style=\"color:lightgrey\">\r\n                                  <font size=3>Respond to Mail</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10\" style=\"margin-left:1em\">\r\n                                <a href=\"#Contact_Supplier\" style=\"color:lightgrey\">\r\n                                  <font size=3>Contact Supplier</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10\" style=\"margin-left:1em\">\r\n                                <a href=\"#Aripo\" style=\"color:lightgrey\">\r\n                                  <font size=3>Aripo</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-content btn-magnify\">\r\n                            <div class=\"pull-left\" style=\"margin-left:1.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\r\n                              <a>\r\n                                <font size=\"3\">\r\n                                  <i class=\"fa fa-area-chart fa-fw\"></i> Enterprise Metrics</font>\r\n                                <!-- color=\"steelblue\" -->\r\n                                <!-- <span class=\"text-muted\">Projects </span>Register -->\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"spacer\" style=\"height:2.1em\"></div>\r\n                            <!-- chart1 -->\r\n                            <div class=\"row\">\r\n                              <div class=\"card-content\">\r\n                                <a style=\"color:lightgrey;margin-left:0.78em\">\r\n                                  <font size=3>Total progress</font>\r\n                                </a>\r\n                                <div id=\"chartEnt1\" class=\"ct-chart\"></div>\r\n                              </div>\r\n                              <div class=\"card-content\">\r\n                                <p style=\"color:lightgrey;margin-left:0.78em\">\r\n                                  <font size=3>Weekly progress</font>\r\n                                </p>\r\n                                <div id=\"chartEnt2\" class=\"ct-chart\"></div>\r\n                              </div>\r\n                            </div>\r\n                            <!-- ****End of Charts**** -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"standards\">\r\n                    <div class=\"col-md-12 \">\r\n                      <!-- <div class=\"card\"> -->\r\n                      <div>\r\n                        <h5 class=\"title\" style=\"margin-top:0em; color:darkslategray;\">Standards...</h5>\r\n                        <p class=\"category\">Map out your main life activities.\r\n                          <br>These are task classifications under which you do most of your daily activities\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"planning\">\r\n                    <div class=\"card-content\">\r\n                      <div>\r\n                        <h5 class=\"title\" style=\"margin-top:0em; color:darkslategray; margin-bottom:-1.5em\">Planning...</h5>\r\n                      </div>\r\n                      <div class=\"nav-tabs-navigation\">\r\n                        <div class=\"nav-tabs-wrapper\">\r\n                          <ul id=\"tabs\" class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n                            <li class=\"active\">\r\n                              <a href=\"#home\" data-toggle=\"tab\">Task Scheduler</a>\r\n                            </li>\r\n                            <li>\r\n                              <a href=\"#profile\" data-toggle=\"tab\">PEP Matrix</a>\r\n                            </li>\r\n                            <li>\r\n                              <a href=\"#calendar\" data-toggle=\"tab\">Calendar</a>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      </div>\r\n                      <div id=\"my-tab-content\" class=\"tab-content text-center\">\r\n                        <div class=\"tab-pane active\" id=\"home\">\r\n                          <!-- Task Scheduler -->\r\n                          <div class=\"col-md-12\">\r\n                            <div style=\"color: grey\">\r\n                              <div>\r\n                                <h5 class=\"title\" style=\"margin-top:0em; color: grey\">Task Scheduler</h5>\r\n                              </div>\r\n                              <div class=\"content\">\r\n                                <table class=\"table-nested\">\r\n                                  <thead>\r\n                                    <tr>\r\n                                      <th></th>\r\n                                      <th class=\"cell-input\">\r\n                                        <span class=\"ti-plus\"></span>Task Name</th>\r\n                                      <th> Duration </th>\r\n                                      <th> Start </th>\r\n                                      <th> End </th>\r\n                                      <th> Champion </th>\r\n                                    </tr>\r\n                                  </thead>\r\n                                  <!-- ngRepeat: item in list -->\r\n                                  <tbody>\r\n                                    <tr>\r\n                                      <form class=\"ng-pristine ng-valid\"></form>\r\n                                      <td class=\"cell-input\">\r\n                                        <input type=\"text\" placeholder=\"New Task\">\r\n                                      </td>\r\n                                      <td class=\"cell-input\">\r\n                                        <input type=\"text\" placeholder=\"duration\">\r\n                                      </td>\r\n                                      <td class=\"cell-input\">\r\n                                        <input type=\"date\" placeholder=\"start\">\r\n                                      </td>\r\n                                      <td class=\"cell-input\">\r\n                                        <input type=\"date\" placeholder=\"end\">\r\n                                      </td>\r\n                                      <td class=\"cell-input\">\r\n                                        <input type=\"text\" placeholder=\"Project Champion\">\r\n                                      </td>\r\n                                    </tr>\r\n                                  </tbody>\r\n                                </table>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"profile\">\r\n                          <p>will put code here</p>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"calendar\">\r\n                          <div class=\"container-fluid\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-10 col-md-offset-1\">\r\n                                <div class=\"card card-calendar\">\r\n                                  <div class=\"card-content\">\r\n                                    <div id=\"fullCalendar\"></div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane active\" id=\"impl\">\r\n                    <div class=\"col-md-12 \">\r\n                      <!-- <div class=\"card\"> -->\r\n                      <div class=\"card-header\">\r\n                        <h5 class=\"title\" style=\"margin-top:0em; color:darkslategray; margin-bottom:-1em\">Implementation</h5>\r\n                      </div>\r\n                      <div class=\"card-content\">\r\n                        <div class=\"nav-tabs-navigation\">\r\n                          <div class=\"nav-tabs-wrapper\">\r\n                            <ul id=\"tabs\" class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n                              <li class=\"active\">\r\n                                <a href=\"#things\" data-toggle=\"tab\">Things To Do In Tray</a>\r\n                              </li>\r\n                              <li>\r\n                                <a href=\"#weekly\" data-toggle=\"tab\">Weekly Calendar</a>\r\n                              </li>\r\n                              <!-- <li>\r\n                                <a href=\"#daily\" data-toggle=\"tab\">Daily Diary</a>\r\n                              </li> -->\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                        <div id=\"my-tab-content3\" class=\"tab-content\">\r\n                          <div class=\"tab-pane active\" id=\"things\">\r\n                            <!-- ++++++++++++++++++++++++++Things to do in tray+++++++++++++++++++++++++++++ -->\r\n                            <div class=\"row\">\r\n                              <!-- <div class=\" \"> -->\r\n                              <div class=\"col-lg-6 col-md-8 col-md-offset-1\" id=\"in-tray\">\r\n                                <div class=\"card\" style=\"height: 550px ;padding-left: -1em\">\r\n                                  <div class=\"row card-content impl-card btn-magnify\">\r\n                                    <div class=\"row col-x-5\">\r\n                                      <div class=\"card-header\">\r\n                                        <h4 class=\"panel-title\" style=\"color: steelblue\">\r\n                                          <i class=\"ti-palette\"></i> Things To Do In Tray For The Whole Project</h4>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <!-- <div class=\"spacer\" style=\"height:1em\"></div> -->\r\n                                  <div class=\"card-header\" style=\"margin-left:1em\">\r\n                                    <h4 class=\"panel-title\" style=\"color: steelblue\">Task List</h4>\r\n                                  </div>\r\n                                  <div class=\"spacer\" style=\"height:1em\"></div>\r\n                                  <div class=\"intray2-scroll\">\r\n                                    <div class=\"row card_2nd_lists\">\r\n                                      <div class=\"row pull-left\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"pull-left\" style=\"margin-left:1em;padding-top: -1em; color: rgb(184, 45, 14) \">\r\n                                            <font size=\"3\">Outstanding Tasks</font>\r\n                                          </div>\r\n                                        </div>\r\n                                        <br>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10\">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Joina City</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10 \">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Aripo Offices</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10 \">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Colours Software</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10 \">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Beitbridge</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"spacer\" style=\"height:1em\"></div>\r\n                                    <div class=\"row card_2nd_lists\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"pull-left\" style=\"color: steelblue\">\r\n                                          <font size=\"3\">Current Tasks</font>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"row\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-6\">\r\n                                            <p style=\"color:lightgrey\">\r\n                                              <font size=3>Meeting</font>\r\n                                            </p>\r\n                                          </div>\r\n                                          <div class=\"col-xs-3\">\r\n                                            <div class=\"pull-right\">\r\n                                              <span class=\"label label-warning\">\r\n                                                1000 Hrs\r\n                                              </span>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-6\">\r\n                                            <p style=\"color:lightgrey\">\r\n                                              <font size=3>Email</font>\r\n                                            </p>\r\n                                          </div>\r\n                                          <div class=\"col-xs-3\">\r\n                                            <div class=\"pull-right\">\r\n                                              <span class=\"label label-success\">\r\n                                                1230 Hrs\r\n                                              </span>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-6\">\r\n                                            <p style=\"color:lightgrey\">\r\n                                              <font size=3>Skype</font>\r\n                                            </p>\r\n                                          </div>\r\n                                          <div class=\"col-xs-3\">\r\n                                            <div class=\"pull-right\">\r\n                                              <span class=\"label label-success\">\r\n                                                1400 Hrs\r\n                                              </span>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"spacer\" style=\"height:.5em\"></div>\r\n                                    <div class=\"row card_2nd_lists\" style=\" margin-left: 0px\">\r\n                                      <div class=\"card-content btn-magnify\">\r\n                                        <div class=\"pull-left\" style=\"margin-left:1.0em; padding-top: 1em\">\r\n                                          <a>\r\n                                            <i class=\"fa fa-pie-chart fa-fw\"></i>\r\n                                            <font size=\"3\"> Upcoming Tasks</font>\r\n                                          </a>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"spacer\" style=\"height:3em\"></div>\r\n                                      <div class=\"row card_2nd_lists\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"pull-left\" style=\"color: steelblue\">\r\n                                            <font size=\"3\">Short Term Tasks</font>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10\">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Beitbridge</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10\">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Beitbridge</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"spacer\" style=\"height:1em\"></div>\r\n                                      <div class=\"row card_2nd_lists\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"pull-left\" style=\"color: steelblue\">\r\n                                            <font size=\"3\">Medium Term Tasks</font>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10\">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Beitbridge</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10\">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Beitbridge</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"spacer\" style=\"height:1em\"></div>\r\n                                      <div class=\"row card_2nd_lists\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"pull-left\" style=\"color: steelblue\">\r\n                                            <font size=\"3\">Long Term Tasks</font>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10\">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Kunzwi</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10 \">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Beitbridge</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <br>\r\n                                  <div class=\"Search-Add\" style=\"margin-left:2em\">\r\n                                    <div class=\"row dropup\">\r\n                                      <button class=\"panel-default dropdown-toggle btn btn-simple\" type=\"button\" data-toggle=\"dropdown\">Add New</button>\r\n                                      <ul class=\"dropdown-menu\">\r\n                                        <li>\r\n                                          <div class=\"action-form\">\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                <div class=\"card-content\">\r\n                                                  <p style=\"color:lightgrey\">\r\n                                                    <font size=3>Action</font>\r\n                                                  </p>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                <div class=\"card-content text-center\">\r\n                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Create action\">\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                <div class=\"card-content text-center\">\r\n                                                  <p style=\"color:lightgrey\">\r\n                                                    <font size=3>Units</font>\r\n                                                  </p>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                <div class=\"card-content text-center\">\r\n                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                <div class=\"card-content text-center\">\r\n                                                  <p style=\"color:lightgrey\">\r\n                                                    <font size=3>Target Qty</font>\r\n                                                  </p>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                <div class=\"card-content text-center\">\r\n                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </li>\r\n                                      </ul>\r\n                                    </div>\r\n                                    <br>\r\n                                    <div class=\"input-group\" style=\" width: 290px\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"q\">\r\n                                      <div class=\"input-group-btn\">\r\n                                        <button class=\"btn btn-default btn-search\" style=\"color: #999\" type=\"submit\">\r\n                                          <i class=\"ti-search\"></i>\r\n                                        </button>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"spacer\" style=\"height:1em\"></div>\r\n                                  </div>\r\n\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"col-lg-5 col-md-8\" id=\"weekly-list\">\r\n                                <div class=\"card\" style=\"height:550px; padding-left: -1em\">\r\n\r\n\r\n                                  <div class=\"row card-content impl-card btn-magnify\" style=\" margin-left: 0px;padding-left: 9px\">\r\n                                    <div class=\"card-header\">\r\n                                      <h4 class=\"panel-title\" style=\"color: steelblue\">Allocate to a Company</h4>\r\n                                    </div>\r\n                                    <div class=\"spacer\" style=\"height:1em\"></div>\r\n                                    <div class=\"card-header\">\r\n                                      <h4 class=\"panel-title\" style=\"color: steelblue\">Company List</h4>\r\n                                    </div>\r\n                                    <div class=\"spacer\" style=\"height:1em\"></div>\r\n                                    <div class=\"card-content intray2-scroll\">\r\n                                      <div id=\"acordeon\">\r\n                                        <div class=\"panel-group\" id=\"accordion\">\r\n                                          <div class=\"panel panel-border panel-default\">\r\n                                            <a data-toggle=\"collapse\" href=\"#collapseOne\">\r\n                                              <div class=\"panel-heading\">\r\n                                                <h4 class=\"panel-title\">\r\n                                                  <!-- class=\"panel-title\" -->\r\n                                                  JH Constructions\r\n                                                  <i class=\"ti-angle-down\"></i>\r\n                                                </h4>\r\n                                              </div>\r\n                                            </a>\r\n                                            <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                                              <div class=\"panel-body\">\r\n                                                <ul style=\" padding-left: 15px\">\r\n                                                  <li>\r\n                                                    Digging\r\n                                                    <input class=\"pull-right\" id=\"checkbox1\" type=\"checkbox\">\r\n                                                    <!-- <div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Units: m3<div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Target quantity: 12 sides by 6.4 m3 -->\r\n                                                  </li>\r\n                                                  <!-- <li class=\"divider\"></li> -->\r\n                                                  <li>\r\n                                                    Wood wook\r\n                                                    <input class=\"pull-right\" id=\"checkbox2\" type=\"checkbox\">\r\n                                                    <!-- <div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Units: m2<div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Target quantity: 2x12 sides 8 m2 -->\r\n                                                  </li>\r\n                                                  <!-- <li class=\"divider\"></li> -->\r\n                                                  <li>\r\n                                                    Levelling\r\n                                                    <input class=\"pull-right\" id=\"checkbox3\" type=\"checkbox\">\r\n                                                    <!-- <div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Units: m2<div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Target quantity: 12 sides by 0.64 m3 -->\r\n                                                  </li>\r\n                                                  <!-- <li class=\"divider\"></li> -->\r\n                                                  <li>\r\n                                                    Concrete\r\n                                                    <input class=\"pull-right\" id=\"checkbox3\" type=\"checkbox\">\r\n                                                    <!-- <div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Units: m3<div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Target quantity: 12 sides by 6.4 m3 -->\r\n                                                  </li>\r\n                                                  <!-- <li class=\"divider\"></li> -->\r\n                                                  <li>\r\n                                                    Slab\r\n                                                    <input class=\"pull-right\" id=\"checkbox4\" type=\"checkbox\">\r\n                                                    <!-- <div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Units: m2<div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Target quantity: ......... -->\r\n                                                  </li>\r\n                                                  <br>\r\n                                                  <div class=\"row dropup\">\r\n                                                    <a class=\"panel-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Add action item</a>\r\n                                                    <ul class=\"dropdown-menu\">\r\n                                                      <li>\r\n                                                        <div class=\"action-form\">\r\n                                                          <a>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Action</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Create action\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Units</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Target Qty</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                          </a>\r\n                                                        </div>\r\n                                                      </li>\r\n                                                    </ul>\r\n                                                  </div>\r\n                                                </ul>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"panel panel-default\">\r\n                                            <a data-toggle=\"collapse\" href=\"#collapseTwo\">\r\n                                              <div class=\"panel-heading\">\r\n                                                <h4 class=\"panel-title\">\r\n                                                  Southland\r\n                                                  <i class=\"ti-angle-down\"></i>\r\n                                                </h4>\r\n                                              </div>\r\n                                            </a>\r\n                                            <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                                              <div class=\"panel-body\">\r\n                                                <ul style=\" padding-left: 15px\">\r\n                                                  <li>\r\n                                                    Site Visit\r\n                                                    <input class=\"pull-right\" id=\"checkbox1\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Council Paper Work\r\n                                                    <input class=\"pull-right\" id=\"checkbox2\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Planning\r\n                                                    <input class=\"pull-right\" id=\"checkbox3\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Architecture\r\n                                                    <input class=\"pull-right\" id=\"checkbox3\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Quantity Survey\r\n                                                    <input class=\"pull-right\" id=\"checkbox4\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <br>\r\n                                                  <div class=\"row dropup\">\r\n                                                    <a class=\"panel-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Add action item</a>\r\n                                                    <ul class=\"dropdown-menu\">\r\n                                                      <li>\r\n                                                        <div class=\"action-form\">\r\n                                                          <a>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Action</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Create action\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Units</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Target Qty</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                          </a>\r\n                                                        </div>\r\n                                                      </li>\r\n                                                    </ul>\r\n                                                  </div>\r\n                                                </ul>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"panel panel-border panel-default\">\r\n                                            <a data-toggle=\"collapse\" href=\"#collapseThree\">\r\n                                              <div class=\"panel-heading\">\r\n                                                <h4 class=\"panel-title\">\r\n                                                  Museyamwa\r\n                                                  <i class=\"ti-angle-down\"></i>\r\n                                                </h4>\r\n                                              </div>\r\n                                            </a>\r\n                                            <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                                              <div class=\"panel-body\">\r\n                                                <ul style=\" padding-left: 15px\">\r\n                                                  <li>\r\n                                                    Digging\r\n                                                    <input class=\"pull-right\" id=\"checkbox1\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Wood wook\r\n                                                    <input class=\"pull-right\" id=\"checkbox2\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Levelling\r\n                                                    <input class=\"pull-right\" id=\"checkbox3\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Concrete\r\n                                                    <input class=\"pull-right\" id=\"checkbox3\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Slab\r\n                                                    <input class=\"pull-right\" id=\"checkbox4\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <br>\r\n                                                  <div class=\"row dropup\">\r\n                                                    <a class=\"panel-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Add action item</a>\r\n                                                    <ul class=\"dropdown-menu\">\r\n                                                      <li>\r\n                                                        <div class=\"action-form\">\r\n                                                          <a>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Action</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Create action\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Units</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Target Qty</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                          </a>\r\n                                                        </div>\r\n                                                      </li>\r\n                                                    </ul>\r\n                                                  </div>\r\n                                                </ul>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <!--  end acordeon -->\r\n                                    </div>\r\n                                    <br>\r\n                                    <div class=\"\" style=\"margin-left:1em\">\r\n                                      <div class=\"row dropup\">\r\n                                        <button class=\"panel-default dropdown-toggle btn btn-simple\" type=\"button\" data-toggle=\"dropdown\">Add New Company</button>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                          <li>\r\n                                            <div class=\"action-form\">\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-6 col-lg-3\">\r\n                                                  <div class=\"card-content\">\r\n                                                    <p style=\"color:lightgrey\">\r\n                                                      <font size=3>Action</font>\r\n                                                    </p>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-6 col-lg-3\">\r\n                                                  <div class=\"card-content text-center\">\r\n                                                    <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Create action\">\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-6 col-lg-3\">\r\n                                                  <div class=\"card-content text-center\">\r\n                                                    <p style=\"color:lightgrey\">\r\n                                                      <font size=3>Units</font>\r\n                                                    </p>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-6 col-lg-3\">\r\n                                                  <div class=\"card-content text-center\">\r\n                                                    <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-6 col-lg-3\">\r\n                                                  <div class=\"card-content text-center\">\r\n                                                    <p style=\"color:lightgrey\">\r\n                                                      <font size=3>Target Qty</font>\r\n                                                    </p>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-6 col-lg-3\">\r\n                                                  <div class=\"card-content text-center\">\r\n                                                    <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </li>\r\n                                        </ul>\r\n                                      </div>\r\n                                      <br>\r\n                                      <div class=\"input-group\" style=\" width: 200px\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"q\">\r\n                                        <div class=\"input-group-btn\">\r\n                                          <button class=\"btn btn-default btn-search\" style=\"color: #999\" type=\"submit\">\r\n                                            <i class=\"ti-search\"></i>\r\n                                          </button>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"tab-pane\" id=\"weekly\">\r\n                            <!-- ++++++++++++++++++++++++++++++++Weekly List++++++++++++++++++++++++++++++++ -->\r\n                            <div class=\"row\">\r\n                              <!-- <div class=\" \"> -->\r\n                              <div class=\"col-lg-6 col-md-8 col-md-offset-1\" id=\"in-tray\">\r\n                                <div class=\"card\" style=\"height: 550px ;padding-left: -1em\">\r\n                                  <div class=\"row card-content impl-card btn-magnify\">\r\n                                    <div class=\"row col-x-5\">\r\n                                      <div class=\"card-header\">\r\n                                        <h4 class=\"panel-title\" style=\"color: steelblue\">\r\n                                          <i class=\"ti-palette\"></i> Things To Do In Tray For Each Company</h4>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <!-- <div class=\"spacer\" style=\"height:1em\"></div> -->\r\n                                  <div class=\"card-header\" style=\"margin-left:1em\">\r\n                                    <h4 class=\"panel-title\" style=\"color: steelblue\">Task List</h4>\r\n                                  </div>\r\n                                  <div class=\"spacer\" style=\"height:1em\"></div>\r\n                                  <div class=\"intray2-scroll\">\r\n                                    <div class=\"row card_2nd_lists\">\r\n                                      <div class=\"row pull-left\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"pull-left\" style=\"margin-left:1em;padding-top: -1em; color: rgb(184, 45, 14) \">\r\n                                            <font size=\"3\">Outstanding Tasks</font>\r\n                                          </div>\r\n                                        </div>\r\n                                        <br>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10\">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Joina City</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10 \">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Aripo Offices</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10 \">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Colours Software</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10 \">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Beitbridge</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"spacer\" style=\"height:1em\"></div>\r\n                                    <div class=\"row card_2nd_lists\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"pull-left\" style=\"color: steelblue\">\r\n                                          <font size=\"3\">Current Tasks</font>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"row\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-6\">\r\n                                            <p style=\"color:lightgrey\">\r\n                                              <font size=3>Meeting</font>\r\n                                            </p>\r\n                                          </div>\r\n                                          <div class=\"col-xs-3\">\r\n                                            <div class=\"pull-right\">\r\n                                              <span class=\"label label-warning\">\r\n                                                1000 Hrs\r\n                                              </span>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-6\">\r\n                                            <p style=\"color:lightgrey\">\r\n                                              <font size=3>Email</font>\r\n                                            </p>\r\n                                          </div>\r\n                                          <div class=\"col-xs-3\">\r\n                                            <div class=\"pull-right\">\r\n                                              <span class=\"label label-success\">\r\n                                                1230 Hrs\r\n                                              </span>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-6\">\r\n                                            <p style=\"color:lightgrey\">\r\n                                              <font size=3>Skype</font>\r\n                                            </p>\r\n                                          </div>\r\n                                          <div class=\"col-xs-3\">\r\n                                            <div class=\"pull-right\">\r\n                                              <span class=\"label label-success\">\r\n                                                1400 Hrs\r\n                                              </span>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"spacer\" style=\"height:.5em\"></div>\r\n                                    <div class=\"row card_2nd_lists\" style=\" margin-left: 0px\">\r\n                                      <div class=\"card-content btn-magnify\">\r\n                                        <div class=\"pull-left\" style=\"margin-left:1.0em; padding-top: 1em\">\r\n                                          <a>\r\n                                            <i class=\"fa fa-pie-chart fa-fw\"></i>\r\n                                            <font size=\"3\"> Upcoming Tasks</font>\r\n                                          </a>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"spacer\" style=\"height:3em\"></div>\r\n                                      <div class=\"row card_2nd_lists\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"pull-left\" style=\"color: steelblue\">\r\n                                            <font size=\"3\">Short Term Tasks</font>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10\">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Beitbridge</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10\">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Beitbridge</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"spacer\" style=\"height:1em\"></div>\r\n                                      <div class=\"row card_2nd_lists\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"pull-left\" style=\"color: steelblue\">\r\n                                            <font size=\"3\">Medium Term Tasks</font>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10\">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Beitbridge</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10\">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Beitbridge</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"spacer\" style=\"height:1em\"></div>\r\n                                      <div class=\"row card_2nd_lists\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"pull-left\" style=\"color: steelblue\">\r\n                                            <font size=\"3\">Long Term Tasks</font>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10\">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Kunzwi</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-xs-10 \">\r\n                                            <a style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                              <font size=3>Beitbridge</font>\r\n                                            </a>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <br>\r\n                                  <div class=\"Search-Add\" style=\"margin-left:2em\">\r\n                                    <div class=\"row dropup\">\r\n                                      <button class=\"panel-default dropdown-toggle btn btn-simple\" type=\"button\" data-toggle=\"dropdown\">Add New</button>\r\n                                      <ul class=\"dropdown-menu\">\r\n                                        <li>\r\n                                          <div class=\"action-form\">\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                <div class=\"card-content\">\r\n                                                  <p style=\"color:lightgrey\">\r\n                                                    <font size=3>Action</font>\r\n                                                  </p>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                <div class=\"card-content text-center\">\r\n                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Create action\">\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                <div class=\"card-content text-center\">\r\n                                                  <p style=\"color:lightgrey\">\r\n                                                    <font size=3>Units</font>\r\n                                                  </p>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                <div class=\"card-content text-center\">\r\n                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                <div class=\"card-content text-center\">\r\n                                                  <p style=\"color:lightgrey\">\r\n                                                    <font size=3>Target Qty</font>\r\n                                                  </p>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                <div class=\"card-content text-center\">\r\n                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </li>\r\n                                      </ul>\r\n                                    </div>\r\n                                    <br>\r\n                                    <div class=\"input-group\" style=\" width: 290px\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"q\">\r\n                                      <div class=\"input-group-btn\">\r\n                                        <button class=\"btn btn-default btn-search\" style=\"color: #999\" type=\"submit\">\r\n                                          <i class=\"ti-search\"></i>\r\n                                        </button>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"spacer\" style=\"height:1em\"></div>\r\n                                  </div>\r\n\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"col-lg-5 col-md-8\" id=\"weekly-list\">\r\n                                <div class=\"card\" style=\"height:550px; padding-left: -1em\">\r\n\r\n\r\n                                  <div class=\"row card-content impl-card btn-magnify\" style=\" margin-left: 0px;padding-left: 9px\">\r\n                                    <div class=\"card-header\">\r\n                                      <h4 class=\"panel-title\" style=\"color: steelblue\">Allocate to Staff</h4>\r\n                                    </div>\r\n                                    <div class=\"spacer\" style=\"height:1em\"></div>\r\n                                    <div class=\"card-header\">\r\n                                      <h4 class=\"panel-title\" style=\"color: steelblue\">Labour Returns</h4>\r\n                                    </div>\r\n                                    <div class=\"spacer\" style=\"height:1em\"></div>\r\n                                    <div class=\"card-content intray2-scroll\">\r\n                                      <div id=\"acordeon\">\r\n                                        <div class=\"panel-group\" id=\"accordion\">\r\n                                          <div class=\"panel panel-border panel-default\">\r\n                                            <a data-toggle=\"collapse\" href=\"#collapseOne\">\r\n                                              <div class=\"panel-heading\">\r\n                                                <h4 class=\"panel-title\">\r\n                                                  <!-- class=\"panel-title\" -->\r\n                                                  Tim Mpandeni\r\n                                                  <i class=\"ti-angle-down\"></i>\r\n                                                </h4>\r\n                                              </div>\r\n                                            </a>\r\n                                            <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                                              <div class=\"panel-body\">\r\n                                                <ul style=\" padding-left: 15px\">\r\n                                                  <li>\r\n                                                    Digging\r\n                                                    <input class=\"pull-right\" id=\"checkbox1\" type=\"checkbox\">\r\n                                                    <!-- <div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Units: m3<div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Target quantity: 12 sides by 6.4 m3 -->\r\n                                                  </li>\r\n                                                  <!-- <li class=\"divider\"></li> -->\r\n                                                  <li>\r\n                                                    Wood wook\r\n                                                    <input class=\"pull-right\" id=\"checkbox2\" type=\"checkbox\">\r\n                                                    <!-- <div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Units: m2<div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Target quantity: 2x12 sides 8 m2 -->\r\n                                                  </li>\r\n                                                  <!-- <li class=\"divider\"></li> -->\r\n                                                  <li>\r\n                                                    Levelling\r\n                                                    <input class=\"pull-right\" id=\"checkbox3\" type=\"checkbox\">\r\n                                                    <!-- <div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Units: m2<div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Target quantity: 12 sides by 0.64 m3 -->\r\n                                                  </li>\r\n                                                  <!-- <li class=\"divider\"></li> -->\r\n                                                  <li>\r\n                                                    Concrete\r\n                                                    <input class=\"pull-right\" id=\"checkbox3\" type=\"checkbox\">\r\n                                                    <!-- <div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Units: m3<div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Target quantity: 12 sides by 6.4 m3 -->\r\n                                                  </li>\r\n                                                  <!-- <li class=\"divider\"></li> -->\r\n                                                  <li>\r\n                                                    Slab\r\n                                                    <input class=\"pull-right\" id=\"checkbox4\" type=\"checkbox\">\r\n                                                    <!-- <div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Units: m2<div class=\"spacer\" type=\"hidden\" style=\"width:3em\"></div>Target quantity: ......... -->\r\n                                                  </li>\r\n                                                  <br>\r\n                                                  <div class=\"row dropup\">\r\n                                                    <a class=\"panel-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Add action item</a>\r\n                                                    <ul class=\"dropdown-menu\">\r\n                                                      <li>\r\n                                                        <div class=\"action-form\">\r\n                                                          <a>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Action</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Create action\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Units</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Target Qty</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                          </a>\r\n                                                        </div>\r\n                                                      </li>\r\n                                                    </ul>\r\n                                                  </div>\r\n                                                </ul>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"panel panel-default\">\r\n                                            <a data-toggle=\"collapse\" href=\"#collapseTwo\">\r\n                                              <div class=\"panel-heading\">\r\n                                                <h4 class=\"panel-title\">\r\n                                                  Daniel Chakareka\r\n                                                  <i class=\"ti-angle-down\"></i>\r\n                                                </h4>\r\n                                              </div>\r\n                                            </a>\r\n                                            <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                                              <div class=\"panel-body\">\r\n                                                <ul style=\" padding-left: 15px\">\r\n                                                  <li>\r\n                                                    Site Visit\r\n                                                    <input class=\"pull-right\" id=\"checkbox1\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Council Paper Work\r\n                                                    <input class=\"pull-right\" id=\"checkbox2\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Planning\r\n                                                    <input class=\"pull-right\" id=\"checkbox3\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Architecture\r\n                                                    <input class=\"pull-right\" id=\"checkbox3\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Quantity Survey\r\n                                                    <input class=\"pull-right\" id=\"checkbox4\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <br>\r\n                                                  <div class=\"row dropup\">\r\n                                                    <a class=\"panel-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Add action item</a>\r\n                                                    <ul class=\"dropdown-menu\">\r\n                                                      <li>\r\n                                                        <div class=\"action-form\">\r\n                                                          <a>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Action</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Create action\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Units</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Target Qty</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                          </a>\r\n                                                        </div>\r\n                                                      </li>\r\n                                                    </ul>\r\n                                                  </div>\r\n                                                </ul>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"panel panel-border panel-default\">\r\n                                            <a data-toggle=\"collapse\" href=\"#collapseThree\">\r\n                                              <div class=\"panel-heading\">\r\n                                                <h4 class=\"panel-title\">\r\n                                                  Memory Mpofu\r\n                                                  <i class=\"ti-angle-down\"></i>\r\n                                                </h4>\r\n                                              </div>\r\n                                            </a>\r\n                                            <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                                              <div class=\"panel-body\">\r\n                                                <ul style=\" padding-left: 15px\">\r\n                                                  <li>\r\n                                                    Digging\r\n                                                    <input class=\"pull-right\" id=\"checkbox1\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Wood wook\r\n                                                    <input class=\"pull-right\" id=\"checkbox2\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Levelling\r\n                                                    <input class=\"pull-right\" id=\"checkbox3\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Concrete\r\n                                                    <input class=\"pull-right\" id=\"checkbox3\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <li>\r\n                                                    Slab\r\n                                                    <input class=\"pull-right\" id=\"checkbox4\" type=\"checkbox\">\r\n                                                  </li>\r\n                                                  <br>\r\n                                                  <div class=\"row dropup\">\r\n                                                    <a class=\"panel-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Add action item</a>\r\n                                                    <ul class=\"dropdown-menu\">\r\n                                                      <li>\r\n                                                        <div class=\"action-form\">\r\n                                                          <a>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Action</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Create action\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Units</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <p style=\"color:lightgrey\">\r\n                                                                    <font size=3>Target Qty</font>\r\n                                                                  </p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                              <div class=\"col-sm-6 col-lg-3\">\r\n                                                                <div class=\"card-content text-center\">\r\n                                                                  <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                          </a>\r\n                                                        </div>\r\n                                                      </li>\r\n                                                    </ul>\r\n                                                  </div>\r\n                                                </ul>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <!--  end acordeon -->\r\n                                    </div>\r\n                                    <br>\r\n                                    <div class=\"\" style=\"margin-left:1em\">\r\n                                      <div class=\"row dropup\">\r\n                                        <button class=\"panel-default dropdown-toggle btn btn-simple\" type=\"button\" data-toggle=\"dropdown\">Add New Company</button>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                          <li>\r\n                                            <div class=\"action-form\">\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-6 col-lg-3\">\r\n                                                  <div class=\"card-content\">\r\n                                                    <p style=\"color:lightgrey\">\r\n                                                      <font size=3>Action</font>\r\n                                                    </p>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-6 col-lg-3\">\r\n                                                  <div class=\"card-content text-center\">\r\n                                                    <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Create action\">\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-6 col-lg-3\">\r\n                                                  <div class=\"card-content text-center\">\r\n                                                    <p style=\"color:lightgrey\">\r\n                                                      <font size=3>Units</font>\r\n                                                    </p>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-6 col-lg-3\">\r\n                                                  <div class=\"card-content text-center\">\r\n                                                    <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-6 col-lg-3\">\r\n                                                  <div class=\"card-content text-center\">\r\n                                                    <p style=\"color:lightgrey\">\r\n                                                      <font size=3>Target Qty</font>\r\n                                                    </p>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-6 col-lg-3\">\r\n                                                  <div class=\"card-content text-center\">\r\n                                                    <input type=\"text\" class=\"form-control action-input\" value placeholder=\"Units used\">\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </li>\r\n                                        </ul>\r\n                                      </div>\r\n                                      <br>\r\n                                      <div class=\"input-group\" style=\" width: 200px\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"q\">\r\n                                        <div class=\"input-group-btn\">\r\n                                          <button class=\"btn btn-default btn-search\" style=\"color: #999\" type=\"submit\">\r\n                                            <i class=\"ti-search\"></i>\r\n                                          </button>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"reporting\">\r\n                    <p>Reporting</p>\r\n                    <p>It’s one continuous form where hardware and software function in perfect unison, creating a new generation\r\n                      of phone that’s better by any measure.</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/colprojects/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CalendarComponent = (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
        /*   ************************************** Colours Projects line Charts **************************************    */
        /*  **************** Chart Total Earnings - single line ******************** */
        var dataPrice = {
            labels: ['Jan', 'feb', 'March'],
            series: [
                [340, 300, 570]
            ]
        };
        var optionsPrice = {
            showPoint: false,
            lineSmooth: true,
            height: '90px',
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
        };
        var chartTotalEarnings = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalEarnings', dataPrice, optionsPrice);
        /*  **************** Chart Subscriptions - single line ******************** */
        var dataDays = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [60, 50, 30, 50, 70, 60, 90, 100]
            ]
        };
        var optionsDays = {
            showPoint: false,
            lineSmooth: true,
            height: '90px',
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
                line: 'ct-line ct-red'
            }
        };
        var chartTotalSubscriptions = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalSubscriptions', dataDays, optionsDays);
        /*   ************************************** Colours Projects line Charts **************************************    */
        /*  **************** Chart Total Downloads - single line ******************** */
        var dataDownloads = {
            labels: ['Y14', 'Y15', 'Y16', 'Y17', 'Y18'],
            series: [
                [1000, 3300, 3966, 5256, 8345]
            ]
        };
        var optionsDownloads = {
            showPoint: false,
            lineSmooth: true,
            height: '90px',
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
                line: 'ct-line ct-orange'
            }
        };
        var chartTotalDownloads = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalDownloads', dataDownloads, optionsDownloads);
        /*   **************** 2014 Sales - Bar Chart ********************    */
        var data = {
            labels: ['Jan', 'Feb', 'Mar'],
            series: [
                [542, 443, 320],
                [412, 243, 280]
            ]
        };
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '90px'
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartActivity = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#chartActivity', data, options, responsiveOptions);
        /*   ************************************** Enterprise line Charts **************************************    */
        /*   **************** Ent1line Chart ********************    */
        // tslint:disable-next-line:no-duplicate-variable
        var data = {
            labels: ['Jan', 'Feb', 'Mar'],
            series: [
                [542, 434, 610],
                [230, 503, 710]
            ]
        };
        // tslint:disable-next-line:no-duplicate-variable
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '90px'
        };
        // tslint:disable-next-line:no-duplicate-variable
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartEnt1 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt1', data, options, responsiveOptions);
        /*   **************** Ent2line Chart ********************    */
        var dataSales = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S'],
            series: [
                [287, 385, 562, 698, 895, 952],
                [67, 152, 387, 435, 642, 744],
                [23, 113, 67, 307, 410, 410]
            ]
        };
        var optionsSales = {
            lineSmooth: false,
            low: 0,
            high: 1000,
            showArea: true,
            height: '90px',
            width: '80px',
            axisX: {
                showGrid: false,
            },
            showLine: true,
            showPoint: false,
        };
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[1];
                        }
                    }
                }]
        ];
        var chartEnt2 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt2', dataSales, optionsSales, responsiveSales);
        /* ************************************************* End of Charts ***************************************************** */
        var $calendar = $('#fullCalendar');
        var today = new Date();
        var y = today.getFullYear();
        var m = today.getMonth();
        var d = today.getDate();
        $calendar.fullCalendar({
            viewRender: function (view, element) {
                // We make sure that we activate the perfect scrollbar when the view isn't on Month
                if (view.name !== 'month') {
                    var $fc_scroller = $('.fc-scroller');
                    $fc_scroller.perfectScrollbar();
                }
            },
            header: {
                left: 'title',
                center: 'month,agendaWeek,agendaDay',
                right: 'prev,next,today'
            },
            defaultDate: today,
            selectable: true,
            selectHelper: true,
            views: {
                month: {
                    titleFormat: 'MMMM YYYY'
                    // other view-specific options here
                },
                week: {
                    titleFormat: ' MMMM D YYYY'
                },
                day: {
                    titleFormat: 'D MMM, YYYY'
                }
            },
            select: function (start, end) {
                // on select we show the Sweet Alert modal with an input
                swal({
                    title: 'Create an Event',
                    html: '<div class="form-group">' +
                        '<input class="form-control" placeholder="Event Title" id="input-field">' +
                        '</div>',
                    showCancelButton: true,
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false
                }).then(function (result) {
                    var eventData;
                    var event_title = $('#input-field').val();
                    if (event_title) {
                        eventData = {
                            title: event_title,
                            start: start,
                            end: end
                        };
                        $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
                    }
                    $calendar.fullCalendar('unselect');
                });
            },
            editable: true,
            eventLimit: true,
            // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
            events: [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    className: 'event-default'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d - 4, 6, 0),
                    allDay: false,
                    className: 'event-rose'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 3, 6, 0),
                    allDay: false,
                    className: 'event-rose'
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d - 1, 10, 30),
                    allDay: false,
                    className: 'event-green'
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d + 7, 12, 0),
                    end: new Date(y, m, d + 7, 14, 0),
                    allDay: false,
                    className: 'event-red'
                },
                {
                    title: 'Md-pro Launch',
                    start: new Date(y, m, d - 2, 12, 0),
                    allDay: true,
                    className: 'event-azure'
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false,
                    className: 'event-azure'
                },
                {
                    title: 'Click for Creative Tim',
                    start: new Date(y, m, 21),
                    end: new Date(y, m, 22),
                    url: 'https://www.creative-tim.com/',
                    className: 'event-orange'
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 21),
                    end: new Date(y, m, 22),
                    url: 'https://www.creative-tim.com/',
                    className: 'event-orange'
                }
            ]
        });
        var noUiSlider = __webpack_require__("../../../../nouislider/distribute/nouislider.js");
        var sliderDouble = document.getElementById('sliderDouble');
        noUiSlider.create(sliderDouble, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
        var slider_n1 = document.getElementById('slider_n1');
        noUiSlider.create(slider_n1, {
            start: [10, 100],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
        var slider_n2 = document.getElementById('slider_n2');
        noUiSlider.create(slider_n2, {
            start: [10, 100],
            connect: true,
            range: {
                min: 0,
                max: 500
            }
        });
        var slider_n3 = document.getElementById('slider_n3');
        noUiSlider.create(slider_n3, {
            start: [10, 70],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
        var slider_n4 = document.getElementById('slider_n4');
        noUiSlider.create(slider_n4, {
            start: [10, 40],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
        this.tableDataC = {
            headerRow: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
            dataRows: []
        };
        this.tableDataD = {
            headerRow: ['Task', 'Unit(s)', 'Target, Qty'],
            dataRows: [
                ['1', 'Digging', 'm3', '200m3'],
                ['2', 'Wood wook', 'm2', '120m2'],
                ['3', 'Concrete', 'm3', '200m3'],
            ]
        };
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'calendar-cmp',
            template: __webpack_require__("../../../../../src/app/colprojects/calendar/calendar.component.html")
        })
    ], CalendarComponent);
    return CalendarComponent;
}());

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/colprojects/colprojects.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColprojectsModule", function() { return ColprojectsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overview_overview_component__ = __webpack_require__("../../../../../src/app/colprojects/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stats_stats_component__ = __webpack_require__("../../../../../src/app/colprojects/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__colprojects_routing__ = __webpack_require__("../../../../../src/app/colprojects/colprojects.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/colprojects/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__ = __webpack_require__("../../../../../src/app/colprojects/projects/projects.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { CalendarComponent } from 'app/colprojects/calendar/calendar.component';
var ColprojectsModule = (function () {
    function ColprojectsModule() {
    }
    ColprojectsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__colprojects_routing__["a" /* ColprojectsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__overview_overview_component__["a" /* OverviewComponent */], __WEBPACK_IMPORTED_MODULE_5__stats_stats_component__["a" /* StatsComponent */], __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__["a" /* ProjectsComponent */], __WEBPACK_IMPORTED_MODULE_7__calendar_calendar_component__["a" /* CalendarComponent */]]
        })
    ], ColprojectsModule);
    return ColprojectsModule;
}());

//# sourceMappingURL=colprojects.module.js.map

/***/ }),

/***/ "../../../../../src/app/colprojects/colprojects.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColprojectsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overview_overview_component__ = __webpack_require__("../../../../../src/app/colprojects/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stats_stats_component__ = __webpack_require__("../../../../../src/app/colprojects/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/colprojects/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__ = __webpack_require__("../../../../../src/app/colprojects/projects/projects.component.ts");




var ColprojectsRoutes = [{
        path: '',
        children: [{
                path: 'overview',
                component: __WEBPACK_IMPORTED_MODULE_0__overview_overview_component__["a" /* OverviewComponent */]
            }, {
                path: 'stats',
                component: __WEBPACK_IMPORTED_MODULE_1__stats_stats_component__["a" /* StatsComponent */]
            }, {
                path: 'projects',
                component: __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__["a" /* ProjectsComponent */]
            }, {
                path: 'calendar',
                component: __WEBPACK_IMPORTED_MODULE_2__calendar_calendar_component__["a" /* CalendarComponent */]
            }]
    }];
//# sourceMappingURL=colprojects.routing.js.map

/***/ }),

/***/ "../../../../../src/app/colprojects/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\" style=\"padding-right:40px; padding-left:40px\">\n            <div class=\"col-lg-4 col-sm-6\" style=\"padding-right:20px; padding-left:20px\">\n                <div class=\"card\" style=\"height:480px\">\n                    <!--  style=\"height:600px\" -->\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"row col-x-5\" style=\"margin-left:2em; padding-bottom: -1em\">\n                            <div class=\"pull-left\" style=\"color: steelblue\">\n                                <!-- <a><font size=\"5\">Colours Personal</font></a> -->\n                                <h5>\n                                    <i class=\"ti-palette\"></i> Colours Personal</h5>\n                            </div>\n                        </div>\n                        <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\n                        <div class=\"pull-left\" style=\"margin-left:2em;padding-top: -1em; color: steelblue \">\n                            <font size=\"3\">My Diary Today</font>\n                        </div>\n                        <div class=\"spacer\" style=\"height: 2em;\"></div>\n                        <div class=\"row\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\" style=\"margin-left:3.0em; margin-right:-1.0em\">\n                                    <p style=\"color:lightgrey\">\n                                        <font size=3>Meeting</font>\n                                    </p>\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    <div class=\"pull-right\">\n                                        <span class=\"label label-warning\">\n                                            1000 Hrs\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\" style=\"margin-left:3.0em; margin-right:-1.0em\">\n                                    <p style=\"color:lightgrey\">\n                                        <font size=3>Email</font>\n                                    </p>\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    <div class=\"pull-right\">\n                                        <span class=\"label label-success\">\n                                            1230 Hrs\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\" style=\"margin-left:3.0em; margin-right:-1.0em\">\n                                    <p style=\"color:lightgrey\">\n                                        <font size=3>Skype</font>\n                                    </p>\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    <div class=\"pull-right\">\n                                        <span class=\"label label-success\">\n                                            1400 Hrs\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"pull-left\" style=\"margin-left:2.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\n                            <a>\n                                <i class=\"fa fa-pie-chart fa-fw\"></i>\n                                <font size=\"3\">Colours Metrics</font>\n                            </a>\n                        </div>\n                        <div class=\"spacer\" style=\"height:2.1em\"></div>\n                        <!-- chart1 -->\n                        <div class=\"row\">\n                            <div class=\"card-content\">\n                                <a class=\"pull-left\" style=\"color:lightgrey; margin-left:2em\">\n                                    <font size=3> Total Progress</font>\n                                </a>\n                                <div id=\"chartTotalEarnings\" style=\"margin-left:1em\"></div>\n                            </div>\n                            <div class=\"card-content\">\n                                <p style=\"color:lightgrey; margin-left:2em\">\n                                    <font size=3>Weekly progress</font>\n                                </p>\n                                <div id=\"chartTotalSubscriptions\" style=\"margin-left:1em\"></div>\n                            </div>\n                        </div>\n                        <!-- ****End of Charts**** -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6\" style=\"padding-right:20px; padding-left:20px\">\n                <div class=\"card\" style=\"height:480px\">\n                    <!--  style=\"height:410px\" data-background-color=\"green\" -->\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"row col-x-5\" style=\"margin-left:2em; padding-bottom: -1em \">\n                            <div class=\"pull-left\" style=\"color: steelblue\">\n                                <h5>\n                                    <i class=\"ti-layout-tab-v\"></i> Colours Projects</h5>\n                            </div>\n                        </div>\n                        <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\n                        <div class=\"pull-left\" style=\"margin-left:2em;padding-top: -1em; color: steelblue; \">\n                            <font size=\"3\">My Current Priority Projects</font>\n                        </div>\n                        <div class=\"spacer\" style=\"height:2.4em;\"></div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <font size=3>Joina City</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <font size=3>Aripo Offices</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <font size=3>Colours Software</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <font size=3>Beitbridge</font>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"pull-left\" style=\"margin-left:2.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\n                            <a>\n                                <font size=\"3\"><i class=\"fa fa-line-chart fa-fw\"></i> Project Metrics</font>\n                            </a>\n                        </div>\n                        <div class=\"spacer\" style=\"height:2.1em\"></div>\n                        <!-- chart1 -->\n                        <div class=\"row\">\n                            <div class=\"card-content\">\n                                <a class=\"pull-left\" style=\"color:lightgrey; margin-left:2em\">\n                                    <font size=3> Total Progress</font>\n                                </a>\n                                <div id=\"chartTotalDownloads\" style=\"margin-left:1.4em\"></div>\n                            </div>\n                            <div class=\"card-content\">\n                                <p style=\"color:lightgrey; margin-left:2em\">\n                                    <font size=3>Weekly progress</font>\n                                </p>\n                                <div id=\"chartActivity\" style=\"margin-left:1em\"></div>\n                            </div>\n                        </div>\n                        <!-- ****End of Charts**** -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6\" style=\"padding-right:20px; padding-left:20px\">\n                <div class=\"card\" style=\"height:480px\">\n                    <!--  style=\"height:410px\" -->\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"row col-x-5\" style=\"margin-left:2em; padding-bottom: -1em \">\n                            <div class=\"pull-left\" style=\"color:steelblue\">\n                                <h5>\n                                    <i class=\"ti-briefcase\"></i> Colours Enterprise</h5>\n                            </div>\n                        </div>\n                        <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\n                        <div class=\"pull-left\" style=\"margin-left:2em;padding-top: -1em; color: steelblue; \">\n                            <font size=\"3\">High Priority Enterprise Tasks</font>\n                        </div>\n                        <!-- <div class=\"numbers\" style=\"margin-left:1em; color:rgb(15, 4, 4)\">High Priority Enterprise Tasks</div> -->\n                        <div class=\"spacer\" style=\"height:2.4em;\"></div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <!-- style=\"color:darkgrey\" -->\n                                    <font size=3>Send Agenda</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10\" style=\"margin-left:2em\">\n                                <a href=\"#Respond_to_mail\" style=\"color:lightgrey\">\n                                    <font size=3>Respond to Mail</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10\" style=\"margin-left:2em\">\n                                <a href=\"#Contact_Supplier\" style=\"color:lightgrey\">\n                                    <font size=3>Contact Supplier</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10\" style=\"margin-left:2em\">\n                                <a href=\"#Aripo\" style=\"color:lightgrey\">\n                                    <font size=3>Aripo</font>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"pull-left\" style=\"margin-left:2.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\n                            <a>\n                                <font size=\"3\">\n                                    <i class=\"fa fa-area-chart fa-fw\"></i> Enterprise Metrics</font>\n                                <!-- color=\"steelblue\" -->\n                                <!-- <span class=\"text-muted\">Projects </span>Register -->\n                            </a>\n                        </div>\n                        <div class=\"spacer\" style=\"height:2.1em\"></div>\n                        <!-- chart1 -->\n                        <div class=\"row\">\n                            <div class=\"card-content\">\n                                <a style=\"color:lightgrey;margin-left:2em\">\n                                    <font size=3>Total progress</font>\n                                </a>\n                                <div id=\"chartEnt1\" class=\"ct-chart\" style=\"margin-left:1em\"></div>\n                            </div>\n                            <div class=\"card-content\">\n                                <p style=\"color:lightgrey;margin-left:2em\">\n                                    <font size=3>Weekly progress</font>\n                                </p>\n                                <div id=\"chartEnt2\" class=\"ct-chart\" style=\"margin-left:1em\"></div>\n                            </div>\n                        </div>\n                        <!-- ****End of Charts**** -->\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-10 col-md-offset-1\" style=\"padding-top: 0px;padding-bottom: 0px\" > <!-- col-lg-12 -->\n                <div class=\"card card-stats\" data-background-color=\"blue\">\n                    <div class=\"card-header\" >\n                        <a class=\"card-header btn-magnify\" style=\"color: #1e1f20\"><i class=\"ti-rss-alt\"></i><span></span> Colours Marketplace News Feeds</a>\n                        <!-- <h3 class=\"card-title hidden-tittle\">4</h3> -->\n                    </div>\n                    <span>\n                        <marquee>\n                            <p> <a  style=\"color: red\" href=\"#\">Listed company looking for business Development Manager</a><a> .... </a>\n                            <a style=\"color: orangered\" href=\"#\">Edigars Foundation Development</a><a> .... </a></p>\n                        </marquee>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/colprojects/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OverviewComponent = (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.initCirclePercentage = function () {
        $('#chartDashboard, #chartOrders, #chartNewVisitors, #chartSubscriptions, #chartDashboardDoc, #chartOrdersDoc').easyPieChart({
            lineWidth: 6,
            size: 160,
            scaleColor: false,
            trackColor: 'rgba(255,255,255,.25)',
            barColor: '#FFFFFF',
            animate: ({ duration: 5000, enabled: true })
        });
    };
    OverviewComponent.prototype.ngOnInit = function () {
        /*   ************************************** Colours Projects line Charts **************************************    */
        /*  **************** Chart Total Earnings - single line ******************** */
        var dataPrice = {
            labels: ['Jan', 'feb', 'March'],
            series: [
                [340, 300, 570]
            ]
        };
        var optionsPrice = {
            showPoint: false,
            lineSmooth: true,
            height: "90px",
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
        };
        var chartTotalEarnings = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalEarnings', dataPrice, optionsPrice);
        /*  **************** Chart Subscriptions - single line ******************** */
        var dataDays = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S'],
            series: [
                [60, 50, 30, 70, 60, 100]
            ]
        };
        var optionsDays = {
            showPoint: false,
            lineSmooth: true,
            height: "90px",
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
                line: 'ct-line ct-red'
            }
        };
        var chartTotalSubscriptions = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalSubscriptions', dataDays, optionsDays);
        /*   ************************************** Colours Projects line Charts **************************************    */
        /*  **************** Chart Total Downloads - single line ******************** */
        var dataDownloads = {
            labels: ['Y14', 'Y15', 'Y16', 'Y17', 'Y18'],
            series: [
                [1000, 3300, 3966, 5256, 8345]
            ]
        };
        var optionsDownloads = {
            showPoint: false,
            lineSmooth: true,
            height: "90px",
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
                line: 'ct-line ct-orange'
            }
        };
        var chartTotalDownloads = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalDownloads', dataDownloads, optionsDownloads);
        /*   **************** 2014 Sales - Bar Chart ********************    */
        var data = {
            labels: ['Jan', 'Feb', 'Mar'],
            series: [
                [542, 443, 320],
                [412, 243, 280]
            ]
        };
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "90px"
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartActivity = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#chartActivity', data, options, responsiveOptions);
        /*   ************************************** Enterprise line Charts **************************************    */
        /*   **************** Ent1line Chart ********************    */
        var data = {
            labels: ['Jan', 'Feb', 'Mar'],
            series: [
                [542, 434, 610,],
                [230, 503, 710]
            ]
        };
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "90px"
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartEnt1 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt1', data, options, responsiveOptions);
        /*   **************** Ent2line Chart ********************    */
        var dataSales = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S'],
            series: [
                [287, 385, 562, 698, 895, 952],
                [67, 152, 387, 435, 642, 744],
                [23, 113, 67, 307, 410, 410]
            ]
        };
        var optionsSales = {
            lineSmooth: false,
            low: 0,
            high: 1000,
            showArea: true,
            height: "90px",
            axisX: {
                showGrid: false,
            },
            showLine: true,
            showPoint: false,
        };
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[1];
                        }
                    }
                }]
        ];
        var chartEnt2 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt2', dataSales, optionsSales, responsiveSales);
        /* ********************************************************** End of Charts ********************************************************** */
    };
    OverviewComponent.prototype.ngAfterViewInit = function () {
        this.initCirclePercentage();
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'overview-cmp',
            template: __webpack_require__("../../../../../src/app/colprojects/overview/overview.component.html")
        })
    ], OverviewComponent);
    return OverviewComponent;
}());

//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/colprojects/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- colours projects add new project -->\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                    <div class=\"card\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-10 col-md-offset-1\">\n                                    <div class=\"content\">\n                                        <h4 class=\"title\">New Project</h4>\n                                        <div class=\"content table-responsive table-full-width\"></div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Project Name</label>\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"Project Name\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <div class=\"form-group\">\n                                            <label>Project Type: </label>\n                                            <select class=\"form-control\">\n                                                <option value=\"? undefined:undefined ?\" selected=\"selected\"></option>\n                                                <option value=\"Personal Work\">Personal Work</option>\n                                                <option value=\"Enterprise\">Enterprise</option>\n                                            </select>\n                                        </div>\n                                        <button type=\"button\" class=\"btn btn-primary\">Save Project</button>\n                                        <button type=\"button\" class=\"btn btn-primary btn-simple  pull-right\">\n                                            Connect to Existing Project\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-primary btn-simple pull-right\">\n                                            Invite to Enterprise\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/colprojects/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        /*   ************************************** Colours Projects line Charts **************************************    */
        /*  **************** Chart Total Earnings - single line ******************** */
        var dataPrice = {
            labels: ['Jan', 'feb', 'March'],
            series: [
                [340, 300, 570]
            ]
        };
        var optionsPrice = {
            showPoint: false,
            lineSmooth: true,
            height: "90px",
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
        };
        var chartTotalEarnings = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalEarnings', dataPrice, optionsPrice);
        /*  **************** Chart Subscriptions - single line ******************** */
        var dataDays = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [60, 50, 30, 50, 70, 60, 90, 100]
            ]
        };
        var optionsDays = {
            showPoint: false,
            lineSmooth: true,
            height: "90px",
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
                line: 'ct-line ct-red'
            }
        };
        var chartTotalSubscriptions = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalSubscriptions', dataDays, optionsDays);
        /*   ************************************** Colours Projects line Charts **************************************    */
        /*  **************** Chart Total Downloads - single line ******************** */
        var dataDownloads = {
            labels: ['Y14', 'Y15', 'Y16', 'Y17', 'Y18'],
            series: [
                [1000, 3300, 3966, 5256, 8345]
            ]
        };
        var optionsDownloads = {
            showPoint: false,
            lineSmooth: true,
            height: "90px",
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
                line: 'ct-line ct-orange'
            }
        };
        var chartTotalDownloads = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalDownloads', dataDownloads, optionsDownloads);
        /*   **************** 2014 Sales - Bar Chart ********************    */
        var data = {
            labels: ['Jan', 'Feb', 'Mar'],
            series: [
                [542, 443, 320],
                [412, 243, 280]
            ]
        };
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "90px"
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartActivity = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#chartActivity', data, options, responsiveOptions);
        /*   ************************************** Enterprise line Charts **************************************    */
        /*   **************** Ent1line Chart ********************    */
        var data = {
            labels: ['Jan', 'Feb', 'Mar'],
            series: [
                [542, 434, 610,],
                [230, 503, 710]
            ]
        };
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "90px"
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartEnt1 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt1', data, options, responsiveOptions);
        /*   **************** Ent2line Chart ********************    */
        var dataSales = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S'],
            series: [
                [287, 385, 562, 698, 895, 952],
                [67, 152, 387, 435, 642, 744],
                [23, 113, 67, 307, 410, 410]
            ]
        };
        var optionsSales = {
            lineSmooth: false,
            low: 0,
            high: 1000,
            showArea: true,
            height: "90px",
            axisX: {
                showGrid: false,
            },
            showLine: true,
            showPoint: false,
        };
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[1];
                        }
                    }
                }]
        ];
        var chartEnt2 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt2', dataSales, optionsSales, responsiveSales);
        /* ********************************************************** End of Charts ********************************************************** */
        var $calendar = $('#fullCalendar');
        var today = new Date();
        var y = today.getFullYear();
        var m = today.getMonth();
        var d = today.getDate();
        $calendar.fullCalendar({
            viewRender: function (view, element) {
                // We make sure that we activate the perfect scrollbar when the view isn't on Month
                if (view.name != 'month') {
                    var $fc_scroller = $('.fc-scroller');
                    $fc_scroller.perfectScrollbar();
                }
            },
            header: {
                left: 'title',
                center: 'month,agendaWeek,agendaDay',
                right: 'prev,next,today'
            },
            defaultDate: today,
            selectable: true,
            selectHelper: true,
            views: {
                month: {
                    titleFormat: 'MMMM YYYY'
                    // other view-specific options here
                },
                week: {
                    titleFormat: " MMMM D YYYY"
                },
                day: {
                    titleFormat: 'D MMM, YYYY'
                }
            },
            select: function (start, end) {
                // on select we show the Sweet Alert modal with an input
                swal({
                    title: 'Create an Event',
                    html: '<div class="form-group">' +
                        '<input class="form-control" placeholder="Event Title" id="input-field">' +
                        '</div>',
                    showCancelButton: true,
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false
                }).then(function (result) {
                    var eventData;
                    var event_title = $('#input-field').val();
                    if (event_title) {
                        eventData = {
                            title: event_title,
                            start: start,
                            end: end
                        };
                        $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
                    }
                    $calendar.fullCalendar('unselect');
                });
            },
            editable: true,
            eventLimit: true,
            // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
            events: [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    className: 'event-default'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d - 4, 6, 0),
                    allDay: false,
                    className: 'event-rose'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 3, 6, 0),
                    allDay: false,
                    className: 'event-rose'
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d - 1, 10, 30),
                    allDay: false,
                    className: 'event-green'
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d + 7, 12, 0),
                    end: new Date(y, m, d + 7, 14, 0),
                    allDay: false,
                    className: 'event-red'
                },
                {
                    title: 'Md-pro Launch',
                    start: new Date(y, m, d - 2, 12, 0),
                    allDay: true,
                    className: 'event-azure'
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false,
                    className: 'event-azure'
                },
                {
                    title: 'Click for Creative Tim',
                    start: new Date(y, m, 21),
                    end: new Date(y, m, 22),
                    url: 'https://www.creative-tim.com/',
                    className: 'event-orange'
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 21),
                    end: new Date(y, m, 22),
                    url: 'https://www.creative-tim.com/',
                    className: 'event-orange'
                }
            ]
        });
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'projects-cmp',
            template: __webpack_require__("../../../../../src/app/colprojects/projects/projects.component.html")
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/colprojects/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- colours projects add new project -->\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                    <div class=\"card\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-10 col-md-offset-1\">\n                                    <div class=\"content\">\n                                        <h4 class=\"title\">Create New Project</h4>\n                                        <div class=\"content table-responsive table-full-width\"></div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Project Name</label>\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"Project Name\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <div class=\"form-group\">\n                                            <label>Project Type: </label>\n                                            <select class=\"form-control\">\n                                                <option value=\"? undefined:undefined ?\" selected=\"selected\"></option>\n                                                <option value=\"Personal Work\">Personal Work</option>\n                                                <option value=\"Enterprise\">Enterprise</option>\n                                            </select>\n                                        </div>\n                                        <button type=\"button\" class=\"btn btn-primary\">Save Project</button>\n                                        <button type=\"button\" class=\"btn btn-primary btn-simple  pull-right\">\n                                            Connect to Existing Project\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-primary btn-simple pull-right\">\n                                            Invite to Enterprise\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/colprojects/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StatsComponent = (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
        /*   ************************************** Colours Projects line Charts **************************************    */
        /*  **************** Chart Total Earnings - single line ******************** */
        var dataPrice = {
            labels: ['Jan', 'feb', 'March'],
            series: [
                [340, 300, 570]
            ]
        };
        var optionsPrice = {
            showPoint: false,
            lineSmooth: true,
            height: "90px",
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
        };
        var chartTotalEarnings = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalEarnings', dataPrice, optionsPrice);
        /*  **************** Chart Subscriptions - single line ******************** */
        var dataDays = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [60, 50, 30, 50, 70, 60, 90, 100]
            ]
        };
        var optionsDays = {
            showPoint: false,
            lineSmooth: true,
            height: "90px",
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
                line: 'ct-line ct-red'
            }
        };
        var chartTotalSubscriptions = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalSubscriptions', dataDays, optionsDays);
        /*   ************************************** Colours Projects line Charts **************************************    */
        /*  **************** Chart Total Downloads - single line ******************** */
        var dataDownloads = {
            labels: ['Y14', 'Y15', 'Y16', 'Y17', 'Y18'],
            series: [
                [1000, 3300, 3966, 5256, 8345]
            ]
        };
        var optionsDownloads = {
            showPoint: false,
            lineSmooth: true,
            height: "90px",
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
                line: 'ct-line ct-orange'
            }
        };
        var chartTotalDownloads = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalDownloads', dataDownloads, optionsDownloads);
        /*   **************** 2014 Sales - Bar Chart ********************    */
        var data = {
            labels: ['Jan', 'Feb', 'Mar'],
            series: [
                [542, 443, 320],
                [412, 243, 280]
            ]
        };
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "90px"
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartActivity = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#chartActivity', data, options, responsiveOptions);
        /*   ************************************** Enterprise line Charts **************************************    */
        /*   **************** Ent1line Chart ********************    */
        var data = {
            labels: ['Jan', 'Feb', 'Mar'],
            series: [
                [542, 434, 610,],
                [230, 503, 710]
            ]
        };
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "90px"
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartEnt1 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt1', data, options, responsiveOptions);
        /*   **************** Ent2line Chart ********************    */
        var dataSales = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S'],
            series: [
                [287, 385, 562, 698, 895, 952],
                [67, 152, 387, 435, 642, 744],
                [23, 113, 67, 307, 410, 410]
            ]
        };
        var optionsSales = {
            lineSmooth: false,
            low: 0,
            high: 1000,
            showArea: true,
            height: "90px",
            axisX: {
                showGrid: false,
            },
            showLine: true,
            showPoint: false,
        };
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[1];
                        }
                    }
                }]
        ];
        var chartEnt2 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt2', dataSales, optionsSales, responsiveSales);
        /* ********************************************************** End of Charts ********************************************************** */
        var $calendar = $('#fullCalendar');
        var today = new Date();
        var y = today.getFullYear();
        var m = today.getMonth();
        var d = today.getDate();
        $calendar.fullCalendar({
            viewRender: function (view, element) {
                // We make sure that we activate the perfect scrollbar when the view isn't on Month
                if (view.name != 'month') {
                    var $fc_scroller = $('.fc-scroller');
                    $fc_scroller.perfectScrollbar();
                }
            },
            header: {
                left: 'title',
                center: 'month,agendaWeek,agendaDay',
                right: 'prev,next,today'
            },
            defaultDate: today,
            selectable: true,
            selectHelper: true,
            views: {
                month: {
                    titleFormat: 'MMMM YYYY'
                    // other view-specific options here
                },
                week: {
                    titleFormat: " MMMM D YYYY"
                },
                day: {
                    titleFormat: 'D MMM, YYYY'
                }
            },
            select: function (start, end) {
                // on select we show the Sweet Alert modal with an input
                swal({
                    title: 'Create an Event',
                    html: '<div class="form-group">' +
                        '<input class="form-control" placeholder="Event Title" id="input-field">' +
                        '</div>',
                    showCancelButton: true,
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false
                }).then(function (result) {
                    var eventData;
                    var event_title = $('#input-field').val();
                    if (event_title) {
                        eventData = {
                            title: event_title,
                            start: start,
                            end: end
                        };
                        $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
                    }
                    $calendar.fullCalendar('unselect');
                });
            },
            editable: true,
            eventLimit: true,
            // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
            events: [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    className: 'event-default'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d - 4, 6, 0),
                    allDay: false,
                    className: 'event-rose'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 3, 6, 0),
                    allDay: false,
                    className: 'event-rose'
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d - 1, 10, 30),
                    allDay: false,
                    className: 'event-green'
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d + 7, 12, 0),
                    end: new Date(y, m, d + 7, 14, 0),
                    allDay: false,
                    className: 'event-red'
                },
                {
                    title: 'Md-pro Launch',
                    start: new Date(y, m, d - 2, 12, 0),
                    allDay: true,
                    className: 'event-azure'
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false,
                    className: 'event-azure'
                },
                {
                    title: 'Click for Creative Tim',
                    start: new Date(y, m, 21),
                    end: new Date(y, m, 22),
                    url: 'https://www.creative-tim.com/',
                    className: 'event-orange'
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 21),
                    end: new Date(y, m, 22),
                    url: 'https://www.creative-tim.com/',
                    className: 'event-orange'
                }
            ]
        });
    };
    StatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'stats-cmp',
            template: __webpack_require__("../../../../../src/app/colprojects/stats/stats.component.html")
        })
    ], StatsComponent);
    return StatsComponent;
}());

//# sourceMappingURL=stats.component.js.map

/***/ })

});
//# sourceMappingURL=colprojects.module.chunk.js.map