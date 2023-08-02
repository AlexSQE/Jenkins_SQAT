import BuildDeletionPage from "./BuildDeletionPage";
import EditBuildInformationPage from "./EditBuildInformationPage";

class BuildPage {
    getDeleteBuildBtn = () => cy.get('.task:last-child');
    getBuildDescriptionLink = () => cy.get('#description-link');
    getBuildDescriptionInput = () => cy.get('textarea[name="description"]');
    getShowPreviewLink = () => cy.get('a.textarea-show-preview');
    getPreviewTextarea = () => cy.get('div.textarea-preview');
    getSaveDescriptionBtn = () => cy.get("#description button");
    getDescriptionText = () => cy.get("#description div:first-child");
    getEditBuildInfoSideMenuLink = () => cy.get('a[href$="/configure"]');

    clickDeleteBuildBtn() {
        this.getDeleteBuildBtn().click();
        return new BuildDeletionPage;
    }

    clickBuildDescriptionLink() {
        this.getBuildDescriptionLink().click();
        return this;
    }

    typeBuildDescriptionInput(description) {
        this.getBuildDescriptionInput().type(description);
        return this;
    }

    clickShowPreviewLink() {
        this.getShowPreviewLink().click();
        return this;
    }

    verifyPreviewTextareaNotVisible() {
        this.getPreviewTextarea().should('not.be.visible');
        return this;
    }

    clickSaveDescriptionBtn() {
    this.getSaveDescriptionBtn().click();
    return this;
  }

    typeBuildNewDescriptionInput(newDescription) {
        this.getBuildDescriptionInput().clear().type(newDescription);
        return this;
    };

    clickEditBuildInfoSideMenuLink() {
        this.getEditBuildInfoSideMenuLink().click();
        return new EditBuildInformationPage();
    };
}

export default BuildPage;
