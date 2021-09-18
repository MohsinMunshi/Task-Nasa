import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper:{
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        width:'35vw'
    },
    text: {
        margin: theme.spacing(2, 1 , 0),
    },
    submit: {
        margin: theme.spacing(3, 1, 1),
    },
}));

export default useStyles