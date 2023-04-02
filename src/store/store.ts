import {configureStore} from "@reduxjs/toolkit";
import {createLogger} from "redux-logger";
import rootReducer from './reducers';
const logger = createLogger({collapsed: true});

const loggerMiddleware = () => {
    if (process.env.NODE_ENV === 'development') return [logger];
    return [];
};

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware  => getDefaultMiddleware().concat(...loggerMiddleware()),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;