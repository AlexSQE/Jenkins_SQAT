import NodeConfigurePage from "./NodeConfigurePage";

class NodesPage {
    getBuiltInNodeGearBtn = () => cy.get('a[href*="(built-in)/configure"]');

    clickBuiltInNodeGearBtn() {
        this.getBuiltInNodeGearBtn().should('be.visible').click();
        return new NodeConfigurePage();
    }
}
export default NodesPage;
