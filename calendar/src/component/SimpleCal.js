
import './simpleCal.css';
import React, { useState } from 'react';
import { Calendar } from 'react-calendar';

const SimpleCal = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }
    const ignoredErrors = [
        /act\(\.\.\.\) is not supported in production builds of React/,
    ];

    const consoleError = global.console.error;
    global.console.error = (...args) => {
        if (ignoredErrors.some((el) => el.test(args[0]))) {
            return console.log(...args);
        }
        return consoleError(...args);
    };

    return <div className='calendar'>
        <Calendar showWeekNumbers={true} onChange={onChange} value={date} />
    </div>
}

export default SimpleCal;