import { combineReducers } from "redux";

import { moneyReducer } from "./moneyReducer";

const reducers= combineReducers({
    totalMoney:moneyReducer
})

export default reducers