## Quick start

1. Clone this repository `git clone https://github.com/Alex-DG/react-native-learning-demo.git`
2. Open your terminal, type `yarn` in the project root folder to install all the dependencies

- On iOS, to complete the linking of `react-navigation`, make sure you have [Cocoapods](https://cocoapods.org/) installed. Then run:

```
cd ios
pod install
cd ..
```

- On Android, it shouldn't need any more steps.

3. Type `yarn start` to start the bundler
4. In a separate terminal window type `yarn ios` or `yarn android` to start this app.

/!\ If you have any problems with `react-navigation` dependencies, have a look to [Getting starting with react-navigation > React Native 0.60 and higher](https://reactnavigation.org/docs/en/3.x/getting-started.html)

## Create a new React-Native App with TS template

`npx react-native init myAppName --template react-native-template-typescript`

See React-Native official documentation for more information [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) or go to their [Github repository](https://github.com/facebook/react-native).

If you want to know more about `npx`: [What is npx?](https://dev.to/matheusgomes062/what-is-npx-2oj9).

## TypeScript

- What is TS and why using it in your project?
  `TypeScript is a superset of the JavaScript language that has a single open-source compiler and is developed mainly by a single vendor: Microsoft. The goal of TypeScript is to help catch mistakes early through a type system and to make JavaScript development more efficient.`
  source: [Stackoverflow - Lodewijk's answer](https://stackoverflow.com/a/35048303/6521).

- How to configure TS?
  See doc: [Using TypeScript with React-Native](https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native.html).

## Tests

- [What is react-test-renderer?](https://reactjs.org/docs/test-renderer.html)
- [What is Jest?](https://jestjs.io/en/)

## Styling

- Common pattern is to pass a style through the style props of each of you react-native component and using [React-Native StyleSheet](https://facebook.github.io/react-native/docs/style)
- Alternative: [Styled-component](https://styled-components.com/)
- [Why I like using styled-components in react-native apps?](https://medium.com/building-with-react-native/why-i-like-using-styled-components-in-react-native-apps-1x10-6f98a46efdf9)

## JavaScript ES6

- [What is ECMAScript6](https://www.w3schools.com/Js/js_es6.asp)
- [JavaScript ES6 - write less do more](https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/)

## Yarn

- [yarnpkg.com](https://yarnpkg.com/)
- [How to install?](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

## React-Navigation

The most popular choice for handling navigation in a React Native app.

- [https://reactnavigation.org/](https://reactnavigation.org/)

## Where do you go from here?

I've shown you a very basic first approach about how to structure your react-native app.
There is no universal rules here an alternative organisation of your files which goes further
if you are interested by learning more about this topic:

- [How to structure your project and manage static ressources in your project](https://www.freecodecamp.org/news/how-to-structure-your-project-and-manage-static-resources-in-react-native-6f4cfc947d92/)
