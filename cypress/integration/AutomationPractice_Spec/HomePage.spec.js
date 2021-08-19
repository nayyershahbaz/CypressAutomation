import HomePage from '../AutomationPractice_POM/HomePage'
import SignInPage from '../AutomationPractice_POM/SignInPage'
import CartPage from '../AutomationPractice_POM/CartPage'
import CreateAccount from '../AutomationPractice_POM/CreateAccount'
import MyAccount from '../AutomationPractice_POM/MyAccount'

// load data from json files
const existingUsersData = require('../../fixtures/Users.json')
const newUsersData = require('../../fixtures/NewUsers.json')

describe('Test related to - Home Page', () => {
    it('Ensure Logo, Sign In and Cart links appear on home page', () =>{
        HomePage.loadMainPage();
        HomePage.mainLogo_SignIn_Link_areVisible();
    });
})


describe('Tests related to  - Sign In page', () => {
    it('Open the Sign-In page through link',() => {
        HomePage.clickSignInLink();
    });
    it('Validate Heading on SignIn page is Authentication', () =>{
        SignInPage.validatePageHeading();
    });
    
    context('Error messages validation on Sign-In page', () => {
        it('Display error when Creating Account without email ID', () =>{
            SignInPage.clickCreateAccountWithoutEmailID();
        });
        it('Display error when trying to login without credentials', () =>{
            SignInPage.loginWithUserCredentials();
        });
    })
    context('Create account with valid credentials from JSON file',() =>{
        newUsersData.forEach(data => {
            it('Enter email ID and click Create an Account button On Sign In Page', () =>{
                SignInPage.createNewAccountOnSignIn(data.email);
            });

            it('Display error when data is missing on Account Creation form', () =>{
                CreateAccount.displayErrorWhenFieldsEmpty();
            });

            it('Create Account based on input data', () =>{
                CreateAccount.createNewAccount(data);
            });

            it('Once account is created, validate the Main heading on My Account page', () =>{
                MyAccount.validateMyAccountPage();
            })

            it('Logout and Authentication page shall display', () =>{
                HomePage.clickSignOutLink();
                HomePage.mainLogo_SignIn_Link_areVisible();
            })
        })
    });
    context('Account Login with with VALID and IN-VALID credentials.', () => {  
        existingUsersData.forEach(test => {
            if(test.userType == 'valid')
            { 
                it('Login with valid user credentials', () =>{
                    SignInPage.loginWithValidCredentials(test.email,test.password);
                    MyAccount.validateMyAccountPage();
                })
                it('Log out from system using link', () =>{
                    HomePage.clickSignOutLink();
                    HomePage.mainLogo_SignIn_Link_areVisible();
                })
            }else{
                it('User attempts to login with invalid credentials',() =>{
                    SignInPage.loginWithInvalidCredentials(test.email,test.password);
                })
            }
        })
    })
});


describe('Tests related to - Cart Page',() => {
    context('Tests to validate cart status', () => {
        it('User is able to click Cart link and validate Heading on page', () =>{
            CartPage.clickCartLink();
            CartPage.cartHeadingIsDisplayed();
        })
        it('Validate the Cart is empty',()=> {
            CartPage.isCartEmpty();
            HomePage.clickProductLogo();
        })
    })

    context('Add, Update and Delete Operations for Item in Cart', () => {
        it('Add Item to cart',() => {
            HomePage.elements.firstItem().first().click();
            CartPage.addItemToCart();
            CartPage.validateItemsCountInCart(1);
            CartPage.validateItemNameInCart('Faded Short Sleeve T-shirts');
        })
        it('Increase Item count in cart',() =>{
            CartPage.increaseItemCount();
            CartPage.validateItemsCountInCart(2);
        })
        it('Delete item from Cart',() => {
            CartPage.deleteItemsFromCart();
        })
    })

})