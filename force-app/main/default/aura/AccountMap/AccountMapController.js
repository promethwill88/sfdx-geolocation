({
    onAccountsLoaded : function(component, event, helper) {

        console.log('onAccountsLoaded HIT');

        var mapMarkers = [];
        // Retrieves list of accounts from server-side
        // Loops through list, assigns the marker location, title, description, and icon
        // Push to mapMarkers collection
        // Set component with mapMarkers collection
        console.log('HAHAHA');

        var accounts = event.getParam('accList');
        console.log('accounts ' + accounts);

        for(var i = 0; i < accounts.length; i++) {
            var account = accounts[i];
            var marker = {
                'location': {
                    'Street': account.BillingStreet,
                    'City': account.BillingCity,
                    'PostalCode': account.BillingPostalCode
                },
                'title': account.Name,
                'description': ('Phone: ' + account.Phone + '<br/>' + 'Website: ' + account.Website),
                'icon': 'standard:location'
            };
            mapMarkers.push(marker);
        }
        component.set('v.mapMarkers', mapMarkers);
    }
});
