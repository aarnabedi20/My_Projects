import React, {Component} from 'react'
import VotedFormContainer from '../../ui/votedForm/VotedFormContainer'

class SignUp extends Component {
    render() {
        return (
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1 pageContainer">
                        <h1>Vote Submitted</h1>
                        <p>You have successfully submitted your vote.</p>
                        <VotedFormContainer/>
                    </div>
                </div>
            </main>
        )
    }
}

export default SignUp