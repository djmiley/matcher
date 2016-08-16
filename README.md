# Matcher

A react-redux dummy implementation to envelope a rating matcher

## Running the app

The app uses webpack-dev-server to aid development. Technologies used include babel, immutable for data storage, and mocha and chai for unit testing.

To start the development server with hot reloading enabled, simply run

```
webpack-dev-server
```

To run the set of unit tests, simply run

```
npm test
```

## Folder structure
    
    +-- actions
    |   +-- matcher.js
    +-- components
    |   +-- buttons
    |   |   +-- GeneratePlayerButton.jsx
    |   |   +-- MatchButton.jsx
    |   +-- label
    |   |   +-- VersusLabel.jsx
    |   +-- match
    |   |   +-- MatchList.jsx
    |   |   +-- MatchView.jsx
    |   +-- player
    |   |   +-- PlayerList.jsx
    |   |   +-- PlayerView.jsx
    +-- constants
    |   +-- actions.js
    +-- containers
    |   +-- App.jsx
    +-- logic
    |   +-- DummyMatcher.js
    |   +-- RandomPlayer.js
    +-- object
    |   +-- Match.js
    |   +-- Player.js
    +-- reducers
    |   +-- matcher.js
    +-- config.js
    +-- index.jsx

## Unit tests

Currently, there are tests on each of the files within the components, logic, and reducers folders. The relevant file can be found in the analogous point within the `test` folder. All test files are suffixed with `_spec`

## Custom matcher

In config.js, you can specify a custom matcher to match players up, rather than the default DummyMatcher. This method should take in a list of players as a first parameter, and an id as an optional second parameter.

It should return an immutable list containing pair-wise immutable lists of ids. i.e; List(List(1, 2), List(3, 4))

Each player requires an identifying accessor, a display accessor, and a value accessor. The string accessor for each of these are specified in this file, and the algorithm should conform to this. They are set to 'id', 'name', and 'rating' respectively.