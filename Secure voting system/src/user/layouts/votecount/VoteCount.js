import React, {Component} from 'react'
import VoteCountDisplayContainer from "../../ui/voteCountDisplay/VoteCountDisplayContainer";

class VoteCount extends Component { //TODO: Complete this
    render() {
        return (
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1 pageContainer">
                        <h1>Vote Count</h1>
                        {/*<p>We've got your wallet information, simply input your name and your account is made!</p>*/}
                        <VoteCountDisplayContainer/>
                    </div>
                </div>
            </main>
        )
    }
}

export default VoteCount