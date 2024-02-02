<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/349487138/2023.1)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T983685)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->

# Dashboard for ASP.NET Core - How to change chart arguments at runtime

This example adds a popup menu to the dashboard item caption. This menu allows users to switch between Chart items with different settings.

The Dashboard control does not allow you to customize a Chart item and change its settings at runtime. As a possible solution, you can create a tab container, add different Chart items to tab pages, and configure the group interval for each Chart. To allow users to switch between Chart items at runtime, handle the [ViewerApiExtensionOptions.onItemCaptionToolbarUpdated ](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtensionOptions#js_devexpress_dashboard_viewerapiextensionoptions_onitemcaptiontoolbarupdated) event and add a button with the popup menu to the dashboard item caption. Call the [ViewerApiExtension.setSelectedTabPage](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtension#js_devexpress_dashboard_viewerapiextension_setselectedtabpage_tabpagename_) or [ViewerApiExtension.setSelectedTabPageIndex](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtension#js_devexpress_dashboard_viewerapiextension_setselectedtabpageindex_tabcontainername_index_) function to switch between the tab pages when a user clicks the menu elements.

You can also modify the dashboard XML definition to hide the tab container’s caption. Add the `ShowCaption` attribute to the `TabContainer` element and set its value to `false`:

```
<TabContainer ComponentName="tabContainerDashboardItem1" Name="Tab Container 1" ShowCaption="false">
<Pages>
```

## Files to Review

* [Index.cshtml](./CS/NetCoreDashboardApp/Pages/Index.cshtml)
* [changeArguments.js](./CS/NetCoreDashboardApp/wwwroot/js/changeArguments.js)

## Documentation

- [Dashboard Item Caption](https://docs.devexpress.com/Dashboard/117384/web-dashboard/ui-elements-and-customization/ui-elements/dashboard-item-caption)
- [Extensions Overview](https://docs.devexpress.com/Dashboard/117543/web-dashboard/ui-elements-and-customization/extensions-overview)
