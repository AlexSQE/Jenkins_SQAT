import NodeConfigurePage from "./NodeConfigurePage";
import BuildInNodePage from "./BuiltInNodePage";
import BuildHistoryOnBuildInNodePage from "./BuildHistoryOnBuildInNodePage";

class NodesPage {
    getBuiltInNodeGearBtn = () => cy.get('a[href*="(built-in)/configure"]');
    getNodeName = (nodeName) => cy.get(`a[href="/manage/computer/${nodeName}/"]`)
    getNodeDrpDwn = (nodeName) => cy.get(`a[href="/manage/computer/${nodeName}/"] > button`)
    getNodeDropdownConfigureLink = (nodeName) => cy.get(`a[href="/manage/computer/${nodeName}/configure"] > span`);
    getBuildHistoryDrpDwnLink = () => cy.get('a[href$="/builds"] > span');

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
    
}

export default NodesPage;
