class myCart{

    elements = {
        cartLink: () => cy.get('a[title="View my shopping cart"]'),
        cartHeading : () => cy.get('#cart_title', { timeout: 10000 }),
        cartEmpty: () => cy.get('.alert'),
        addToCart: () => cy.get('#add_to_cart'),
        proceedToCheckOut: () => cy.get('.icon-chevron-right'),
        productQuantityInCart: () => cy.get('#summary_products_quantity'),
        productNameInCart: () => cy.get('.product-name'),
        deleteItem: () => cy.get('.icon-trash'),
        continueShopping: () => cy.get('.button-exclusive'),
        increaseItemQuantityInCart: () => cy.get('.icon-plus'),
    }

    /**
     * Nayyer Shahbaz :- 19-Aug-2021
     * Method to click Cart link
     */
    clickCartLink(){
        this.elements.cartLink().should('be.visible')
        this.elements.cartLink().click()
    }

    /**
     * Nayyer Shahbaz :- 19-Aug-2021
     * Shopping Cart Heading is displayed
     */
    cartHeadingIsDisplayed(){
        this.elements.cartHeading().should('be.visible')
        this.elements.cartHeading().should('contains.text', 'Shopping-cart summary')
    }

    /**
     * Nayyer Shahbaz :- 19-Aug-2021
     * Method to validate the cart is empty
     */
    isCartEmpty(){
        this.elements.cartEmpty().should('be.visible')
        this.elements.cartEmpty().should('have.text', 'Your shopping cart is empty.')
    }

    /**
     * Nayyer Shahbaz :- 19-Aug-2021
     * Method to display details of product
     * and add to cart
     */
    addItemToCart(){
        this.elements.addToCart().click();
        this.elements.proceedToCheckOut().last().click();
    }

    /**
     * Nayyer Shahbaz :- 19-Aug-2021
     * Method to get items count in cart
     */
    validateItemsCountInCart(count){
        this.elements.productQuantityInCart().should('be.visible')
        this.elements.productQuantityInCart().should('contains.text', count)
    }

    /**
     * Nayyer Shahbaz :- 19-Aug-2021
     * Method to get product in cart
     */
    validateItemNameInCart(name){
        this.elements.productNameInCart().should('be.visible')
        this.elements.productNameInCart().should('contains.text', name)
    }

    /**
     * Nayyer Shahbaz :- 19-Aug-2021
     * Method to increase count of item in cart
     */
    increaseItemCount(){
        this.elements.increaseItemQuantityInCart().click()
    }

    /**
     * Nayyer Shahbaz :- 19-Aug-2021
     * Delete item from cart
     */
    deleteItemsFromCart(){
        this.elements.deleteItem().click()
    }

}

module.exports = new myCart();