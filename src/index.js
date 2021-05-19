import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App/App';
import Firebase,{FirebaseContext} from "./utils/Firebase";

ReactDOM.render(
  <React.StrictMode>
      <FirebaseContext.Provider value={new Firebase()}>
          <App />
      </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);