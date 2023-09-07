import PipelineDeclarativeDirectiveGeneratorPage from "./PipelineDeclarativeDirectiveGeneratorPage"

class PipelineSyntaxPage {
    getDeclarativeOnlineDocumentationOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(4)');
    getDeclarativeOnlineDocumentationPageUrl = () =>cy.url();
    getDeclarativeDirectiveGeneratorOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(3)');

    clickDeclarativeOnlineDocumentationPageLink() {
        this.getDeclarativeOnlineDocumentationOptionLink().click();
        return this;
    }

    clickDeclarativeDirectiveGeneratorOptionLink() {
        this.getDeclarativeDirectiveGeneratorOptionLink().click();
        return new PipelineDeclarativeDirectiveGeneratorPage();
    }
};

export default PipelineSyntaxPage