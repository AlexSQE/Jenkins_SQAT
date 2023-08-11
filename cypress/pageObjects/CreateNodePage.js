import NodesPage from "./NodesPage";

class CreateNodePage {
    getSaveBtn = () => cy.get('button[name="Submit"]')

    
    clickSaveBtn() {
        this.getSaveBtn().click();
        return new NodesPage()
    }
}
export default CreateNodePage;