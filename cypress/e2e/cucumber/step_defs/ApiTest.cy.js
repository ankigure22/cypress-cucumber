
/// <reference types="cypress" />
import {Given, When} from "cypress-cucumber-preprocessor/steps"
import login from "../pages/loginPage.cy";

Given("I navigate to the Website", () => {
login.enterURL();
});

When("Test {string} method", (request) => {
    if (request=="GET") {
      debugger
        cy.request("GET", "https://reqres.in/api/users?page=2").should((response) => {
            expect(response.status).to.eq(200);
            debugger
           });
    }
    if (request=="PUT") {
        cy.request("PUT", "https://reqres.in/api/users/2", {
            name: "QAAutomationLabs",
            job: "QA Automation Engg",
          }).should((response) => {
            expect(response.status).to.eq(200);
          });
    }
    if (request=="POST") {
      cy.request("POST", "https://reqres.in/api/users", {
      name: "morpheus",
      job: "leader",
    }).should((response) => {
      expect(response.status).to.eq(201);
    });
    
    if (request="DELETE") {
        cy.request("DELETE", "https://reqres.in/api/users/2").should((response)=> {
        console.log(response);
        expect(response.status).to.eq(204);
      });
    }
    else {
       cy.log("Invalid Request");
    }
  }
});
