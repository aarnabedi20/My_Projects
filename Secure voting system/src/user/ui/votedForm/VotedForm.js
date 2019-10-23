import React, {Component} from 'react'
import {Link} from 'react-router'
import {getOptions} from "./VotedFormActions";

import ReactTable from "react-table"
import "react-table/react-table.css"

class VoteCountDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            candidates: this.props.candidates || [],
            pages: null,
            loading: true
        }
    }

    render() {

        return (
            <div>
                <br/>
                <Link to="/count" className="pure-button">Vote Count</Link>
            </div>
        )
    }
}

export default VoteCountDisplay
