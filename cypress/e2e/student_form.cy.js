import { BasePage } from '../pageObjects/basePage.js';
import { FormPage } from '../pageObjects/formPage.js';
import { SubmitTablePage } from '../pageObjects/submitTablePage.js';

describe('Student Practise Form - Final Task', () => {
  //===========================================================================
  context('Student form input tests', () => {
    beforeEach(() => {
      FormPage.visit();
    });
    //--------------------------------------------------------------------------------------------------------------------------------------
    it.only('Input information and validate', () => {
      const formData = {
        name:    'John',
        last:    'Doe',
        email:   'JoDo@email.com',
        mobile:  '00000000',
        year:    '1930',
        month:   'February',
        date:    '28',
        subject: 'Economics',
        image:   'image.png',
        address: 'Fakertonville 33rd',
        state:   'NCR',
        city:    'Delhi',
      }
      //------------------------------------------------------------------------------
      FormPage.nameField.type(formData.name);         //Set first name
      FormPage.lastNameField.type(formData.last);     //Set last name
      FormPage.emailField.type(formData.email);       //Set email
      FormPage.maleButton.click();                    //Select male radio button
      FormPage.mobileField.type(formData.mobile);     //Set mobile nr.

      FormPage.dateField.click();                     //Select date field
      FormPage.checkYear(formData.year);              //Select year  - 1930
      FormPage.checkMonth(formData.month);            //Select month - February
      FormPage.dateDay(formData.date).click();        //Select date  - 28
      //FormPage.dateField.should('have.value','28 Feb 1930');

      FormPage.selectSubject(formData.subject);       //Input & select autocomplete subject - Economics
      FormPage.musicCheck.click();                    //Set hobbies - Music

      FormPage.uploadField.click();                   //Select file upload
      FormPage.selectFile('cypress/files/image.png'); //Upload image

      FormPage.addressField.type(formData.address);   //Set address
      FormPage.selectState(formData.state);           //Select state - NCR
      FormPage.selectCity(formData.city);             //Select city  - Delhi
      //------------------------------------------------------------------------------
      //Submit & validate
      FormPage.submitButton.click();
      SubmitTablePage.rowCellBasedOnIndex(0).should('contain.text', formData.name);
      SubmitTablePage.rowCellBasedOnIndex(1).should('contain.text', formData.email);
      SubmitTablePage.rowCellBasedOnIndex(2).should('contain.text', 'Male');
      SubmitTablePage.rowCellBasedOnIndex(3).should('contain.text', formData.mobile);
      SubmitTablePage.rowCellBasedOnIndex(4).should('contain.text', formData.date + " " + formData.month + "," + formData.year);
      SubmitTablePage.rowCellBasedOnIndex(5).should('contain.text', formData.subject);
      SubmitTablePage.rowCellBasedOnIndex(6).should('contain.text', 'Music');
      SubmitTablePage.rowCellBasedOnIndex(7).should('contain.text', formData.image);
      SubmitTablePage.rowCellBasedOnIndex(8).should('contain.text', formData.address);
      SubmitTablePage.rowCellBasedOnIndex(9).should('contain.text', formData.state + " " + formData.city);
    });
    //--------------------------------------------------------------------------------------------------------------------------------------
  });
  //===========================================================================
});