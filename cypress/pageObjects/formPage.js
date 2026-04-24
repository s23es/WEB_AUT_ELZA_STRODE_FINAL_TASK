import { BasePage } from "./basePage";

export class FormPage extends BasePage{
    //---------------------------------------------------------
    static get url(){
        return '/automation-practice-form';
    }
    //---------------------------------------------------------
    static get nameField(){
        return cy.get('#firstName');
    }

    static get lastNameField(){
        return cy.get('#lastName');
    }

    static get emailField(){
        return cy.get('#userEmail');
    }

    static get maleButton(){
        return cy.get('#gender-radio-1');
    }

    static get mobileField(){
        return cy.get('#userNumber');
    }
    //---------------------------------------------------------
}