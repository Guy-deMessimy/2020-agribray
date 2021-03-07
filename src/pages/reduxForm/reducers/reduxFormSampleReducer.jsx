import { Map } from "immutable";
import * as formConst from "../actions/const";

const initialState = new Map({
  formHasErrors: false,
});

const reduxFormSampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case formConst.FORM_SUBMIT_FAILED:
      return state.set("formHasErrors", true);
    case formConst.FORM_SUBMIT_SUCCEEDED:
      return state.set("formHasErrors", false);
    default:
      return state;
  }
};

export default reduxFormSampleReducer;
