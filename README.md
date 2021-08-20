# CypressAutomation
 
# cypress
This repository contains Cypress.io code snippet to validate smoke test of http://automationpractice.com/



Table of contents
=================

<!--ts-->
   * [Overview](#overview)
   * [Structure](#structure)
   * [Execution](#execution)
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

![Folder Structure](https://i.postimg.cc/L60TqJgH/Project-Structure.png)

Execution
==========
In order to execute the project, 
* Open **Visual Studio Code** and click **Source Control** option from left menu.
* Click the **Clone Repository** button and enter *https://github.com/nayyershahbaz/CypressAutomation.git*  then hit the enter key
* Specify any directory on your system for Repository location i.e. /Users/nayyershahbaz/Documents/GitProjects and click the **Select Repository Location** button
* From Bottom-Right of screen, click the Open button
* Click **View** Menu and select **Terminal** menu option
* Enter following command and press Enter key
 
```bash
$ npm run cypress:open
```

If FireFox is configured over system, it will appear as default browser (as specified during checkin). Simply click the **HomePage.spec.js** link under AutomationPractice_Spec folder and it will start the execution.

![Project Execution](https://i.postimg.cc/dtmkQRd2/Screenshot-2021-08-20-at-5-44-09-AM.png)

## Given below is the preview of project execution

[![Demo CountPages alpha](https://i.postimg.cc/sg3ry79Z/Screenshot-2021-08-20-at-5-58-06-AM.png)](https://streamable.com/kz79sc)


Happy Testing ! :star_struck:

