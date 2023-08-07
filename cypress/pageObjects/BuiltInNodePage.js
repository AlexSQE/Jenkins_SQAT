import BuildHistoryOnBuildInNodePage from "./BuildHistoryOnBuildInNodePage";

class BuiltInNodePage {
    getBuiltInNodeHeader = () => cy.get('.jenkins-app-bar__content');
    getBuildHistoryLink = () => cy.get('#side-panel a[href$="/builds"]');
    getBreadcrumbsBuildInNodeDrpDwnBtn = () => cy.get('a[href$="/(built-in)/"] .jenkins-menu-dropdown-chevron');
    getBreadcrumbsBuildHistoryDrpDwnLink = () => cy.get('#breadcrumb-menu-target a[href$="/builds"] > span');

    clickBuildHistoryLink() {
        this.getBuildHistoryLink().click();
        return new BuildHistoryOnBuildInNodePage();
    };

    clickBreadcrumbsBuildInNodeDrpDwnBtn() {
        this.getBreadcrumbsBuildInNodeDrpDwnBtn().realHover().click('right');
        return this;
    };

    selectBreadcrumbsBuildHistoryDrpDwnLink() {
        this.getBreadcrumbsBuildHistoryDrpDwnLink().click();
        return new BuildHistoryOnBuildInNodePage();
    };

}
export default BuiltInNodePage;
