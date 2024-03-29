import {connect} from 'react-redux'
import LoginButton from './LoginButton'
import {loginUser} from '../loginButton/LoginButtonActions'

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginUserClick: (event) => {
            event.preventDefault();

            dispatch(loginUser())
        }
    }
};

const LoginButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginButton);

export default LoginButtonContainer
