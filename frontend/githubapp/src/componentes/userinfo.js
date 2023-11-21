import React from "react"
import { Grid, Typography } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import { useSelector } from "react-redux";
import ListRepo from "./listrepos";
import Link from '@mui/material/Link';

export default function UserPanel() {
    const infoUser = useSelector(store => store.appReducer.userInfo)
    const user = useSelector(store => store.appReducer.user)

    return (
        <>
            {infoUser ?

                <Grid container sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    padding: "5px",
                    margin:"0px"
                }}>
                    <Grid item xs={12} sm={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                            padding: "5px"
                        }}
                    >
                        <Avatar
                            alt={infoUser.login}
                            src={infoUser.avatar_url}
                            sx={{
                                width: 280,
                                height: 280,
                                margin: "10px"
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                            padding: "5px"
                        }}>
                        <Typography variant="h3"><Link color="inherit" style={{textDecoration:"none"}} href={"https://github.com/"+user.owner} target="_blank">{infoUser.login}</Link></Typography>
                        <Typography variant="h4"><Link color="inherit" style={{textDecoration:"none"}}href={"https://github.com/"+user.repo} target="_blank">{user.repo}</Link></Typography>
                        <Typography variant="p" color="grey">{infoUser.name}</Typography>
                    </Grid>
                    <Grid xs={12}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                            padding: "5px"
                        }}>
                        <ListRepo />
                    </Grid>
                </Grid>

                : ""
            }
        </>

    )
}