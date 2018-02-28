# Key Features of this Configuration:
- SCSS Modules are set up for production and development environments without ejecting the defaults from create-react-app
- SVGs can be inlined and thus manipulated as DOM elements by simply importing them as components
- SCSS resource files (variables, mixins) can be automatically imported to each other scss file in the project, making life easier.
- Storybook is pre-configured to play nicely with the changes above.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In addition to the vanilla setup from `create-react-app` I've used [React App Rewired](https://github.com/timarney/react-app-rewired) to tweak some things:
- SCSS is now enabled in conjunction with CSS Modules.
- [SASS Resources Loader](https://github.com/shakacode/sass-resources-loader) is configured targetting the `/style/resources` directory. This is really just a QOL thing and can be removed pretty easily.
- [SVG React Loader](https://github.com/jhamlet/svg-react-loader) is enabled to allow treating svgs as components.

## How to use SCSS in this configuration
This particular setup is only for those seeking to use SCSS CSS Modules, it breaks pretty magnificently otherwise.
```scss
// components/app/app.scss
.someClass {
  foo: bar;
  div {
    bit: baz;
  }
}
```
```js
// components/app/app.js
import styles from './app.scss'

// ...

render () {
  return {
    <div className={styles.someClass}>
      <div>Some Div Content styled by the nested rule.</div>
    </div>
  }
}
```

## How to use SVGs in this configuration
I have set up [SVG React Loader](https://github.com/jhamlet/svg-react-loader) to wrap all imported SVGs as components. Once imported, you can simply use them as you would a component. These svgs are then inlined in the HTML, so you can use SCSS to style and manipulate them as necessary.
```js
// components/app/app.js
import SomeIcon from '../../assets/icons/someIcon.svg'

// ...
render () {
  return {
    <div>
      <SomeIcon />
    </div>
  }
}
```

Giving them a className is just the same as if they were divs
```scss
// components/app/app.scss
.svgClass {
  foo: bar;
}
```
```js
// components/app/app.js
import styles from './app.scss'
import SomeIcon from '../../assets/icons/someIcon.svg'

// ...

render () {
  return {
    <div>
      <SomeIcon className={styles.svgClass} />
    </div>
  }
}
```

## Storybooks

This project is also set up to run [Storybook](https://github.com/storybooks/storybook) with the same modified webpack configuration as what is applied to create-react-app.