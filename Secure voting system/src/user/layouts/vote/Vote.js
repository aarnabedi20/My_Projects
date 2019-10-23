import React, {Component} from "react";
import VoteFormContainer from '../../ui/voteForm/VoteFormContainer'

class Vote extends Component {
    render() {
        return (
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1 pageContainer">
                        <h1>Vote</h1>
                        {/*<p>We've got your wallet information, simply input your name and your account is made!</p>*/}
                        <VoteFormContainer/>
                    </div>
                </div>
            </main>
        )
    }
}

export default Vote