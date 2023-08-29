import UserProfilePage from "./UserProfilePage";
import NewItemPage from "./NewItemPage";

class PeoplePage {
    getUserNameLink = () => cy.get('#people a[href*="/user/"]');
    getPeoplePageHeader = () => cy.get('.jenkins-app-bar__content h1')
    getNewItemSideMenuLink = () => cy.get('a[href="/view/all/newJob"]');
    getPeoplePageUrl = () => cy.url();
    getSortHeaderMenu = () => cy.get('.sortheader');
    getSortArrow = () => cy.get('.sortarrow');
    getPeopleTab = () => cy.get('a[href="/asynchPeople/"]');
    getPeopleTableBody = () => cy.get('#people tbody');

    clickUserNameLink(name = Cypress.env('local.admin.username')) {
        this.getUserNameLink().contains(name).click();
        return new UserProfilePage();
    };

    trimPeoplePageHeader() {
        return this.getPeoplePageHeader().then(($el) => {
            return $el.text().trim();
        });
    };

    clickNewItemSideMenuLink() {
        this.getNewItemSideMenuLink().click();
        return new NewItemPage();
    };
    
    clickSortHeaderMenu() {
        this.getSortHeaderMenu().each(($el) => {
            cy.wrap($el).click()
            this.getSortArrow().should('be.visible')
        })
    }

    verifyPeopleTabIsHighlighted(highlitedClassName, highlitedTabClassBackGroundColor ) {
        return this.getPeopleTab()
            .should("have.class", highlitedClassName)
            .within(($el) => {
                cy.window().then((win) => {
                    const beforeElement = win.getComputedStyle($el[0], "::before");
                    const bg = beforeElement.getPropertyValue("background-color"); 
                expect(bg).to.equal(highlitedTabClassBackGroundColor);
                })
            })
    };

}
export default PeoplePage;
