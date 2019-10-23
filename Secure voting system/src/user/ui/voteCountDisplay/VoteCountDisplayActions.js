import {getCandidates} from "../../../util/candidates/getCandidateData";

export function getOptions() {
    return getCandidates().then((results) => {
        return results.map(candidate => {
            return {
                id: candidate.id.toString(),
                name: candidate.name,
                voteCount: candidate.voteCount.toString()
            }
        })
    })
}
