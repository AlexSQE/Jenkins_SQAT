import userCredentialsPageData  from '../fixtures/pom_fixtures/userCredentialsPage.json';

class UserCredentialsPage {
    getCredentialsPageUrl = () =>cy.url();
    getCredentialsHeader = () => cy.get('#main-panel h1');
    getUserCredPageIconBtns = () => cy.get("div[class='jenkins-icon-size__items jenkins-buttons-row'] ol")
    getUserCredPageTables = () => cy.get('.jenkins-table__cell--tight.jenkins-table__icon')
    getCredentialTableColumnNames = () => cy.get('#main-panel table:nth-of-type(1) th')


    checkUrlCredentialsPage() {
        this.getCredentialsPageUrl()
            .should('include', userCredentialsPageData.credentialsPageUrl);
        return this;
    }
    
    clickUserCredIconBtns(size) {
        this.getUserCredPageIconBtns().contains(size).click();
        return this;
    };

    verifyCredentialTableColumnNamesText() {
        let arr = [];
        this.getCredentialTableColumnNames().each($columnName => 
                arr.push($columnName.text().replace(/&nbsp;/g, " ").replace(/\u00A0/g, " "))
            )     
        return cy.wrap(arr)
    }

}
export default UserCredentialsPage;


