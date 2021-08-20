# CypressAutomation
 
# cypress
This repository contains Cypress.io code snippet to validate smoke test of http://automationpractice.com/



Table of contents
=================

<!--ts-->
   * [Overview](#overview)
   * [Structure](#structure)
   * [Installation](#installation)
<!--te-->

Overview
=========
The project is based on **Page Object Model** design pattern and data. The project first loads the main page of website, then clicks the Sign In link. The next step is to create two new user accounts based on information specified in NetUsers.json. All you need to do is update the count number for email ID i.e. if the email ID specified is *test19@mailsac.com*, then simply change the number value so that it does not collide with any existing account.
The system then attempts to login using valid and invalid credentials specified in Users.json. Lastly, in order to validate the cart feature, the first product appearing on page is added to the cart, then its quantity is updated in the cart, the product name and count are validated inside cart and finally, the product is removed.

Structure
=========
* **fixture:-** This folder contains two data files
  * NewUsers.json - It contains data set for the creation of new users over the website
  * Users.json - It contains the credentials for Valid and Invalid users 

* **integration:-** This folder contains actual project code
  * AutomationPractice_POM - This sub-folder contains the files defining objects over pages and their related methods
  * AutomationPractice_Spec - This sub-folder contains the files defining execution sequence/steps. The Test cases that need to be executed.

* **plugins:-**  Plugins enable you to tap into the Node process running outside of the browser. Its created by default with the project
* **support:-**  The support folder is a great place to put reusable behavior such as custom commands or global overrides that you want to be applied and available to all your spec files.

Installation
============
```bash
$ git clone https://github.com/nayyershahbaz/cypress
$ cd cypress
```

Open the project in Visual Studio Code and run the following command in terminal
```bash
$ npm run cypress:open
```



