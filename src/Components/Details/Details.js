import React, {useEffect, useState} from 'react';
import {useParams,useLocation,useHistory} from 'react-router-dom'
import {Container,Paper,Typography,Grid,Button,CircularProgress} from '@material-ui/core/';

import * as API from "../../API";
import styles from "./Styles";

const Details = () => {
    const classes = styles()

    const {id} = useParams()
    const location = useLocation()
    const history = useHistory()
    const path = location.pathname.split("/")[1]

    const [asteroidData, setAsteroidData] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        AsteroidData()
    }, []);

    const AsteroidData = () =>{
        API.getAsteroidData(id).then(({data})=>{
            setAsteroidData(data)
            setIsLoading(false)
        })
    }

    return (
        <Container  component="main" maxWidth="xs" className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                {
                    isLoading ? <CircularProgress />
                        :
                        <>
                            <Typography variant="h5">
                                Asteroid Details
                            </Typography>
                            <Grid container spacing={1}>
                                <Typography variant="h3" class={classes.text}>
                                    Name : {asteroidData.name}
                                </Typography>
                                <Typography variant="h3" class={classes.text}>
                                    Nasa JPL URL : <a target="_blank" href={asteroidData.nasa_jpl_url} rel="noreferrer"> Click Here </a>
                                </Typography>
                                {path !== "random" ?<Typography variant="h3" class={classes.text}>
                                    Is Potentially Hazardous Asteroid
                                    : {asteroidData.is_potentially_hazardous_asteroid ? "Yes" : "No"}
                                </Typography> : null}
                            </Grid>
                            <Button
                                fullWidth variant="contained"
                                className={classes.submit}
                                onClick={()=>{history.push("/")}}
                                    >
                                Home
                            </Button>
                        </>
                }
            </Paper>
        </Container>
    );
};

export default Details;
