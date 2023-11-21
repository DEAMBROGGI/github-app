import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link'
import { useSelector } from "react-redux";

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function ListRepo() {
    const infoRepos = useSelector(store => store.appReducer.userRepo)
    const thisRepo = useSelector(store => store.appReducer.user.repo)

    function RepoList() {
        return (
            <Grid item xs={12} style={{}}>
                <List dense={true}
                    style={{
                        height: 'auto',
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexWrap: "wrap",
                        backgroundColor: "white",
                        borderRadius: 10,
                        boxShadow: "-7px 8px 18px -5px rgba(0,0,0,0.75)",
                       

                    }}>
                    {infoRepos ? infoRepos.map(repo =>
                        repo.name !== thisRepo &&
                        <ListItem
                            style={{
                                width: "33%",
                            }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                style={{ overflow: "clip" }}
                                primary={<Link href={repo.html_url} target="_blank">{repo.name}</Link>}
                                secondary={repo.language}
                            />
                        </ListItem>

                    ) : " "}
                </List>
            </Grid>
        )
    }


    return (
        <>
            {/*CONTAINER SMALL*/}
            <Grid container spacing={2}
                sx={{ display: { xs: "flex", md: "flex", lg: "none", xl: "none" } }}
                style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0px",
                    paddingRight: "16px",
                    boxShadow: "-7px 8px 18px -5px rgba(0,0,0,0.75)",
                   
                }}>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            Other Repositories
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-star",
                            alignItems: "flex-start",
                            marginX: "15px",

                        }}
                    >
                        {RepoList()}
                    </AccordionDetails>
                </Accordion>
            </Grid>

            {/*CONTAINER LARGE */}
            <Grid container spacing={2}
                sx={{ display: { xs: "none", md: "none", lg: "flex", xl: "flex" } }}
                style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0px", 

                }}>
                <Typography variant="h6" component="div">
                    Other Repositories
                </Typography>
                {RepoList()}
            </Grid>
        </>
    );
}