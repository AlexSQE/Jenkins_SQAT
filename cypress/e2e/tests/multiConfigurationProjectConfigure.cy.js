/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import projectData from "../../fixtures/pom_fixtures/multiConfigurationProjectConfigurePage.json";

describe('multiConfigurationProjectConfigure', () => {
  const homePage = new HomePage();

  it('AT_14.05.10 | Multi-configuration project. Advanced project options default values', () => {
    cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
    homePage
      .hoverAndClickProjectDrpDwnBtn(newItemPageData.multiConfigurationProjectName)
      .clickMultiConfProjectDrpDwnConfigureLink()
      .clickAdvancedBtn()
      .clickAdvancedOptionsLabels()
      .createAdvancedOptionsValuesList()
      .should('deep.equal', projectData.defaultOptionsValues)
  });

  it('AT_14.05.09 | Verify MultiConfig Project Advanced options are set and saved', () => {
    cy.createMultiConfigProject(newItemPageData.multiConfigurationProjectName);
    homePage
      .clickProjectDropdownMenuBtn()
      .clickMultiConfProjectDrpDwnConfigureLink()
      .clickAdvancedBtn()
      .clickAdvancedOptionsLabels()
      .fillAdvancedOptionsForms()
      .clickSaveButton()
      .clickConfigureSideMenuLink()
      .clickAdvancedBtn()
      .createAdvancedOptionsCheckboxesList()
      .createAdvancedOptionsValuesList()
      .should('deep.equal', projectData.advancedOptionsValues);
  });

  it('AT_14.05_004c | Multi-configuration project. Advance project options are checked', () => {
    cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
    homePage
      .hoverAndClickProjectDrpDwnBtn(newItemPageData.multiConfigurationProjectName)
      .clickMultiConfProjectDrpDwnConfigureLink()
      .clickAdvancedBtn()
      .clickAdvancedOptionsLabels()
      .clickSaveButton()
      .clickConfigureSideMenuLink()
      .clickAdvancedBtn()
      .assertAdvancedOptionsCheckboxesChecked()    
  });

  it('AT_14.05_004u | Multi-configuration project. Advance project options are unchecked', () => {
    cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
    homePage
      .hoverAndClickProjectDrpDwnBtn(newItemPageData.multiConfigurationProjectName)
      .clickMultiConfProjectDrpDwnConfigureLink()
      .clickAdvancedBtn()
      .clickAdvancedOptionsLabels()
      .clickSaveButton()
      .clickConfigureSideMenuLink()
      .clickAdvancedBtn()
      .clickAdvancedOptionsLabels()
      .clickSaveButton()
      .clickConfigureSideMenuLink()
      .clickAdvancedBtn()
      .assertAdvancedOptionsCheckboxesUnChecked()    
  });

  it('AT_14.05.03 | Multi-configuration project. Advanced options are enabled to select it', () => {
    cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
    homePage
      .hoverAndClickProjectDrpDwnBtn(newItemPageData.multiConfigurationProjectName)
      .clickMultiConfProjectDrpDwnConfigureLink()
      .clickAdvancedBtn()
      .getAdvancedOptionsBlock()
      .should('be.visible')
      .and('be.enabled')      
    });

    it('AT_14.04.06 | <Multi-configuration project> Configure | Verify possibility to disable MCPr through left side panel', () => {
      cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
      homePage
        .clickMultiConfigProjectNameLink(newItemPageData.multiConfigurationProjectName)
        .clickConfigureSideMenuLink()
        .clickEnableDisableSwitch()
        .clickSaveButton()
        .getWarningText()
        .should('be.visible')
        .and('contain', projectData.warningMessage)
        .and('have.css', 'color', projectData.colorWarningMessage)
    })
});
