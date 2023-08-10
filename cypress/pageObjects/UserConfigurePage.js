import UserProfilePage from "../pageObjects/UserProfilePage"
import HomePage from "../pageObjects/HomePage";

class UserConfigurePage {
    getFullNameInputField = () => cy.get('input[name="_.fullName"]');
    getUserConfigSaveBtn = () => cy.get('button[name="Submit"]');
    getUserConfigDescription = () => cy.get('textarea[name="_.description"]');
    getUserBuildsSidePanelConfigureLink = () => cy.get('a[href$="/configure"]');
    getSensitiveSearchCheckbox = () => cy.get('div.setting-main label');
    getBreadcrumbsConfigure = () => cy.get("li[aria-current='page']");

    typeFullNameInputField(name) {
        this.getFullNameInputField().clear().type(name);
        return this;
    }

    clickUserConfigSaveBtn() {
        this.getUserConfigSaveBtn().click();
        
        return new UserProfilePage();
    }

    typeUserConfigDescription(description) {
        this.getUserConfigDescription().clear().type(description);
        return this;
    };

    clickSensitiveSearchCheckbox() {
        this.getSensitiveSearchCheckbox().click();
        return this;
    }
}
export default UserConfigurePage;