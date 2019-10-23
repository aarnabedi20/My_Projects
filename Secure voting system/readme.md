# Voting System

## Git practices
Make sure you are familiar with git and its functionality. To start working on the code base, create a branch and work from there, then do a merge request one the code works. This allows you to commit only to your branch without affecting other branches and the main code base. Once the feature is complete, only then you do a merge-request to the main branch and make sure it does not break any code. You are responsible for your own code, it will not be approved for merging until the code is fixed.

1. Create new branch
2. Commit your code to that new branch
3. Write your unit tests
4. Request a merge once the feature is complete
5. Any broken code is your responsibility and will not be merged until fixed.

## Front-End
Currently the skeleton uses Twitter's bootstrap framework to produce the page. Feel free to add other frameworks as required, just note that it is unnecessary to import another bootstrap.js file as I have already imported it for use. Front-end source code can be found in election/src.

## Back-End
The backend is written using solidity in `contracts/Election.sol` & `contracts/Authentication.sol`. If you wish, you may run the back-end only with the truffle console (please read up on truffle's documentation).

Unit tests are written in `test/election.js`. Please make sure to write your unit test within this file to test your code(this is required for your report so do it else we'd just not get any marks).

## Database
Because the blockchain itself is the database. The structs built within the solidity code act as the "tables" within a traditional dbms. Hence all forms of read, write, populating of databases is done within solidity. Code can be found in `election/contracts/Election.sol`. Please read up on blockchain architecture to tackle the database because blockchain **IS** the database.

Unit tests are written in `test/election.js`. Please make sure to write your unit test within this file to test your code(this is required for your report so do it else we'd just not get any marks).



## Dependencies
Install the following dependencies to run and compile the projects.
- Node.js: https://nodejs.org
    - for event tracking etc
- Truffle: http://truffleframework.com/
    - framework to make life easier
- Ganache: http://truffleframework.com/ganache/
    - ganache lets you run tests with multiple test accounts and tools for debugging
- Metamask: https://metamask.io/
    - note that this does not work with safari (macOS users will have to set their default browser settings to chrome/firefox/opera)

## Installation
**Step 1** - Clone Project (via ssh or https)
- SSH
`git clone git@gitlab.com:NormanTan/cm2305-group-project.git`

OR

- HTTPS
`git clone https://gitlab.com/NormanTan/cm2305-group-project.git`

**Step 2** - Install dependencies in the project
```
$ cd <project folder>
$ npm install
```

**Step 3** - Run Ganache
Open the Ganache GUI client which will start a local blockchain instance.

## Compilation
```
$ truffle migrate --reset
```

Because of the blockchain architecture, any contract you deploy cannot be changed. The only way to update the code base is to deploy a new contract with the command above and reset the status.

## Metamask Configuration
- unlock metamask with a password you created and save the seed phrase somewhere safe.
- connect metamask to your local Ethereum blockchain provided by Ganache from the top left. (usually https://localhost:7545)
- import an account provided by Ganache via private key (private keys can be revealed in ganache by clicking on the key icon)
- if transactions within metamask fail, reset your account by opening the metamask menu, clicking the top right button, settings, then scroll down to the bottom and click "Reset Account"

## Deploy Front-End App
```
npm run dev
```

Note that this command will launch your default browser. Hence, set your default browser to the one that you installed Metamask on.
