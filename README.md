# gatsby-starter

A Gatsby starter with a set of strict linting and formatting rules, based on [gatsby-starter-strict](https://github.com/kripod/gatsby-starter-strict) and [gatsby universal starter](https://github.com/fabe/gatsby-universal).

Features:

* [styled-components](https://www.styled-components.com/) v4
* `IntersectionObserver` support
* One config file for site-wide settings
* A set of strict linting rules and scripts
  * `lint` runs every linter
  * `lint:es` lints `js` and `jsx` files (based on the [Airbnb JavaScript Style Guide][])
  * `lint:style` lints `scss` files (based on [stylelint-config-recommended-scss][] and [stylelint-config-idiomatic-order][])
* [Jest](http://jestjs.io) for unit and snapshot testing
* [Storybook](https://storybook.js.org) for component showcase and snapshot testing
* Encourage automatic code formatting
  * `format` script
* Use [EditorConfig](http://editorconfig.org) to maintain consistent coding styles between different editors and IDEs
* Integration with [Visual Studio Code](https://code.visualstudio.com)
* End-to-end testing with [Cypress](https://www.cypress.io)

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/)

[airbnb javascript style guide]: https://github.com/airbnb/javascript
[stylelint-config-recommended-scss]: https://github.com/kristerkari/stylelint-config-recommended-scss
[stylelint-config-idiomatic-order]: https://github.com/ream88/stylelint-config-idiomatic-order
