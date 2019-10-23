import {connect} from 'react-redux'
import VoteCountDisplay from './VoteCountDisplay'

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

const VoteCountDisplayContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VoteCountDisplay);

export default VoteCountDisplayContainer
