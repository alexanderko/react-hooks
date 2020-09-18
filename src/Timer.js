import React, { useEffect, useRef, useState } from 'react';

function useTimer(duration) {
    const [secondsLeft, setSecondsLeft] = useState(duration);
    const secondsRef = useRef();
    secondsRef.current = secondsLeft;
    const shouldCountDown = !!secondsLeft;

    useEffect(() => {
        if (!shouldCountDown) return;
        const interval = setInterval(() => {
            setSecondsLeft(secondsRef.current - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [shouldCountDown])

    return secondsLeft;
}

export function Timer(props) {
    const secondsLeft = useTimer(props.duration);
    const time = `${Math.floor(secondsLeft / 60)}:${secondsLeft % 60}`
    return (
        <div>Timer {props.name}: {time}</div>
    )
}