import {Provider} from "react-redux";
import {createRoot} from 'react-dom/client';

import "./assets/scss/style.scss";
import "./assets/scss/icons.scss";
import "./assets/scss/extras.scss";
import './index.css';

import App from './App';
import store from "./store/store";
import reportWebVitals from './reportWebVitals';



const AppRoot = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<AppRoot/>);
reportWebVitals();
