class MyAccountPage{

    elements ={
        mainHeading: () => cy.get('.page-heading'),
        orderHistoryDetail: () => cy.get('.icon-list-ol'),
        userProfileName : () => cy.get('.account')
    }

    /**
     * Nayyer Shahbaz  :- 18-Aug0-2021
     * method to validate the heading on New account creation page
     * Also the user profile name is correct
     */
    validateMyAccountPage(){
        this.elements.mainHeading().should('be.visible');
        this.elements.mainHeading().should('have.text', 'My account')
     //   this.elements.userProfileName().should('have.text', )
        this.elements.orderHistoryDetail().should('be.visible');
    }
}

module.exports = new MyAccountPage();