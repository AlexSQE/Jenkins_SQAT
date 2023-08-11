import NodeConfigurePage from "./NodeConfigurePage";
import BuildInNodePage from "./BuiltInNodePage";
import BuildHistoryOnBuildInNodePage from "./BuildHistoryOnBuildInNodePage";
import NewNodePage from "./NewNodePage";
import NodeDeletePage from "./NodeDeletePage";

class NodesPage {
    getBuiltInNodeGearBtn = () => cy.get('a[href*="(built-in)/configure"]');
    getNodeName = (nodeName) => cy.get(`#computers a[href="/manage/computer/${nodeName}/"]`)
    getNodeDrpDwn = (nodeName) => cy.get(`#computers a[href="/manage/computer/${nodeName}/"] > button`)
    getNodeDropdownConfigureLink = (nodeName) => cy.get(`a[href="/manage/computer/${nodeName}/configure"] > span`);
    getBuildHistoryDrpDwnLink = () => cy.get('a[href$="/builds"] > span');
    getNewNodeBtn = () => cy.get('div a[href="new"]');
    getDeleteDrpDwnLink = () => cy.get('a[href$="/delete"] > span');

    clickBuiltInNodeGearBtn() {
        this.getBuiltInNodeGearBtn().should('be.visible').click();
        return new NodeConfigurePage();
    }

    hoverAndClickNodeDrpDwn(nodeName) {
        this.getNodeName(nodeName).realHover();
        this.getNodeDrpDwn(nodeName).click();
        return this;
    }

    selectConfigNodeDrpDwnMenuBtn(nodeName){
        this.getNodeDropdownConfigureLink(nodeName).click();
        return new NodeConfigurePage();
    }

    clickBuildInNodeName(buildInNode) {
        this.getNodeName(buildInNode).click();
        return new BuildInNodePage();
    };

    selectBuildHistoryDrpDwnLink(buildInNode) {
        this.getBuildHistoryDrpDwnLink(buildInNode).click();
        return new BuildHistoryOnBuildInNodePage();
    };

    clickNewNodeBtn() {
        this.getNewNodeBtn().click();
        return new NewNodePage();
    }
    
    verifyNewNodeExistsAndVisible(nodeName) {
        this.getNodeName(nodeName).should('exist').and('be.visible')
    }

    selectDeleteDrpDwnLink() {
        this.getDeleteDrpDwnLink().click();
        return new NodeDeletePage();
    };
}

export default NodesPage;
