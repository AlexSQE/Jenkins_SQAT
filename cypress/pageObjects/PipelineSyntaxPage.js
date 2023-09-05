class PipelineSyntaxPage {
    getDeclarativeOnlineDocumentationOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(4)');
    getDeclarativeOnlineDocumentationPageUrl = () =>cy.url();

    clickDeclarativeOnlineDocumentationPageLink() {
        this.getDeclarativeOnlineDocumentationOptionLink().click();
        return this;
    }
};

export default PipelineSyntaxPage