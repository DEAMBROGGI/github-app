import React, { useEffect } from 'react'
import commitsActions from '../redux/actions/commitsActions';
import { useDispatch, useSelector } from 'react-redux';
import Commit from './commit';
import {
    Grid,
    Typography
} from '@mui/material';

export const CommitsContainer = () => {
    const dispatch = useDispatch()
    const commits = useSelector(store => store.commitsReducer.commits)
    const user = useSelector(store => store.appReducer.user)

    const { owner, repo } = user

    useEffect(() => {
        dispatch(commitsActions.getCommits(owner, repo))
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        console.log(commits)
    }, [commits])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} margin={1} >
                {commits.length > 0 ?
                    <>
                        <Typography variant="h6" component="div" paddingY={1} >Commits List</Typography>
                        <div style={{
                            borderRadius: 10,
                            overflow: "hidden",
                            boxShadow: "-7px 8px 18px -5px rgba(0,0,0,0.75)",
                            // maxHeight: "calc(100vh + 260px)",
                            // overflowY: "auto"

                        }}>
                            {commits.map((commit, index) =>
                                <Commit commit={commit} key={index} owner={owner} repo={repo} />
                            )
                            }
                        </div>
                    </> : " "
                }
            </Grid>
        </Grid>
    )
}