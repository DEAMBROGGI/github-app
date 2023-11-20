const initialState = {
    commit: [],

}

const commitsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'commits':
            return {
                ...state,
                commits: [...action.payload],
            }

        default:
            return state
    }
}
export default commitsReducer