import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(theme=>({
    blue: {
        color:theme.pallette.primary.main,
        textAlign:'center',
        marginBottom:theme.spacing(3)
    },
    paper: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(6)
    },
    buttons: {
        marginTop: theme.spacing(6)
        
    }
}))

export default useStyles