import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDeletePlan } from './useDeletePlan';

const DeletePlan = ({id, setMessage}) => {
  const { 
    open, 
    handleClickOpen, 
    handleClose,
    deletePlan
    } = useDeletePlan(setMessage);

  return (
    <>
      <br />
      <button onClick={handleClickOpen} style={{height: 30, marginTop: 23, marginLeft: 10}}>
        <i className="fa fa-trash"></i> 
      </button><br /><br />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete?"}
        </DialogTitle>

        <DialogContent style={{display: 'flex', flexDirection: 'row'}}>
            <button className="btn btn-danger" onClick={() => deletePlan(id)}>Yes</button>&nbsp;
            <button className="btn btn-success" onClick={handleClose}>No</button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DeletePlan;