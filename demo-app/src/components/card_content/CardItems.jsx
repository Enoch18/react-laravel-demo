import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeletePlan from '../dialog/confirm_delete/DeletePlan';
import EditPlan from '../dialog/edit_plan/EditPlan';

const CardItems = ({plan, setMessage, date}) => {
    return (
        <React.Fragment>
            <CardContent style={{padding: 5}}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <b>{plan.time}</b>
                </Typography>

                <div className="row">
                    <div className="col-md-6">
                        {plan.activity}
                    </div>

                    <div className="col-md-6">
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <EditPlan values={{id: plan.id, time: plan.time, activity: plan.activity}} date={date} setMessage={setMessage} />
                            <DeletePlan id={plan.id} setMessage={setMessage} />
                        </div>
                    </div>
                </div>
            </CardContent>
        </React.Fragment>
    )
}

export default CardItems;