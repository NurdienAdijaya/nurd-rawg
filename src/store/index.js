import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import rootSaga from "./saga/index";
import rootreducer from "./reducer";
//* enable/disable devtools
// import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootreducer,
  //* enable devtools
  // composeWithDevTools(applyMiddleware(sagaMiddleware))

  //* disable devtools
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
