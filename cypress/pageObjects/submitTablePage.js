import { BasePage } from "./basePage";

export class SubmitTablePage extends BasePage {
    //---------------------------------------------------------
    static get modal(){
        return cy.get('.modal-content');
    }

    static get rows(){
        return this.modal.find('tbody tr');
    }

    static get rowCells(){
        //td:nth-child(2) Looks at volume col
        return this.modal.find('tbody tr td:nth-child(2)');
    }

    static rowCellBasedOnIndex(index){
        return this.rowCells.eq(index);
    }
    //---------------------------------------------------------
    static get closeButton(){
        return this.modal.find('#closeLargeModal');
    }
    //---------------------------------------------------------
}