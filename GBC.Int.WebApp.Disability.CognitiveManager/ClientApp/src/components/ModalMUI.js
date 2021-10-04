import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    root3: {
        '& .MuiButtonBase-root': {
            margin: theme.spacing(1),
        }
    },
}));

const ModalMUI = (props) => {
    const classes = useStyles();

    return (
        <div>
            
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.show1}
                onClose={props.onHide1}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.show1}>
                    <div className={classes.paper}>
                        <div className="p-20">
                            <AppBar position="static">
                                <Toolbar>
                                    <Typography variant="h6" className="text-center" style={{ "flexGrow": "1" }}>{props.header}</Typography>
                                </Toolbar>
                            </AppBar>
                        </div>
                        <div className="p-20">
                            <Paper elevation={3} id="transition-modal-description">{props.children}</Paper>
                        </div>
                        <div>
                            <AppBar position="static">
                                <Toolbar>
                                    <div className={classes.root3} style={{ "text-align": "center", "flexGrow": "1" }}>
                                        <Button variant="outlined" color="inherit" className=" col-sm-2 " id="btnYes" onClick={props.operation}>{props.footer.button1}</Button>
                                        <Button variant="outlined" color="inherit" className="col-sm-2" id="btnNo" onClick={() => { props.onHide1() }}>{props.footer.button2}</Button>
                                    </div>
                                </Toolbar>
                            </AppBar>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
export default ModalMUI