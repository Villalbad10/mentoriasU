import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk"
import { loginReducer } from "../reducers/loginReducer";
import { signupreducer } from "../reducers/signupReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
   loginStore: loginReducer,
   signUpStore: signupreducer
})

export const store = createStore(
   reducers,
   composeEnhancers(
      applyMiddleware(thunk)
   )
)