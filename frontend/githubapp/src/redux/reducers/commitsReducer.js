const initialState = {
    commits: [],
    newCommit: {}

}

const commitsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'commits':
            return {
                ...state,
                commits: [...action.payload],
            }
        case 'newCommit':
            let newState = [...state.commits]
            newState.unshift(...action.payload)        
            return {
                ...state,
                 commits:newState              
            }

        default:
            return state
    }
}
export default commitsReducer