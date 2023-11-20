import React, { useEffect } from 'react'
import commitsActions from '../redux/actions/commitsActions';
import { useDispatch, useSelector } from 'react-redux';
import {Commit} from './commit';


export const CommitsContainer = () => {
    const dispatch = useDispatch()
    const commits = useSelector(store => store.commitsReducer.commits)
    console.log(commits)

    const owner = "DEAMBROGGI"
    const repo = "github-app"

    useEffect(() => {
        dispatch(commitsActions.getCommits(owner,repo))
    },[])
    //eslint-disable-next-line

    return (
        <Commit/>
    )
}