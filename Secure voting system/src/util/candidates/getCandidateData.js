import getWeb3 from "../web3/getWeb3";
import store from "../../store";
import ElectionContract from '../../../build/contracts/Election'

const contract = require('truffle-contract');

function getCandidate(electionInstance, id) {
    return new Promise((resolve, reject) => {
        electionInstance.candidates(id).then((candidate) => {
            resolve({
                id: candidate[0],
                name: candidate[1],
                voteCount: candidate[2]
            });
        })
    })
}


export function getCandidates() {
    return new Promise((resolve, reject) => {
        getWeb3.then((results) => {
            let web3 = store.getState().web3.web3Instance;
            if (typeof web3 !== 'undefined') {
                const election = contract(ElectionContract);
                election.setProvider(web3.currentProvider);
                let electionInstance;

                election.deployed().then((instance) => {
                    electionInstance = instance;
                    return electionInstance.candidatesCount();
                }).then((candidatesCount) => {
                    const promises = [];

                    for (let i = 1; i <= candidatesCount; i++) {
                        promises.push(getCandidate(electionInstance, i));
                    }

                    resolve(Promise.all(promises));
                })
            } else reject();
        });
    });
}