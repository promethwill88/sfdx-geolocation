public with sharing class AccountSearchController {
    @AuraEnabled
    public static List<Account> searchAccounts(String searchTerm) {

        System.debug('searchAccounts HIT');

        List<Account> accList = new List<Account>();
        // If Search Term from client-side component is NOT Blank, perform SOSL query with search term, and add result to accList
        if(String.isNotBlank(searchTerm)) {
            List<List<SObject>> searchResults = [FIND :searchTerm RETURNING Account(Id, Name, Phone, Website, BillingStreet, BillingCity, BillingState, BillingPostalCode ORDER BY Name LIMIT 10)];
            accList = searchResults[0];
        }
        System.debug('accList = ' + accList);
        return accList;
    }
}