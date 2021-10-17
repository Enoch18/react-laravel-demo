import React, {useState} from 'react';
import Plan from '../../components/plan/Plan';
import AddPlan from '../../components/dialog/add_plan/AddPlan';

const Index = () => {
    const [message, setMessage] = useState('');
    
    return (
        <div className="container">
            <AddPlan setMessage={setMessage} />

            {message !== '' && (
                <div className="alert alert-success">
                    {message}
                </div>
            )}

            <h4>Day Plans</h4>

            <Plan setMessage={setMessage} />
        </div>
    )
}

export default Index;