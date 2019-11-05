({
    handleSearch : function(component, searchTerm) {
        console.log("handleSearch HIT");
        var action = component.get("c.searchAccounts");
        action.setParams({
            searchTerm: searchTerm
        });

        action.setCallback(this, function(res) {
            // Get aura event AccountsLoaded.evt
            // Set Parameters accList to server-side
            var event = $A.get("e.c:AccountsLoaded");
            event.setParams({
                "accList": res.getReturnValue()
            });
            event.fire();
        });
        $A.enqueueAction(action);
    }
})
