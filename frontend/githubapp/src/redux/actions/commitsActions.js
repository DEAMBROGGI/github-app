import axios from 'axios';
import io from "socket.io-client";

const commitsActions = {
    getCommits: (owner, repo) => {

        return async (dispatch, getState) => {
            const res = await axios.post(`http://localhost:5000/commits/repoCommits`, { owner, repo })
            const commits = []

            res.data.forEach(element => {
                commits.push(element.commit)
            })
            dispatch({
                type: 'commits',
                payload: commits
            });
        }

    },
    commentsSocketConection: () => { 
        const socket = io.connect("http://localhost:5000"); 
        return async (dispatch, getState) => { 
            socket.on('newCommit', ( response ) => { //RECIBE EL EMIT Y EL PARAMETRO 
                //CREAR NUEVA PROP de STORE PARA PUSH DE EVENTO    
                console.log(response)
            }
            )
        }
    }
}
export default commitsActions;