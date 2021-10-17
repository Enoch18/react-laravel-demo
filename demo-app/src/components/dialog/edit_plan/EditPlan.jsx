import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useEditPlan} from './useEditPlan';

const EditPlan = ({values, date:activity_date, setMessage}) => {
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
    } = useEditPlan(setMessage);

  return (
    <div>
      <br />
      <button onClick={() => handleClickOpen(values, activity_date)}>
        <i className="fa fa-edit"></i>
      </button><br /><br />

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
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-control" readOnly /><br />
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

export default EditPlan;