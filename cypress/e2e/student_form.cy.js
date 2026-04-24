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
      FormPage.nameField.type('John');                  //Set first name
      FormPage.lastNameField.type('Doe');               //Set last name
      FormPage.emailField.type('JoDo@email.com');       //Set email
      FormPage.maleButton.click();                      //Select male radio button
      FormPage.mobileField.type('00000000');            //Set mobile nr.

      FormPage.dateField.click();                       //Select date field
      FormPage.checkYear('1930');                       //Select year  - 1930
      FormPage.checkMonth('February');                  //Select month - February
      FormPage.dateDay('28').click();                   //Select date  - 28
      //FormPage.dateField.should('have.value','28 Feb 1930');

      FormPage.selectSubject('Economics');              //Input & select autocomplete subject - Economics
      FormPage.musicCheck.click();                      //Set hobbies - Music

      FormPage.uploadField.click();                     //Select file upload
      FormPage.selectFile('cypress/files/image.png');   //Upload image

      FormPage.addressField.type('Fakertonville 33rd'); //Set address
      FormPage.selectState('NCR');                      //Select state - NCR
      FormPage.selectCity('Delhi');                     //Select city  - Delhi

      FormPage.submitButton.click();                    //Submit
    });
    //--------------------------------------------------------------------------------------------------------------------------------------
  });
  //===========================================================================
});