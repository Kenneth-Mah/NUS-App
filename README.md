# Creating an NUS App

In the project directory, running `npm start` runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## Task 1
Create a home page that displays a NUS logo, a text that says: “NUS is a leading research university in Asia”, and a working navigation panel with Home, Academics, Admission. The academics page should have a list of modules taught at the university and the admission page should have an admission process flow. 

The list of modules taught at the university should be formatted as a table: 
| Module Code | Module Title |
| --- | --- |
| BT1101 | Introduction to Business Analytics |
| BT2101 | Econometrics Modelling for Business Analytics |
| BT2102 | Data Management and Visualisation |
| BT2103 | Optimization Methods in Business Analytics |

The admission timeline should be formatted as a bullet point list: 
1.	Understanding Admission requirements
2.	Submit application online
3.	Upload supporting documents
4.	Make application fee payment
5.	Check application status 

## Task 2
Extend the previous exercise by adding a sign in with Google button to all the pages. Account for the extreme cases, like wrong credentials and non-existent user by triggering a notification message that gives an explanation. Demonstrate that the authentication flow works by signing in with your google account, your account with a wrong password, and an account that does not exists in the database.  
