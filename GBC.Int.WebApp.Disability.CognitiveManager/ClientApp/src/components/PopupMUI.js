import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button, Dialog, DialogTitle, DialogActions, DialogContent } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    
    root3: {
        '& .MuiButtonBase-root': {
            margin: theme.spacing(1),
        }
    },
}));

const PopupMUI = (props) => {
    const classes = useStyles();

    return (
        <div>

            <Dialog onClose={props.onHide1} aria-labelledby="customized-dialog-title" open={props.show1}>
                <DialogTitle id="customized-dialog-title" onClose={props.onHide1}>
                    <AppBar position="static">
                        <Toolbar>
                            <div className={classes.root3} style={{ "text-align": "center", "flexGrow": "1" }}>
                                <Typography variant="h6">{props.header}</Typography>
                            </div>
                        </Toolbar>
                    </AppBar>
                </DialogTitle>
                <DialogContent dividers>
                    <div style={{"padding":"15px"}}>
                        <Paper elevation={3} id="transition-modal-description">{props.children}</Paper>
                    </div>
                </DialogContent>
                <DialogActions style={{
                    "padding": "35px"
                }}>
                    <AppBar position="static">
                        <Toolbar>
                            <div className={classes.root3} style={{"text-align": "center", "flexGrow": "1" }}>
                        <Button variant="outlined" color="inherit" className=" col-sm-2 " id="btnYes" onClick={props.operation}>{props.footer.button1}</Button>
                        <Button variant="outlined" color="inherit" className="col-sm-2" id="btnNo" onClick={() => { props.onHide1() }}>{props.footer.button2}</Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </DialogActions>
            </Dialog>


        </div>
    );
}
export default PopupMUI