import {useQuery} from 'react-query';
import axios from 'axios';

const usePlan = () => {
    const {data:plans, status:plans_status} = useQuery('plans', async() => {
        const res = await axios.get('/api/v1/day-plan');
        return res.data;
    });

    return {plans, plans_status};
}

export {usePlan};