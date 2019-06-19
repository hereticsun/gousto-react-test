# Gousto coding test
Submitted by Azlan Cuttilan

## How to use:

### Prerequisites:

* `node js` >= 8.12
* `yarn` (you can install it globally by running `npm install -g yarn`)

### Commands:

* `yarn install` - installing dependencies
* `yarn start` - starting the app in dev mode
* `yarn start-windows` - starting the app in dev mode on windows
* `yarn build` - build the production artifacts
* `yarn test` - running the tests

## Application structure:

Within the `src` folder, `actions`, `components` and `reducers` are grouped within their respective folders. Each component is within it's own folder that groups the tests, JS and CSS for the respective component.

```
.
+-- public
+-- src
    +-- actions
    |   +-- __tests__
    +-- components
    |   +-- App
    |   |   + -- __tests__
    |   +-- Categories
    |   |   +-- __tests__
    |   +-- Home
    |   |   +-- __tests__
    |   +-- Product
    |   |   +-- __tests__
    |   +-- Products
    |   |   +-- __tests__
    |   +-- SearchBar
    |       +-- __tests__
    +-- reducers
        +-- __tests__

```

## Missing functional requirements:
All functional requirements were completed

## Possile improvements / functionality:

* The submission could have improved testing by implementing end to end tests using a framework such as [Cypress](https://cypress.io)
* There is room to improve test coverage
* Inclusion of linting and performing this in a git pre-commit hook would be helpful to ensure consistency of code quality
* Use of the browser history enables the functionnal requirement for use of the browser's native back and forward buttons but does not allow for direct access to that view if the link is bookmarked or shared. This could be achieved by updating the store for a selected category if a url param has been provided
* Styling has lots of room for improvements. Basic styling was applied ensuring the app could be navaigated using keyboard only. CSS modules would be a good improvement.

## Notes:
I experienced CORS issues when making requests to the API endpoints provided and had to follow the recommendation to follow the steps in `https://alfilatov.com/posts/run-chrome-without-cors/`
