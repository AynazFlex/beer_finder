import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import beersReducer from "./beersReducer";

const reducers = combineReducers({
  beers: beersReducer,
});

const store = legacy_createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type Properties<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActions<T extends { [key: string]: (...args: any[]) => any }> =
  ReturnType<Properties<T>>;

export default store;
