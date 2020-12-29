# Dashboard for ASP.NET Core - How to change chart arguments at runtime

This example demonstrates how to change Chart items with different settings in a tab container using a custom menu in a List Box item.
Our Dashboard doesn't allow customizing a Chart item and changing its settings at runtime. A possible way is to create a tab container, add different chart items there, and manually set the group interval property of each chart. 

To add some automation, it is possible to add custom buttons to any dashboard item title and then use them to switch between tabs. I recommend using the [DashboardTitleToolbarUpdated](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtensionOptions#js_devexpress_dashboard_viewerapiextensionoptions_onitemcaptiontoolbarupdated) event to add the required buttons to the dashboard item title.
As for switching between the tabs, I suggest you use the [setSelectedTabPage](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtension#js_devexpress_dashboard_viewerapiextension_setselectedtabpage_tabpagename_) or [setSelectedTabPageIndex](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtension#js_devexpress_dashboard_viewerapiextension_setselectedtabpageindex_tabcontainername_index_) functions.

Also, you can modify the dashboard XML definition to hide the tab container’s caption:
....
<TabContainer ComponentName="tabContainerDashboardItem1" Name="Tab Container 1" ShowCaption="false">
<Pages>
....

<!-- default file list --> 
*Files to look at*:

* [Default.aspx](./CS/Default.aspx)
* [Default.aspx.cs](./CS/Default.aspx.cs)
* ...
<!-- default file list end -->
