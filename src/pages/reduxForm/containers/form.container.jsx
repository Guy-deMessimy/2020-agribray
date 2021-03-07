//link component-store-actions
import { connect } from "react-redux";
import SampleForm from "../main";
import { reduxForm } from "redux-form/immutable";
import { formHasErrorsSelector, getFormErrorsSelector } from "../selectors";
import { formSubmitFailedAction, formSubmitSucceededAction } from "../actions";

SampleForm.defaultProps = {
  errors: {},
};

//donner les  propriétés au store avec le selector / les rend à main
const mapStateToProps = (state) => ({
  formHasErrors: formHasErrorsSelector(state),
  errors: getFormErrorsSelector(state),
});

//equivalent de connect(mapStateToProps, mapDispatchToprops inclus) = on connecte et on passe les créateurs d'action en meme temps
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
