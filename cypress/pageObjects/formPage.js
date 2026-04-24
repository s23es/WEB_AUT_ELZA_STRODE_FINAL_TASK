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
    static get dateField(){
        return cy.get('#dateOfBirthInput');
    }

    static checkMonth(month){
        return cy.get('.react-datepicker__month-select').select(month);
    }

    static checkYear(year){
        return cy.get('.react-datepicker__year-select').select(year);
    }

    static dateDay(day){
        //not(.react-datepicker__day--outside-month) avoids other month dates -> similar situation as MD2
        return cy.get('.react-datepicker__day:not(.react-datepicker__day--outside-month)').contains(String(day));
    }
    //---------------------------------------------------------
}