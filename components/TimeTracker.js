import { useState } from 'react';

const TimeTracker = ({ taskIndex, logTime }) => {
    const [time, setTime] = useState('');

    const handleLogTime = () => {
        logTime(taskIndex, time);
        setTime('');
    };

    return (
        <div>
            <input type="number" placeholder="Time in hours" value={time} onChange={(e) => setTime(e.target.value)} />
            <button onClick={handleLogTime}>Log Time</button>
        </div>
    );
};

export default TimeTracker;
