import React, {Component} from 'react'
import LoginButtonContainer from '../loginButton2/LoginButtonContainer'

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            uuid: ''
        }
    }

    onInputChange(event) {
        this.setState({name: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.name.length < 2) {
            return alert('Please fill in your name.')
        }

        this.createUuid();
        this.download("token", this.encryptUuid(this.state.uuid));

        this.props.onSignUpFormSubmit(this.state.name)
    }

    download(filename, text) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }

    createUuid() {
        const uuidv1 = require('uuid/v1');
        this.state.uuid = uuidv1();
    }

    encryptUuid(inToken) {
        var CryptoJS = require("crypto-js");
        var token = CryptoJS.AES.encrypt(inToken, this.state.name);
        return token;
    }

    decrypt() {
        var CryptoJS = require("crypto-js");
        var bytes  = CryptoJS.AES.decrypt(this.encryptUuid(this.state.uuid).toString(), this.state.name);
        var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        return plaintext;
    }
    render() {
        return (
            <div>
                <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
                    <fieldset>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" value={this.state.name} onChange={this.onInputChange.bind(this)}
                            placeholder="Name"/>
                        <span className="pure-form-message">This is a required field.</span>

                        <br/>

                        <button type="submit" className="pure-button pure-button-primary">Sign Up</button>
                    </fieldset>
                </form>
                <h3>Already signed up?</h3>
                <p> Log in below: </p>
                <ul className="pure-menu-list">
                <LoginButtonContainer/>
                </ul>
            </div>
        )
    }
}

export default SignUpForm
