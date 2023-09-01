import React, { useState } from 'react'
import { useEffect } from 'react';

const CountDown = (props) => {
    const { leftRaces } = props

    const [days, setDays] = useState(10)
    const [hours, setHours] = useState(10)
    const [mins, setMins] = useState(10)
    const [secs, setSecs] = useState(10)
    const [values, setValues] = useState([])

    const [session, setSession] = useState(4)
    const [cnt, setCnt] = useState("")



    let interval;

    const countDownTimer = () => {
        try {

            if (values.length != 0 ) {
                let utcTime = new Date(values[0].events[session].date + " " + values[0].events[session].time);
                let targetTime = utcTime.toLocaleString('en-IN', { hour12: false, timeZone: 'Asia/Kolkata' });
                let year = targetTime.split(" ")[0].split("/")[2];
                let month = targetTime.split(" ")[0].split("/")[1];
                let day = targetTime.split(" ")[0].split("/")[0];
                let hours = targetTime.split(" ")[1].split(":")[0];

                let mins = targetTime.split(" ")[1].split(":")[1];
                let secs = targetTime.split(" ")[1].split(":")[2];
                let countDownDate = new Date(`${month} ${day},${year} ${hours}:${mins}:${secs}`);


                interval = setInterval(() => {
                    let now = new Date().getTime();
                    let distance = countDownDate - now;
                    let days = Math.floor(distance / (24 * 60 * 60 * 1000));
                    let hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
                    let mins = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60));
                    let secs = Math.floor(distance % (60 * 1000) / (1000));
                    if (distance < 0) {
                        clearInterval(interval.current);
                    } else {
                        setDays(days);
                        setHours(hours);
                        setMins(mins);
                        setSecs(secs);
                    }
                });
            }
        } catch (error) {
            console.log("error", error);
        }

    }

    useEffect(() => {
        setValues(leftRaces)
        countDownTimer()


    }, [leftRaces, session, values]);




    return (
        <div className='mt-3 m-2 countdown-child container '>


            <div className="alert alert-dark" role="alert">
                Next Race in -
            </div>

            <div className='uprace'>    {leftRaces[0].Name} </div>


            <ul className='timer-ul container p-2'>
                <li>  <span className='times ' >  {days}  </span>  Days </li>
                <li>  <span className='times' >  {hours} </span> Hours</li>
                <li>  <span className='times' > {mins} </span> Minutes</li>
                <li>  <span className='times' > {secs} </span> Seconds Left</li>

            </ul>




        </div>
    )
}

export default CountDown
