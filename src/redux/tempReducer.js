import { combineReducers } from 'redux';
import { loadingReducer } from './reducers/loadingReducer';
import { teamReducer } from './reducers/teamReducer';
import { portfolioReducer } from './reducers/portfolioReducer';
import authReducer from './reducers/authReducer';
import deleteImageReducer from './reducers/imageDeleteReducer';
import uploadImageReducer from './reducers/imageUploadReducer';
import { areasReducer } from './reducers/areasReducer';
import { productsReducer } from './reducers/productsReducer';

export const tempReducer = combineReducers({
  loading: loadingReducer,
  team: teamReducer,
  portfolio: portfolioReducer,
  products: productsReducer,
  areas: areasReducer,
  auth: authReducer,
  uploadImage: uploadImageReducer,
  deleteImage: deleteImageReducer,
});
