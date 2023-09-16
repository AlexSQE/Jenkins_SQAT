import PipelineDeclarativeDirectiveGeneratorPage from "./PipelineDeclarativeDirectiveGeneratorPage"
import PipelineStepsReferenceOverviewPage from "./PipelineStepsReferenceOverviewPage"
import PipelineGlobalVariablesReferenceOverviewPage from "./PipelineGlobalVariablesReferenceOverviewPage"
import PipelineGlobalScriptScopePage from "./PipelineGlobalScriptScopePage"

class PipelineSyntaxPage {
    getDeclarativeOnlineDocumentationOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(4)');
    getDeclarativeOnlineDocumentationPageUrl = () =>cy.url();
    getDeclarativeDirectiveGeneratorOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(3)');
    getStepsReferenceOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(5)');
    getOnlineDocumentationOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(7)');
    getOnlineDocumentationPageUrl = () =>cy.url();
    getGlobalVariablesReferenceOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(6)');
    getExamplesReferenceOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(8)');
    getExamplesReferencePageUrl = () =>cy.url();
    getIntellijIdeaGdslOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(9)');

    clickDeclarativeOnlineDocumentationPageLink() {
        this.getDeclarativeOnlineDocumentationOptionLink().click();
        return this;
    }

    clickDeclarativeDirectiveGeneratorOptionLink() {
        this.getDeclarativeDirectiveGeneratorOptionLink().click();
        return new PipelineDeclarativeDirectiveGeneratorPage();
    }

    clickStepsReferenceOptionLink() {
        this.getStepsReferenceOptionLink().click();
        return new PipelineStepsReferenceOverviewPage();
    }

    clickOnlineDocumentationOptionLink() {
        this.getOnlineDocumentationOptionLink().click();
        return this;
    }

    clickGlobalVariablesReferenceOptionLink() {
        this.getGlobalVariablesReferenceOptionLink().click();
        return new PipelineGlobalVariablesReferenceOverviewPage();
    }

    clickExamplesReferenceOptionLink() {
        this.getExamplesReferenceOptionLink().click();
        return this;
    }

    clickIntellijIdeaGdslOptionLink() {
        this.getIntellijIdeaGdslOptionLink().click();
        return new PipelineGlobalScriptScopePage();
    }

};

export default PipelineSyntaxPage