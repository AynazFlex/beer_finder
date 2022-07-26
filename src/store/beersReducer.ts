import { ThunkAction } from "redux-thunk";
import beersApi, { beer, beers } from "../api/beersApi";
import { InferActions, RootState } from "./store";

type Actions = InferActions<typeof actions>;

const actions = {
  setBeers: (items: beers[]) =>
    ({ type: "SET_BEERS", payload: { items, fetching: false } } as const),
  addBeers: (items: beers[]) => ({ type: "ADD_BEERS", items } as const),
  loadMoreBeers: () =>
    ({ type: "LOAD_MORE_BEER", payload: { isLoadingMore: true } } as const),
  fetchBeers: (fetching: boolean) =>
    ({ type: "FETCH_BEERS", payload: { fetching } } as const),
  openBeer: (openBeer: beer[]) =>
    ({ type: "OPEN_BEER", payload: { openBeer, fetching: false } } as const),
};

type ThunkActionType = ThunkAction<void, RootState, unknown, Actions>;

export const setBeersThunk =
  (serch_text: string): ThunkActionType =>
  async (dispatch) => {
    try {
      dispatch(actions.fetchBeers(true));
      const data = await beersApi.getBeers(serch_text);
      if(data.length === 0) throw new Error("there is no such beer");
      dispatch(actions.setBeers(data));
    } catch (err) {
      alert(err);
      dispatch(actions.fetchBeers(false));
    }
  };

export const loadMorebeersThunk = (): ThunkActionType => async (dispatch) => {
  try {
    dispatch(actions.loadMoreBeers());
    const data = await beersApi.loadMoreBeers();
    dispatch(actions.addBeers(data));
  } catch (err) {
    alert(err);
  }
};

export const setBeerThunk =
  (id: string): ThunkActionType =>
  async (dispatch) => {
    try {
    dispatch(actions.fetchBeers(true));
    const data = await beersApi.getBeer(id);
    dispatch(actions.openBeer(data));
    } catch (err) {
      alert(err);
      dispatch(actions.fetchBeers(false));
    }
  };

const initialState: initialState = {
  items: [],
  fetching: false,
  openBeer: [],
  isLoadingMore: false,
};

type initialState = {
  items: beers[];
  fetching: boolean;
  openBeer: beer[];
  isLoadingMore: boolean;
};

const beersReducer = (state = initialState, action: Actions): initialState => {
  switch (action.type) {
    case "SET_BEERS":
    case "FETCH_BEERS":
    case "LOAD_MORE_BEER":
    case "OPEN_BEER": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "ADD_BEERS": {
      return {
        ...state,
        items: [...state.items, ...action.items],
        isLoadingMore: false,
      };
    }
    default:
      return state;
  }
};

export default beersReducer;
