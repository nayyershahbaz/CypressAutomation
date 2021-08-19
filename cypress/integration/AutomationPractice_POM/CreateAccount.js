class createAccount{

    elements ={
        mainHeading: () => cy.get('.page-heading'),
        registerButton: () => cy.get('#submitAccount', { timeout: 10000 }),
        requiredFieldsError: () => cy.get('.alert'),

        // fields inside the form
        titleMr: () => cy.get('#id_gender1'),
        firstName: () => cy.get('#customer_firstname'),
        lastName: () => cy.get('#customer_lastname'),
        password: () => cy.get('#passwd'),
        dobDay: () => cy.get('#days'),
        dobMonth: () => cy.get('#months'),
        dobYears: () => cy.get('#years'),
        
        // your address section fields
        addressFirstName: () => cy.get('#firstname'),
        addressLastName: () => cy.get('#lastname'),
        company: () => cy.get('#company'),
        address: () => cy.get('#address1'),
        city: () => cy.get('#city'),
        state:() => cy.get('#id_state', { timeout: 5000 }),
        ZIP: () => cy.get('#postcode'),
        country: () => cy.get('#id_country'),
        phone: () => cy.get('#phone'),
        mobile: () => cy.get('#phone_mobile'),
        addressAlias: () => cy.get('#alias')
    }

    /**
     * Nayyer Shahbaz :- 18-Aug-2021
     * Method to display error message when Account creation button
     * is pressed without entering data in form fields
     */
    displayErrorWhenFieldsEmpty(){
        // Give this element 10 seconds to appear
        this.elements.registerButton().should('be.visible');
        this.elements.registerButton().click();
        this.elements.requiredFieldsError().should('be.visible')
        this.elements.requiredFieldsError().should('include.text', 'There are 8 errors')
    }

    /**
     * Nayyer Shahbaz :- 18-Aug-2021
     * use this method to fill data for create new account Form
     */
    createNewAccount(data){
        this.elements.titleMr().click();
       // data.forEach((value) => {
            this.elements.firstName().type(data.firstName);
            this.elements.lastName().type(data.lastName);
            this.elements.password().type(data.password);
            this.elements.dobDay().select(data.date)
            this.elements.dobDay().should('have.value', data.date)
            this.elements.dobMonth().select(data.month )
            this.elements.dobMonth().should('have.value', '2')
            this.elements.dobYears().select(data.year)
            this.elements.dobYears().should('have.value', data.year)

            // your address section data filling
            this.elements.addressFirstName().type(data.addressFirstName)
            this.elements.addressLastName().type(data.addressLastName)
            this.elements.company().type(data.company)
            this.elements.address().type(data.address)
            this.elements.city().type(data.city)
            this.elements.ZIP().type(data.zip)
            // select value for state and country and validate the selected value
            this.elements.country().select(data.Country,{ force: true }).invoke('val').should('eq', '21')
            this.elements.state().select(data.state,{ force: true }).invoke('val').should('eq', '46')
            this.elements.phone().type(data.phone)
            this.elements.mobile().type(data.mobile)
            this.elements.addressAlias().clear().type(data.addressAlias)

            // click the Register button to create new account
            this.elements.registerButton().click();
     //   })
    }
}

module.exports = new createAccount();