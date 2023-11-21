import axios from 'axios';

const appActions = {
    getUser: (owner) => {

        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:5000/user/`+owner)

            dispatch({type:"userInfo", payload:res.data})
        }

    },
    getRepo: (owner) => {

        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:5000/user/`+owner+"/repos")

            dispatch({type:"userRepo", payload:res.data})
        }

    },

}
export default appActions;