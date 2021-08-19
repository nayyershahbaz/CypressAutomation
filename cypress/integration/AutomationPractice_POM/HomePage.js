class homePage{

    elements = {
            mainLogo: () => cy.get('#header_logo'),
            signInLink: () => cy.get('.login'),
            signOutLink: () => cy.get('.logout'),
            firstItem: () => cy.get('a[title="Faded Short Sleeve T-shirts"]', { timeout: 10000 })
    }

    /**
     * Nayyer Shahbaz :- 19-Aug-2021
     * Click Main product logo on page
     */
    clickProductLogo(){
        this.elements.mainLogo().click();
    }

    // launch the Automationpractice.com website
    loadMainPage(){
        cy.visit('http://automationpractice.com/')
    }

    // this method ensures the main logo appears on page
    mainLogo_SignIn_Link_areVisible()
    {
        this.elements.mainLogo().should('be.visible')
        this.elements.signInLink().should('be.visible')
    }

    clickSignInLink(){
        this.elements.signInLink().click();
    }

    clickSignOutLink(){
        this.elements.signOutLink().click();
    }

}

module.exports = new homePage();