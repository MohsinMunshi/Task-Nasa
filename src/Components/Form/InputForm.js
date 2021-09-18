import React,{useState,useEffect} from 'react'
import {Container,TextField,Paper,Typography,Grid,Button,CircularProgress} from '@material-ui/core/';
import styles from './Styles'
import * as API from '../../API/'
import {useHistory} from 'react-router-dom'

const InputForm = () => {
    const classes = styles()

    const history = useHistory()

    const [id, setId] = useState("")
    const [randomId, setRandomId] = useState("")
    const [isLoading, setIsLoading] = useState("")

    useEffect(() => {

    }, []);

    const getRandomData = () =>{
        return API.getRandomData().then(({data})=>{
            const randomNo = Math.floor(Math.random() * (19))
            return data.near_earth_objects[randomNo].id
        })
    }
    
    const handleRandom = async () => {
        setIsLoading(true)
        const id = await getRandomData()
        console.log(id)
        history.push(`/random/${id}`)
        setIsLoading(false)
    }

    const handleClick = async () => {
        history.push(`/details/${id}`)
    }
    const handleChange = (e) => {
        setId(e.target.value)
    }

    return (
        <Container  component="main" maxWidth="xs" className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">
                    Search Asteroid
                </Typography>
                    <Grid container spacing={1}>
                        <TextField
                            id="outlined-basic"
                            fullWidth label="Asteroid ID"
                            variant="outlined"
                            onChange={handleChange}
                            name='id'
                        />
                        <Button
                            type="submit"
                            fullWidth variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleClick}
                            disabled={id !== '' ? false : true}
                        >
                            Submit
                        </Button>
                        <Button
                            fullWidth variant="contained"
                            className={classes.submit}
                            onClick={handleRandom}
                        >
                            {isLoading ? <CircularProgress /> : "Random Asteroid"}
                        </Button>
                    </Grid>
            </Paper>
        </Container>
    )
}

export default InputForm