class signInPage{

    elements = {
        mainHeading: () => cy.get('.page-heading'),
        emailIDCreateAccount: () => cy.get('#email_create'),
        submitCreateAccountButton: () => cy.get('#SubmitCreate'),
        createAccountError: () => cy.get('#create_account_error'), 
        registeredUserEmail: () => cy.get('#email'),
        registeredUserPassword: () => cy.get('#passwd'),
        signInButton: () => cy.get('#SubmitLogin'),
        accountLoginError: () => cy.get('.alert'),
    }

    /**
     * Nayyer Shahbaz 17-Aug=2021
     * Method to validate the heading on Singin page
     */
    validatePageHeading(){
        this.elements.mainHeading().should('have.text', 'Authentication')
    }

    /**
     * Nayyer Shahbaz :- 17-Aug-2021
     * Method to display error message when email ID is not provided 
     * and user clicks the Create an Account button
     */
    
    clickCreateAccountWithoutEmailID(){
        this.elements.submitCreateAccountButton().click();
        this.elements.createAccountError().should('be.visible')
        this.elements.createAccountError().should('have.text', 'Invalid email address.')
    }

    /**
     * Nayyer Shahbaz :- 17-Aug-2021
     * Method to display error message when user tries to login without credentials
     */
    
    loginWithUserCredentials(){
        this.elements.signInButton().click();
        this.elements.accountLoginError().should('be.visible')
        this.elements.accountLoginError().should('include.text', 'An email address required.')
    }

    /**
     * Nayyer Shahbaz :- 17-Aug-2021
     * This method enters email ID in field and clicks 
     * Create a New Account button
     */
    
    createNewAccountOnSignIn(emailID){
        const now = new Date(Date.UTC(2021, 8, 19)).getMinutes()
        this.elements.submitCreateAccountButton().should('be.visible')
        this.elements.emailIDCreateAccount().type(emailID)
        this.elements.submitCreateAccountButton().click();
    }

    /**
     * Nayyer Shahbaz :- 18-Aug-2021
     * This method logsin the user with valid credentials
     */

    loginWithValidCredentials(username, password){

        this.elements.registeredUserEmail().clear().type(username)
        this.elements.registeredUserPassword().clear().type(password)
        this.elements.signInButton().click();
    }

    /**
     * Nayyer Shahbaz - 18-Aug-2021
     * Method to validate error message when login attempt with 
     * invalid credentials is made
     */

    loginWithInvalidCredentials(username, password){
        this.elements.registeredUserEmail().clear().type(username)
        this.elements.registeredUserPassword().clear().type(password)
        this.elements.signInButton().click();
        this.elements.accountLoginError().should('be.visible')
        this.elements.accountLoginError().should('include.text', 'Authentication failed.')
    }
}

module.exports = new signInPage();