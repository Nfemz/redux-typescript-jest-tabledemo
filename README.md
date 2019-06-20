#This application fetches from an https endpoint and returns an array of user objects.
The project is written using Typescript and utilizes the following tech:

- React
- React Redux
- Redux
- Redux Thunk
- Jest
- Bootstrap (for minor styling)

#The application contains the following 5 test suites:

- App.test

  - Test loading animation on loading WITHOUT errors
  - Test loading animation on loading:true WITH errors
  - Test failure JSX content on loading:false WITH errors
  - Test NO loading animation on loading:false WITHOUT errors
  - Test NO failure JSX content on loading: false WITHOUT errors
  - Test Table JSC content on loading: false WITHOUT errors

- Actions.test

  - Test getUserBegin action
  - Test getUserSuccess action
  - Test getUserFailure action

- Reducers.test

  - Tests initial state
  - Tests handling of GET_USERS_BEGIN
  - Tests handling of GET_USERS_SUCCESS
  - Tests handling of GET_USERS_FAILURE

- UsersTable.test

  - Tests NO table rows JSX content on !users
  - Tests correct # of table rows JSX content rendered from fetched data

- TableRow.test
  - Tests component correctly receives and displays props

# Created by Nick Femia on 6/19/2019
