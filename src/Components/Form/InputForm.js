import React,{useState} from 'react'
import {Container,TextField,Paper,Typography,Grid,Button} from '@material-ui/core/';
import styles from './Styles'

const Form = () => {
    const [id, setId] = useState("")
    const classes = styles()

    const handleSubmit = async (e) => {
        
    }
    const handleChange = (e) => {
        setformData({...formData,[e.target.name]: e.target.value})
    }

    return (
        <Container  component="main" maxWidth="xs" className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">
                    Search Asteroid
                </Typography>
                <form id="myForm" className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        <TextField
                            id="outlined-basic"
                            fullWidth label="Show Name"
                            variant="outlined"
                            onChange={handleChange}
                            name='name'
                        />
                        <Button
                            type="submit"
                            fullWidth variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Container>

    )
}

export default Form