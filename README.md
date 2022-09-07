# Tag Input Code Challege

See [demo](https://tag-input-code-challenge.herokuapp.com/) =)

This project is just a code challenge and no more :)

## components

### **BaseTextInput**

It is just a syled input.

### **Tag**

This component is just render simple styled span.

### **TagContainer**

This is a simple container and hold tags beside each other.

### **List**

This is a dropdown and user can select item from it. Also user can choose item using up and down key.

```jsx
{
  show?: boolean; // show and hide dropdown
  options: Label[]; // when dropdown is visible it will show this options
  onSelect: (obj: Label, index: number) => void; // when user select an option this function will be triggered
  activeIndex: number; // set active option
}
```

### **TagInput**

This component contains **BaseTextInput**, **List**, **TagContainer** and **Tag**.

## types

This directory contains types.

## api

I mocked the api of getting labels with filter.

## Available Scripts

In the project disrectory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
