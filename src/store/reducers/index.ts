import {combineReducers} from "redux";
import authReducer from "./authentication.reducer";

const rootReducer = combineReducers({
    authReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer