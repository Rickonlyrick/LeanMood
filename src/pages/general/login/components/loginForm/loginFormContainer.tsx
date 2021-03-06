import {connect} from 'react-redux';
import {IAppState} from '../../../../../reducers';
import {LoginCredentials} from '../../../../../model/login/loginCredentials';
import {LoginFormComponent} from './loginForm';
import {loginContentChangedStartedAction} from '../../actions/loginContentChanged';
import {loginRequestStartedAction} from '../../actions/loginRequest';

const mapStateToProps = (state: IAppState) => ({
  loginCredentials: state.login.editingLogin,
  loginErrors: state.login.loginErrors,
});

const mapDispatchToProps = (dispatch) => ({
  updateLoginInfo: (viewModel: LoginCredentials, fieldName: string, value: string) =>
    (dispatch(loginContentChangedStartedAction(viewModel, fieldName, value))),
  loginRequest: (loginCredentials: LoginCredentials) => (dispatch(loginRequestStartedAction(loginCredentials))),
});

export const LoginFormContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormComponent);
