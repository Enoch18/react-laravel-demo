import React, {useState} from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const useEditPlan = (setMessage) => {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [id, setId] = useState('');
    const [activity, setActivity] = useState('');
    const queryClient = useQueryClient();

    const handleClickOpen = (values, activity_date) => {
        setOpen(true);
        setDate(activity_date);
        setTime(values.time);
        setId(values.id);
        setActivity(values.activity);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const edit_plan = useMutation('plans', async(data) => {
        const res = await axios.put('/api/v1/day-plan/' + data.id, data);
        return res.data;
    }, {
        onMutate: () => {
            setOpen(false);
        },

        onSuccess: () => {
            queryClient.invalidateQueries('plans');

            setTime('');
            setDate('');
            setActivity('');
            
            setMessage('Edited Successfully');

            setTimeout(() => {
                setMessage('');
            }, 3000);
        }
    });

    const addPlan = (e) => {
        e.preventDefault();
        edit_plan.mutate({id: id, date:date, time:time, activity:activity});
    }

    return {
        id,
        setId,
        open, 
        handleClickOpen, 
        handleClose,
        date,
        setDate,
        time,
        setTime,
        activity,
        setActivity,
        addPlan
    };
}

export {useEditPlan};