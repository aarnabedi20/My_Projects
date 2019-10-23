import {connect} from 'react-redux'
import VoteForm from './VoteForm'
import {vote} from "./VoteFormActions"

const mapStateToProps = (state, ownProps) => {
    return {
        choice: state.user.data.choice,
        values: state.user.data.values
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onVoteFormSubmit: (choice) => {
            event.preventDefault();
            dispatch(vote(choice))
        }
    }
};

const VoteFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VoteForm);

export default VoteFormContainer