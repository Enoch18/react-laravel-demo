import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useAddPlan } from './useAddPlan';

const AddPlan = ({setMessage}) => {
  const {open, 
      handleClickOpen, 
      handleClose,
      date,
      setDate,
      time,
      setTime,
      activity,
      setActivity,
      addPlan
    } = useAddPlan(setMessage);

  return (
    <div>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        <i className="fa fa-plus"></i> Add Plan
      </Button><br /><br />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add Plan"}
        </DialogTitle>

        <DialogContent>
            <form onSubmit={addPlan}>
              <div className="row">
                <div className="col-md-6">
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-control" required /><br />
                </div>

                <div className="col-md-6">
                  <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="form-control" required /><br />
                </div>

                <div className="col-md-12">
                  <textarea value={activity} onChange={(e) => setActivity(e.target.value)} className="form-control" required></textarea><br />
                </div>

                <div className="col-md-12">
                  <button className="btn btn-success">Save</button>
                </div>
              </div>
            </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddPlan;