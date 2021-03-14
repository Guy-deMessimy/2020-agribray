//link component-store-actions
import { connect } from "react-redux";
import SampleForm from "../main";
import { reduxForm } from "redux-form/immutable";
import { formHasErrorsSelector, getFormErrorsSelector } from "./selectors";
import { formSubmitFailedAction, formSubmitSucceededAction } from "../actions";

SampleForm.defaultProps = {
  errors: {},
};

//transmit props on store and share with component
const mapStateToProps = (state) => ({
  formHasErrors: formHasErrorsSelector(state),
  errors: getFormErrorsSelector(state),
});

//as a connect(mapStateToProps, mapDispatchToprops inclus)
const SampleFormConnect = connect(
  mapStateToProps,
  null
)(
  reduxForm({
    destroyOnUnmount: false,
    form: "sampleForm",
    onSubmitFail: (errors, dispatch) => dispatch(formSubmitFailedAction()),
    onSubmit: (values) => values,
    onSubmitSuccess: (values, dispatch) =>
      dispatch(formSubmitSucceededAction(values)),
  })
  (SampleForm)
);

export default SampleFormConnect;
