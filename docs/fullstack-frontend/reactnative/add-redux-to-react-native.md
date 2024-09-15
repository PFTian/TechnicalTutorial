# Add Redux to React Native

## Step 1: Installation

Install redux and react-redux packages.

```bash
npm install redux react-redux
```

## Step 2: Create redux relative folders in the project

```text
📦src
 ┣ 📂store
    ┣ 📂actions
    ┃ ┗ 📜auth.js
    ┣ 📂constants
    ┃ ┗ 📜auth.js
    ┣ 📂reducers
    ┃ ┗ 📜auth.js
    ┗ 📜configStore.js
```

## Step 3: Create relative elements in each folder

For example, if we want to use redux to record if an user is login the app, we can:

1. Create an `auth.js` file under `constants`, `actions` and `reducers` folders.

2. In the `constants/auth.js` file, we add two variables

   ```javascript
   const LOGIN = 'LOGIN';
   const LOGOUT = 'LOGOUT';
   ```

3. In the `actions/auth.js` file, we create two actions for user to `login/logout`.

   ```javascript
   import { LOGIN, LOGOUT } from '../constants/auth';

   export const login = (userInfo) => {
     return {
       type: LOGIN,
       payload: userInfo,
     };
   };

   export const logout = () => {
     return {
       type: LOGOUT,
     };
   };
   ```

4. In the `reducers/auth.js` file, we create a reducer to handle the state change request from actions based on constant types.

   ```javascript
   import { LOGIN, LOGOUT } from '../constants/auth';

   const initialState = {
     username: null,
     token: null,
   };

   export default (state = initialState, action) => {
     switch (action.type) {
       case LOGIN:
         return {
           ...state,
           username: action.payload.username,
           token: action.payload.token,
         };
       case LOGOUT:
         return {
           username: null,
           token: null,
         };
       default:
         return initialState;
     }
   };
   ```

5. Initialize a redux store for the whole app. At the root of store folder, we add a `configStore.js` file and add below code.

   ```javascript
   import { createStore, combineReducers } from 'redux';
   import authReducer from './reducers/auth';

   const rootReducer = combineReducers({ auth: authReducer });

   export default () => {
     return createStore(rootReducer);
   };
   ```

6. In the `App.js` file to `import` the `configStore`, and put the configured store to the react-redux `Provider`.

   ```javascript

   ```

## Step 4: Debug Redux with [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension)

Install the corresponding `Redux Devtools Extension` browser plugin.

Install the redux-devtools-extension

```javascript
npm install --save redux-devtools-extension
```

For the case where you don't include other enhancers and middlewares, just use `devToolsEnhancer`:

```javascript
import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import authReducer from './reducers/auth';

const rootReducer = combineReducers({ auth: authReducer });

export default () => {
  return createStore(rootReducer, devToolsEnhancer());
};
```

For the case where you use other enhancers and middlewares like `redux-thunk`, use `applyMiddleware` and `composeWithDevTools`.

```javascript
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reducers/auth';

const rootReducer = combineReducers({ auth: authReducer });

export default () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );
};
```

### Other ways to support Redux `Devtools Extension` in react-native project.

For a basic Redux store simply add:

```diff
 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```

If you setup your store with middleware and enhancers, change:

```diff
  import { createStore, applyMiddleware, compose } from 'redux';

+ const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
+ const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
- const store = createStore(reducer, /* preloadedState, */ compose(
    applyMiddleware(...middleware)
  ));
```

### In more general way, use [`remote-redux-devtools`](https://github.com/zalmoxisus/remote-redux-devtools) to debug redux in the react-native project.
