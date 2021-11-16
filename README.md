# The Awesome Q/A Tool

This is a multipurpose application for questions and answers.

## Features

- On an application load successfully user can see exiting question on screen.
- On click on question, see will be display on screen.
- Users can create question and answer, question is editable once click on edit icon.
- Users can sort questions in ascending and descending order.
- Info section is available on left side of screen which shows number on question.
- Users can delete single as well as all questions on button click.
- A delay check box is present which can delay 5 sec while adding new question on list.

## Technology

### Frontend

- The Frontend stack is **React,Redux,Hooks,React-testing library, and Jest.**
- Implementation of the application using four components,**Header,Addquestion,Questionlist and Infosection** components.
- Code of separation **UseAction** custom hooks is implemented for bind action creators(Redux purpose).
- For Redux implementation middleware **Redux-thunk** used for handle side effects.
- I also added validation for questions and answers input.
- I also added **loader** while click on checkbox notes added on UI.
- Application is responsive on mobile,ipad and desktop view.
- Runs the app in the development mode.
- Open **http://localhost:3000** to view it in the browser.

In the project directory, you can run:

## Installation

```sh
clone repo
cd  qatool
npm install
npm start
```

### `npm test`

```sh
npm test
```

### `Preview`

**Desktop**
![Desktop](./assets/images/desktopView.png?raw=true 'Desktop')

**Ipad**
![Ipad](./assets/images/ipadView.png?raw=true 'Ipad')

**Mobile**

![Mobile](./assets/images/mobileView.png?raw=true 'Mobile')
