import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const useDeletePlan = (setMessage) => {
    const [open, setOpen] = React.useState(false);
    const queryClient = useQueryClient();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const delete_plan = useMutation('plans', async (id) =>{
        const res = await axios.delete('/api/v1/day-plan/' + id);
        return res.data;
    }, {
        onMutate: async() => {
            await queryClient.cancelQueries('plans');
        },

        onSuccess: () => {
            queryClient.invalidateQueries('plans');
            setMessage('Deleted Successfully');
            setTimeout(() => {
                setMessage('');
            }, 3000);
            setOpen(false);
        }
    });

    const deletePlan = (id) => {
        window.event.preventDefault();
        delete_plan.mutate(id);
    }

    return {
        open, 
        handleClickOpen, 
        handleClose,
        deletePlan
    };
}

export {useDeletePlan};