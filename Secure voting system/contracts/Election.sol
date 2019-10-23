pragma solidity ^0.4.0;


contract Election {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    struct Voter {
        address account;
        uint voteChoice;
        bool hasVoted;
    }

    mapping(uint => Candidate) public candidates;
    uint public candidatesCount;

    mapping(address => Voter) public voters;

    event VotedEvent(uint indexed _candidateId);

    modifier onlyValidCandidates(uint _candidateId) {
        require(_candidateId > 0 && _candidateId <= candidatesCount);
        _;
    }

    function Election() public {
        addCandidate("Theresa May");
        addCandidate("Donald Trump");
        addCandidate("Barack Obama");
        addCandidate("Lord Buckethead");
        addCandidate("Kim Jong Un");
        addCandidate("Vladimir Putin");
        addCandidate("Xi Jinping");
    }

    function vote(uint _candidateId) public
    onlyValidCandidates(_candidateId) {
        if (voters[msg.sender].hasVoted)
            candidates[voters[msg.sender].voteChoice].voteCount--;

        addVoter(msg.sender, _candidateId);
        candidates[_candidateId].voteCount++;
        VotedEvent(_candidateId);
    }

    function addCandidate(string _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function addVoter(address _address, uint _candidateId) private {
        voters[msg.sender] = Voter(msg.sender, _candidateId, true);
    }
}
