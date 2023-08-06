import BuildHistoryOnBuildInNodePage from "./BuildHistoryOnBuildInNodePage";

class BuiltInNodePage {
    getBuiltInNodeHeader = () => cy.get('.jenkins-app-bar__content');
    getBuildHistoryLink = () => cy.get('#side-panel a[href$="/builds"]');

    clickBuildHistoryLink() {
        this.getBuildHistoryLink().click();
        return new BuildHistoryOnBuildInNodePage();
    };
}
export default BuiltInNodePage;
