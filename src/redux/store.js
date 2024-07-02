import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { tempReducer } from './tempReducer';

const store = createStore(tempReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
