import AuthenticationContract from '../../../../build/contracts/Authentication.json'
import {loginUser} from '../loginButton/LoginButtonActions'
import store from '../../../store'

const contract = require('truffle-contract');

export function signUpUser(name) { //TODO: Validate National Insurance Number
    let web3 = store.getState().web3.web3Instance;

    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {
        return (dispatch) => {
            // Using truffle-contract we create the authentication object.
            const authentication = contract(AuthenticationContract);
            authentication.setProvider(web3.currentProvider);

            // Declaring this for later so we can chain functions on Authentication.
            let authenticationInstance;

            // Get current ethereum wallet.
            web3.eth.getCoinbase((error, coinbase) => {
                // Log errors, if any.
                if (error) {
                    console.error(error);
                }

                authentication.deployed().then((instance) => {
                    authenticationInstance = instance;

                    // Attempt to sign up user.
                    authenticationInstance.signup(name, {from: coinbase})
                        .then((result) => {
                            // If no error, login user.
                            return dispatch(loginUser())
                        })
                        .catch((result) => {
                            // If error...
                        })
                })
            })
        }
    } else {
        console.error('Web3 is not initialized.');
    }
}
