# CaseStudy-Exercise-Currency-Converter-API

## About the application : 

This is a responsive currency converter widget using JSON API from http://fixer.io/ for the currency rates.
It is developed as a component using AngularJS and Bootstrap.

## About the Functionality :

User can type in the required amount in the input textbox.It allows the user to enter only positive numbers (integers and float values). Hence users cannot enter special characters (except ".") and alphabets.

Three types of currencies are available in the dropdown, such as CAD, USD, EUR.User have to select the from-type and to-type of currencies from the dropdown box . By default the from and to currency types are set to CAD and USD respectively.

It shows the converted result instantly in the converted amount textbox .

User can click on the Disclaimer link and additional information about the exchange rate are shown.

## Steps to run the application :

Step-1. Download and extract the zip file.

Step-2. This application requires node.js for installing the dependencies and running the server. Hence if you dont have node.js in yoursystem , then download and install node.js in your system (available in : https://nodejs.org/en/download/ ).

Step-3. Open command prompt and set the target to the project location using "cd <project location>" command. eg:( cd Your drive:\project downloded directory\CurrencyConverterAPI-master ). 

Step-4. Run the command "npm install http-server -g" to install http-server globally. It will download and install http-server in your system globally.

Step-5. Run the command "npm install" to install the dependencies (js and css library files). After running this command you will be able to see 'node_modules' folder inside the "CurrencyConverterAPI-master" folder. The 'node_modules' folder contains all the application dependency files.

Step-6.Run the command "http-server Your drive:\project downloded directory\CurrencyConverterAPI-master" to run the app on the http-server.
eg: http-server C:\Users\Public\Downloads\CurrencyConverterAPI-master
    
It will give an URL to access the currency convertor.

    Example :
    
    http://192.168.0.100:8080
    
    http://127.0.0.1:8080

Now open any browser and hit the url "localhost:8080/CurrencyConverterAPI-master". It will load the application.

## Note:
1.Use "ctrl+C" to stop the http-server.

2.If you want to change any css styles, run the following command "npm run watch-css". Then add your changes in style.scss file and save it.The sass compiler will update the changes in style.css file.Start the server again(follow step-6) to run the application .
   

