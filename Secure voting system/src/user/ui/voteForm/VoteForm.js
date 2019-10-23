import React, {Component} from 'react'
import {Async} from 'react-select'
import {getOptions} from "./VoteFormActions";

import 'react-select/dist/react-select.css'
import "../../../css/site.css"

class VoteForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            choice: this.props.choice
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onVoteFormSubmit(this.state.choice)
    }

    onInputChange = (selectedOption) => {
        this.setState({choice: selectedOption});
    };

    render() {
        return (
            <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                    <Async
                        name="candidatesSelect"
                        value={this.state.choice}
                        searchable={false}
                        onChange={this.onInputChange}
                        loadOptions={getOptions}
                    />

                    <br/>

                    <button type="submit" className="pure-button pure-button-primary">Vote</button>
                </fieldset>
            </form>
        )
    }
}

export default VoteForm

/*
<Select
        name="form-field-name"
        value={value}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />
 */