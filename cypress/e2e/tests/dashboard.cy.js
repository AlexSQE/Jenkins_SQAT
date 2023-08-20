/// <reference types="cypress" />

import pipelinePageData from "../../fixtures/pom_fixtures/pipelinePage.json";
import HomePage from "../../pageObjects/HomePage";
import freestyleProjectPageData from "../../fixtures/pom_fixtures/freestyleProjectPage.json";
import homePageData from "../../fixtures/pom_fixtures/homePage.json";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import folderPageData from "../../fixtures/pom_fixtures/folderPage.json";
import dashboardData from "../../fixtures/pom_fixtures/dashboard.json"

describe('dashboard', () => {

    const homePage = new HomePage()

    it("AT_20.04.01 | <Dashboard> Jenkins Table: Pipeline's dropdown menu", () => {
        cy.createPipeline(pipelinePageData.pipelineName);
        homePage
            .hoverAndClickProjectDrpDwn(pipelinePageData.pipelineName)
            .verifyPipeLineDrpDwnMenu()
            .should('deep.equal', pipelinePageData.pipelineDropdownItems)
            .and('have.length', pipelinePageData.pipelineDropdownItems.length)
    });

    it('AT20.01.007.1|DashbordVerify size of project table S', () => {
        cy.createFreestyleProject(freestyleProjectPageData.freestyleProjectNewName)
        homePage
        .clickTableSizeBtnS()
        .verifyTableSize(homePageData.sRem)
    });

    it('AT20.01.007.2|DashbordVerify size of project table M',() => {
        cy.createFreestyleProject(freestyleProjectPageData.freestyleProjectNewName)
        homePage
        .clickTableSizeBtnM()
        .verifyTableSize(homePageData.mRem)
    });

    it('AT20.01.007.3|DashbordVerify size of project table L',() => {
        cy.createFreestyleProject(freestyleProjectPageData.freestyleProjectNewName)
        homePage
        .clickTableSizeBtnL()
        .verifyTableSize(homePageData.lRem)
    });

     it('AT 20.07.01 Dashboard|Icon S be visible in the first column of the title',()=>{
        cy.createFreestyleProject(freestyleProjectPageData.freestyleProjectNewName);
        cy.createPipeline(pipelinePageData.pipelineName);
        cy.createMultBranchPipeline(newItemPageData.multibranchPipelineName);
        homePage
       .getHeadersTableJobs().eq(0)
       .should('contain',homePageData.HeadersTableJobs[0]);           
     });

     it('AT 20.07.02 Dashboard| hover over the icon S , should be visible tooltip',()=>{
        cy.createFreestyleProject(freestyleProjectPageData.freestyleProjectNewName);
        cy.createPipeline(pipelinePageData.pipelineName);
        cy.createMultBranchPipeline(newItemPageData.multibranchPipelineName);
        homePage
        .hoverHeadersTableJobsIconS()
        .getToolTipsIconS()
        .should('have.text', 'Status of the last build')          
     });

     it('AT_20.07.03|Dashboard Verify that table head Name should be visible', () => {
        cy.createFolderProject(folderPageData.folderName);
        homePage
        .getHeadersTableJobName()
        .should('contain', homePageData.HeadersTableJobs[2])
     })

    it('AT_20.07.05 | Verify the table head W is visible', () => {
        cy.createFreestyleProject(freestyleProjectPageData.freestyleProjectNewName);
        homePage
            .getHeadersTableJobs().eq(1)
            .should('be.visible');
    });

    it("AT_20.10.01 | <Dashboard> Jenkins Table: Multibranch pipeline project's name is visible", () => {
        cy.createMultBranchPipeline(newItemPageData.multibranchPipelineName);
        homePage
            .getMulBranPipelineName()
            .should('be.visible')
            .and('contain',
            newItemPageData.multibranchPipelineName)
    });

    it('AT_20.07.06 | Verify table head W should be hoverable: the background color should change and tooltip should appear', () => {
        cy.createFreestyleProject(freestyleProjectPageData.freestyleProjectNewName);
        homePage
            .hoverHeaderTableJobW()
            .getHeaderTableJobWTooltip()
            .should('have.text', homePageData.tooltipWtext);
    });

    it('AT_20.10.03 | <Dashboard> Jenkins Table: Multibranch pipeline project names dropdown menu has list of items', () => {
        cy.createMultBranchPipeline(newItemPageData.multibranchPipelineName);
        homePage
        .hoverAndClickProjectDrpDwnBtn(newItemPageData.multibranchPipelineName)
        .getMultibranchPipelineDrDwnMenuListItems()
        .each((el, index) => {
            expect(el.text()).contain(dashboardData.dashboardMBPipelinaDropdownMenu[index])
        })
    });
    
    it("AT_20.03.07 | <Dashboard> Jenkins Table: Verify Freestyle Project's name down chevron button and background color change", () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName);
        homePage
            .hoverProjectNameLink()
            .getProjectDrpDwnBtn()
            .should('be.visible')
            .and('not.have.css', 'background-color', '#FFFFFF')
        });

    it('AT_20.11.01 | <Dashboard> Jenkins Table: Verify Dropdown menu of Folder Project name', () => {
        cy.createFolderProject(newItemPageData.folderName)
        homePage
            .hoverAndClickProjectDrpDwn(newItemPageData.folderName)
            .verifyFolderDrpDwnMenu()
            .should('deep.equal', folderPageData.folderDropdownItems)
       });

    it('AT_20.04.02 | <Dashboard> Jenkins Table: Pipeline project name is visible', () => {
        cy.createPipeline(pipelinePageData.pipelineName);
        homePage
            .getProjectName(pipelinePageData.pipelineName)
            .should('be.visible')
            .and('have.text', pipelinePageData.pipelineName)
    })

    it("AT_20.08.01 | <Dashboard> Jenkins Table: icons in the Status of the last build column match project type", () => {
        cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
        cy.createMultBranchPipeline(newItemPageData.multibranchPipelineName);
        cy.createFolderProject(newItemPageData.folderName);
        cy.createOrgFolderProject(newItemPageData.orgFolderName);
        cy.createFreestyleProject(newItemPageData.freestyleProjectName);
        cy.createPipeline(newItemPageData.pipelineName);
        homePage
        .verifyStatusMultibranchPipelineIcon()
        .verifyStatusPipelineIcon(newItemPageData.pipelineName)
        .verifyStatusFreestyleProjectIcon(newItemPageData.freestyleProjectName)
        .verifyStatusFolderIcon()
        .verifyStatusOrgFolderIcon()
        .verifyStatusMulticonfigurationProjecIcon(newItemPageData.multiConfigurationProjectName)
        })        

    })

