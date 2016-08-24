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
    |   +-- RandomPlayerFeed.js
    +-- object
    |   +-- Match.js
    |   +-- Player.js
    +-- reducers
    |   +-- matcher.js
    +-- config.js
    +-- index.jsx

## Deploying the app

To deploy the app to gh-pages, there are a couple of steps to follow.

1. Run `webpack` command. This will create a `bundle.js` and `bundle.js.map` file in the dist folder.
2. Delete everything except dist folder.
3. Empty contents of dist folder to root directory.
4. Commit and push to gh-pages.

## Unit tests

Currently, there are tests on each of the files within the components, logic, and reducers folders. The relevant file can be found in the analogous point within the `test` folder. All test files are suffixed with `_spec`

## Custom implementation

Each player requires an identifying accessor, a display accessor, and a value accessor. The string accessor for each of these are specified in this file, and the custom implementation should conform to this. They are set to 'id', 'name', and 'rating' respectively. Defaulted implementations are held in the logic folder.

### Initial state
In config.js, you can specify an initial state of players and matches for the application to load up. This can be either plain js, or immutable objects.

### Matcher

In config.js, you can specify a custom matcher to match players up, rather than the default DummyMatcher. This method should take in a list of players as a first parameter, and an id as an optional second parameter.

It should return an immutable list containing pair-wise immutable lists of ids. i.e; List(List(1, 2), List(3, 4))

### Player Feed

In config.js, you can specify a player feed to provide the app with new players. This function should take in the action for adding players, currently `this.props.addPlayer`, and should only need to be invoked once to provide the feed. A simple random implementation is currently provided.