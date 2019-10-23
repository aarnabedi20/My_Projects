import React, {Component} from 'react'
import {getOptions} from "./VoteCountDisplayActions";

import ReactTable from "react-table"
import "react-table/react-table.css"
import "../../../css/site.css"

class VoteCountDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            candidates: this.props.candidates || [],
            pages: null,
            loading: true
        }
    }

    fetchOptions(state, instance) { //TODO: Move to Actions?
        this.setState({loading: true});

        getOptions().then(candidates => {
            this.setState({
                candidates: candidates,
                pages: 1,
                loading: false
            });
        })
    }

    render() {
        const {candidates, pages, loading} = this.state;

        return (
            <ReactTable
                columns={[
                    {
                        Header: "#",
                        accessor: "id"
                    },
                    {
                        Header: "Name",
                        accessor: "name"
                    },
                    {
                        Header: "Votes",
                        accessor: "voteCount"
                    }
                ]}
                data={candidates}
                pages={pages}
                loading={loading}
                onFetchData={this.fetchOptions.bind(this)}
                defaultPageSize={10}
            />
        )
    }
}

export default VoteCountDisplay
