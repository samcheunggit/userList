# UserList

https://techtest-userlist.herokuapp.com/

This project shows the list of user from the given endpoint, each user is displayed as a card, with the following information:
* Name
* Email
* Address (Suite, Street, City)
* Website

# Checklist
- [x] Typescript
- [x] Consume given API endpoint, list of users looks tidy
- [x] Responsiveness (tested on different sizes and browsers)
- [x] Address is clicked, open new tab to show location in google map with given latitude and longitude, it will open default google map app in iphone
- [x] Website is clicked, open new tab to redirect given website url
- [x] Email is clicked, open default email client

# Stack
* Angular 8.1.2
* Angular Material
* Express.js / Node.js
* Heroku
* Git / Github

# Run on local
1. download the whole project
2. make sure the angular cli is installed, if not, run ```npm install -g @angular/cli``` to install it.
3. cd to the root folder of downloaded project, run command ```ng serve```
4. open browser and navigate to `http://localhost:4200`

# Run unit test
Unit tests are written for each components to make sure every single functions work as expected.

Run ```ng test``` to launch all unit test cases.

# Run end to end test
End to end tests are written to test the whole workflow in the application, from loading user data, displaying all user data in card components, different behaviours such as address link and error scenario.

Run ```ng e2e``` to launch all e2e test cases.
