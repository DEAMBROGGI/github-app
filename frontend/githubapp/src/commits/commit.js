import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import Moment from 'react-moment';

export default function Commit(props) {
    const { commit, owner, repo } = props
    const [newCommit, setNewCommit] = useState({backgroundColor:"white", color:"black"})

    function linkUrl() {
        let splitUrl = commit.url.split("/")
        return splitUrl[splitUrl.length - 1]
    }

    useEffect(() => {
        if (commit.new) {
            setNewCommit({backgroundColor:"lightgreen", color:"black"})
        }
    }, [commit.new])

    const html_url = "https://github.com/" + owner + "/" + repo + "/commit/" + linkUrl()
    
    return (
        <div >
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={ newCommit }
                    
                >
                    <Typography
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginX: "15px",
                            width:"30%"
                        }}>
                        <Moment format="D MMM YYYY">
                            {commit.committer.date ? commit.committer.date : commit.timestamp}
                        </Moment>
                        <Moment format="HH:MM:SS">
                            {commit.committer.date ? commit.committer.date : commit.timestamp}
                        </Moment>
                    </Typography>
                    <Typography
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginX: "15px",
                            width:"40%"
                        }}
       
                    >{commit.author.name}</Typography>
                    <Typography
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginX: "15px",
                        width:"30%"
                    }}
                    >Commit: ...{linkUrl().substring(linkUrl().length -6)}</Typography>
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
                    <Typography>
                        Message: {commit.message}
                    </Typography>
                    <Typography
                    >
                        URL: <Link  href={html_url} target="_blank">{linkUrl()}</Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
