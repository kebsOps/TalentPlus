## A Basic Microservice App

## Description
a simple Microservice app including a Frontend and Backend
Frontend service fetches the word “TALENT PLUS” from the backend service using an API call. 

## setup
 git clone [repo](https://github.com/kebsOps/TalentPlus.git)
 
install dependencies  

``` npm install ```
 
 ## Run application using
 
 ``` npm start ```


## Deploy frontend app
``` helm install -f values.yaml frontend ./frontend ```

## Deploy backend app
``` helm install -f values.yaml backend ./backend  ```

## Deploy ingress controller
``` helm install -f ingress.yaml ingress ./ingress  ```