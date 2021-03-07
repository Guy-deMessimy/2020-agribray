import { combineReducers } from "redux-immutable";
import { reducer as reduxFormReducer } from "redux-form/immutable";
import reduxFormSampleReducer from "../pages/reduxForm/reducers/reduxFormSampleReducer";

const rootReducer = combineReducers({
  form: reduxFormReducer,
  reduxFormSampleReducer,
});
export default rootReducer;
