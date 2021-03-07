import * as formConst from "../actions/const";

export const formSubmitSucceededAction = (value) => ({
  type: formConst.FORM_SUBMIT_SUCCEEDED,
});

export const formSubmitFailedAction = (value) => ({
  type: formConst.FORM_SUBMIT_FAILED,
});
