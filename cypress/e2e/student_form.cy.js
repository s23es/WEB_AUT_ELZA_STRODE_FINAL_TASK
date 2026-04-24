import { BasePage } from '../pageObjects/basePage.js';
import { FormPage } from '../pageObjects/formPage.js';

describe('Student Practise Form - Final Task', () => {
  //===========================================================================
  context('Student form input tests', () => {
    beforeEach(() => {
      FormPage.visit();
    });
    //--------------------------------------------------------------------------------------------------------------------------------------
    it.only('Input information and validate', () => {
      FormPage.nameField.type('John');            //Set first name
      FormPage.lastNameField.type('Doe');         //Set last name
      FormPage.emailField.type('JoDo@email.com'); //Set email
      FormPage.maleButton.click();                //Select male radio button
      FormPage.mobileField.type('00000000');      //Set mobile nr.
    });
    //--------------------------------------------------------------------------------------------------------------------------------------
  });
  //===========================================================================
});