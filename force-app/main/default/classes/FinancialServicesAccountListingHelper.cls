public with sharing class  FinancialServicesAccountListingHelper  {
    public class LineItem {
        @AuraEnabled
        public String id;       
        @AuraEnabled
        public string name; 
        @AuraEnabled
        public String ownername;
        @AuraEnabled
        public String phone;
        @AuraEnabled
        public string website;
        @AuraEnabled
        public decimal annualrev;
        
    }

	@AuraEnabled 
    public static List<LineItem> AccountsWithFinancialServices(){
  		List<LineItem> li = new list<LineItem>(); 
        
        for(account a: [select id, name, Owner.name, Phone, Website, AnnualRevenue from account where Industry = 'Financial Services']){
            LineItem l = new LineItem();
            l.id = a.id;
            l.name = a.name;
            l.ownername = a.owner.name;
            l.phone = a.phone;
            l.website = a.website;
            l.annualrev = a.AnnualRevenue;
            
            li.add(l);
        }
        return li; 
    }
    
    @AuraEnabled 
    public static void UpdateAccount(Account a){
  		
    }
    
    
}