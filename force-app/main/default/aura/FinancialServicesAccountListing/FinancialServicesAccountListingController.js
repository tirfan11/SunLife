({
	doInit : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Account name', fieldName: 'name', type: 'text', editable: true, sortable : true},
            {label: 'Account owner', fieldName: 'ownername', type: 'text', sortable : true},
            {label: 'Phone', fieldName: 'phone', type: 'phone', editable: true, sortable : true},
            {label: 'Website', fieldName: 'website', type: 'URL', editable: true, sortable : true},
            {label: 'Annual Revenue', fieldName: 'annualrev', type: 'currency', typeAttributes: { currencyCode: 'CAD', maximumSignificantDigits: 5}, editable: true, sortable : true}
        ]);
        
        
		var getAccounts = component.get("c.AccountsWithFinancialServices");
        
        getAccounts.setCallback(this, function(response) {
                var state = response.getState();
                if (component.isValid() && state === "SUCCESS" && response.getReturnValue()!=null) {
                    var lines = response.getReturnValue();                        
                   	console.log(lines);
                    component.set('v.data', lines);
                } else {
                    console.log("Failed with state: " + state);
                }
            });
            $A.enqueueAction(getAccounts);
       
	}, 
    
    handleSaveEdition: function (component, event, helper) {
        var draftValues = event.getParam('draftValues');
        
    }, 
    
    handleSort : function(component,event,helper){
        
        var sortBy = event.getParam("name");
        
        var sortDirection = event.getParam("sortDirection");
        
        component.set("v.sortBy",sortBy);
        component.set("v.sortDirection",sortDirection);
    }
    
})