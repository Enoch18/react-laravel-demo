import React, {useState} from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const useAddPlan = (setMessage) => {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [activity, setActivity] = useState('');
    const queryClient = useQueryClient();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const add_plan = useMutation('plans', async(data) => {
        const res = await axios.post('/api/v1/day-plan', data);
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
            
            setMessage('Added Successfully');

            setTimeout(() => {
                setMessage('');
            }, 3000);
        }
    });

    const addPlan = (e) => {
        e.preventDefault();
        add_plan.mutate({date:date, time:time, activity:activity});
    }

    return {
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

export {useAddPlan};