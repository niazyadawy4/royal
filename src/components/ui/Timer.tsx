import React, { useState, useEffect } from 'react';

const Timer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        } else {
            // If the countdown is finished
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const formatNumber = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className='flex space-x-4 ms-[85px]'>
            <div>
                <span className='flex flex-col'>
                    <span className="font-medium text-xs">Days</span>
                    <span className='font-bold text-[32px]'>{formatNumber(timeLeft.days)}</span>
                </span>
            </div>
            <div className='text-hoverButton text-4xl mt-3'>:</div>
            <div>
                <span className='flex flex-col'>
                    <span className="font-medium text-xs">Hours</span>
                    <span className='font-bold text-[32px]'>{formatNumber(timeLeft.hours)}</span>
                </span>
            </div>
            <div className='text-hoverButton text-4xl mt-3'>:</div>
            <div>
                <span className='flex flex-col'>
                    <span className="font-medium text-xs">Minutes</span>
                    <span className='font-bold text-[32px]'>{formatNumber(timeLeft.minutes)}</span>
                </span>
            </div>
            <div className='text-hoverButton text-4xl mt-3'>:</div>
            <div>
                <span className='flex flex-col'>
                    <span className="font-medium text-xs">Seconds</span>
                    <span className='font-bold text-[32px]'>{formatNumber(timeLeft.seconds)}</span>
                </span>
            </div>
        </div>
    );
};

export default Timer;
