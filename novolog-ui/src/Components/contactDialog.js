import React, { useEffect, useState } from 'react'
import '../Styles/dialog.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { text } from '../const';

export const ContactDialog = ({ isShow = false, onClose = null }) => {
    const [name, setName] = useState();
    const [contactPhone, setContactPhone] = useState();
    const [email, setEmail] = useState();
    const [show, setShow] = useState()

    useEffect(() => {
        setShow(isShow)
    }, [])

    const handleName = (e) => {
        setName(e?.target?.value)
    };
    const handlePhone = (e) => {
        setContactPhone(e?.target?.value)
    };
    const handleEmail = (e) => {
        setEmail(e?.target?.value)
    };

    const handleClose = () => {
        onClose({ name, contactPhone, email })
    }
    const handleCancel = () => {
        onClose({})
    }

    return (
        <Dialog open={isShow} onClose={handleClose} className="dialogContainer">
            <DialogTitle>{text.contact_dialog_title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {text.contact_dialog_details}
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label={text.contact_dialog_name}
                    type="name"
                    fullWidth
                    variant="standard"
                    onChange={handleName}
                    inputProps={{className:'dialogTextField'}}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="phone"
                    label={text.contact_dialog_phone}
                    type="phone"
                    fullWidth
                    variant="standard"
                    onChange={handlePhone}
                    inputProps={{className:'dialogTextField'}}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label={text.contact_dialog_email}
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={handleEmail}
                    inputProps={{className:'dialogTextField'}}
                />
            </DialogContent>
            <DialogActions className='dialogButtonContainer'>
                <Button onClick={handleCancel}>{text.cancel_button}</Button>
                <Button onClick={handleClose}>{text.send_button}</Button>
            </DialogActions>
        </Dialog>
    );
}