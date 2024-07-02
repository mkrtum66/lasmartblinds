import { combineReducers } from 'redux';
import { loadingReducer } from './reducers/loadingReducer';
import { teamReducer } from './reducers/teamReducer';
import { residentialReducer } from './reducers/residentialReducer';
import { commercialReducer } from './reducers/commercialReducer';
import authReducer from './reducers/authReducer';
import deleteImageReducer from './reducers/imageDeleteReducer';
import uploadImageReducer from './reducers/imageUploadReducer';
import { areasReducer } from './reducers/areasReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  team: teamReducer,
  residential: residentialReducer,
  commercial: commercialReducer,
  areas: areasReducer,
  auth: authReducer,
  uploadImage: uploadImageReducer,
  deleteImage: deleteImageReducer,
});

export default rootReducer;
