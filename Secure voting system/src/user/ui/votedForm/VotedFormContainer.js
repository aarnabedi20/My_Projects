import {connect} from 'react-redux'
import VotedForm from './VotedForm'

const mapStateToProps = (state, ownProps) => {
    return {
        candidates: state.user.data.candidate,
        pages: state.user.data.pages,
        loading: state.user.data.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const VotedFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VotedForm);

export default VotedFormContainer
