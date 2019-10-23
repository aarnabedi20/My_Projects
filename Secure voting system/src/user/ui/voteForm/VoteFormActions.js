// import AuthenticationContract from '../../../../build/contracts/Authentication'
import store from '../../../store'
import {browserHistory} from 'react-router'
import {getCandidates} from "../../../util/candidates/getCandidateData";
import ElectionContract from '../../../../build/contracts/Election'

const contract = require('truffle-contract');

export const USER_VOTED = 'USER_VOTED';

function userVoted(user) { //TODO: Create reducer to deal with this event ??
    return {
        type: USER_VOTED,
        payload: user
    }
}

export function vote(choice) {
    let web3 = store.getState().web3.web3Instance;

    if (typeof web3 !== 'undefined') {
        return (dispatch) => {
            // const authentication = contract(AuthenticationContract); //TODO: Get the user token for the db, or just use their wallet id?
            const election = contract(ElectionContract);
            election.setProvider(web3.currentProvider);
            let electionInstance;

            web3.eth.getCoinbase((error, coinbase) => {
                if (error) console.error(error);

                election.deployed().then((instance) => {
                    electionInstance = instance;

                    electionInstance.vote(choice.value, {from: coinbase})
                        .then((result) => {
                            dispatch(userVoted({"choice": choice})); //TODO: Values too? -> Might not need this here because the only thing that needs updating is the count in another location.
                            return browserHistory.push('/voted'); //TODO: Do this? or to a vote count page
                            // Changed to remove dashboard link
                        })
                        .catch((result) => {
                            //If error then?
                        })
                })
            })
        }
    }
}

export function getOptions() {
    return getCandidates().then((results) => {
        return {
            options: results.map((candidate) => {
                return {
                    value: candidate.id.toString(),
                    label: candidate.name
                }
            })
        }
    })
}
