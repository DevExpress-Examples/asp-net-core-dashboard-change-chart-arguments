function onItemCaptionToolbarUpdated(e) {
    if (e.itemName === 'chartDashboardItem1' || e.itemName === 'chartDashboardItem2') {
        e.options.stateItems.push({
            text: 'Switch Arguments',
            type: "menu",
            menu: {
                type: 'list',
                items: ['OrderDate - Year', 'OrderDate - Month-Year'],
                selectionMode: 'single',
                itemClick: function (item) {
                    var viewerAPI = dashboardControl.findExtension("viewer-api");
                    var tabContainerComponentName = "tabContainerDashboardItem1";
                    if (item === 'OrderDate - Year')
                        viewerAPI.setSelectedTabPageIndex(tabContainerComponentName, 0);
                    else
                        viewerAPI.setSelectedTabPageIndex(tabContainerComponentName, 1);
                }
            }
        })
    }
}