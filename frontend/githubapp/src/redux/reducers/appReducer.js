const initialState = {
    showNav: false,
    snackbar: {
        view: false,
        message: '',
        success: true
    },
    user: {
        owner: "DEAMBROGGI",
        repo: "github-app"
    },
    userInfo: null,
    userRepo:null
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'showNav':
            return {
                ...state,
                showNav: action.payload,
            }
        case 'message':
            return {
                ...state,
                snackbar: action.payload,
            }
        case 'userInfo':
            return {
                ...state,
                userInfo: action.payload,
            }
        case 'userRepo':
            return {
                ...state,
                userRepo: action.payload,
            }

        default:
            return state
    }
}
export default appReducer