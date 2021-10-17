import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {usePlan} from './usePlan';
import CardItems from '../card_content/CardItems';

 const OutlinedCard = ({setMessage}) => {
    const {plans, plans_status} = usePlan();

    plans_status === 'success' && console.log(plans.data.length)

    return (
        <div>
            {plans_status === 'success' && (
                <>
                    {plans.data.map(plan => (
                        <React.Fragment key={plan.id}>
                            <h5>{new Date(plan.attributes.date).toDateString()}</h5>
                            <div className="row">
                                {plan.attributes.activities.map((activity, index) => (
                                    <div className="col-md-6" key={index}>
                                        <Box sx={{ minWidth: 275 }}>
                                            <Card variant="outlined" style={{marginTop: 10}}>
                                                <CardItems plan={activity} date={plan.attributes.date} setMessage={setMessage} />
                                            </Card>
                                        </Box>
                                    </div>
                                ))}
                            </div><hr /><br />
                        </React.Fragment>
                    ))}
                </>
            )}
        </div>
    );
}

export default OutlinedCard;
