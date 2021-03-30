# Dashboard for ASP.NET Core - How to change chart arguments at runtime
<!-- run online -->
**[[Run Online]](https://codecentral.devexpress.com/349487138/)**
<!-- run online end -->

<!-- default file list --> 
*Files to look at*:
* [Index](./CS/NetCoreDashboardApp/Pages/Index.cshtml)
<!-- default file list end -->

This example uses a custom menu in a List Box item to change Chart items with different settings in a tab container.
Our Dashboard doesn't support the ability to customize a Chart item and change its settings at runtime. A possible way is to create a tab container, add different chart items to it, and manually set the group interval property of each chart.

To implement automation, add custom buttons to any dashboard item title and then use them to switch between tabs. For this, use the [DashboardTitleToolbarUpdated](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtensionOptions#js_devexpress_dashboard_viewerapiextensionoptions_onitemcaptiontoolbarupdated) event to add the required buttons to the dashboard item title.
As for switching between the tabs, you can use the [setSelectedTabPage](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtension#js_devexpress_dashboard_viewerapiextension_setselectedtabpage_tabpagename_) or [setSelectedTabPageIndex](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtension#js_devexpress_dashboard_viewerapiextension_setselectedtabpageindex_tabcontainername_index_) function.

Also, you can modify the dashboard XML definition to hide the tab container’s caption, add the ShowCaption property and set it to false:
```
<TabContainer ComponentName="tabContainerDashboardItem1" Name="Tab Container 1" ShowCaption="false">
<Pages>
```
