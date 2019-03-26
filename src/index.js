import ReactDOM from 'react-dom';
import React from 'react';
import Kennel from './components/Kennel';
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css";
// import { Provider } from 'react-redux';
// import rootReducer from './reducers';
// import { createStore } from 'redux';

// const store = createStore(rootReducer)

ReactDOM.render(
    // <Provider store={store}>
<Router>
    <Kennel />
</Router>
// </Provider>
, document.querySelector("#root"));