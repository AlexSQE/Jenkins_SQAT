/// <reference types="cypress" />

import DashboardBreadcrumbs from "../../pageObjects/DashboardBreadcrumbs";
import dashboardBreadcrumbsData from "../../fixtures/pom_fixtures/dashboardBreadcrumbs.json";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";

describe('dashboardBreadcrumbs', () => {

   const dashboardBreadcrumbs = new DashboardBreadcrumbs();

   it('AT_04.04.12 Verify Dashboard Dropdown Menu Length', () => {
      dashboardBreadcrumbs
         .clickDashboardDropdownBtn()
         .getDashboardDropdownMenuItemsList()
         .should('be.visible')
         .and('have.length', dashboardBreadcrumbsData.dashboardDropdownMenu.length);
   });

   it('AT_04.04.03 | Verify Dashboard Dropdown menu has subfolders of the Dashboard page', () => {
      dashboardBreadcrumbs
         .clickDashboardDropdownBtn()
         .getDashboardDropdownMenuItemsList().each(($el, idx) => {
            expect($el.text()).contain(dashboardBreadcrumbsData.dashboardDropdownMenu[idx]);
         });
   });

   it('AT_04.04.18 | Verify URL when user clicks Reload Configuration from Disk from Manage Jenkins_user clicks Cancel on the alert window', () => {
      const PORT = Cypress.env("local.port")
      dashboardBreadcrumbs
         .clickDashboardDropdownBtn()
         .moveMouseOverManageJenkins()
         .clickReloadConfigurationFromDiskBtn()
         .clickAlertWindowCancel(dashboardBreadcrumbsData.alertWindowMessages[0])
      cy.url().should('eq', `http://localhost:${PORT}/`)
   });

   dashboardBreadcrumbsData.dashboardDropdownMenu.forEach((pageName, ind) => {
      it(`AT_04.02.014 | Breadcrumbs Verify The "Dashboard" link is first element in the ${pageName} trail`, () => {
         dashboardBreadcrumbs
            .clickDashboardDropdownBtn()
            .clickEachDashboardDropDownMenuList(ind)
            .getFirstDashboardDropdownBtn()
            .should('have.text', dashboardBreadcrumbsData.dashboardBtn);
      });
   });

   dashboardBreadcrumbsData.dashboardDropdownMenu.forEach((page, ind) => {
     it(`AT_04.04.11 |Breadcrumbs| Dropdown menu ${page} are clickable and redirect to the corresponding page`, () => {
       dashboardBreadcrumbs
         .clickDashboardDropdownBtn()
         .clickEachDashboardDropDownMenuList(ind);
       cy.url().should("include", dashboardBreadcrumbsData.endPointUrl[ind]);
     });
   });
})

