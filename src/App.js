import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/Nav"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Elements from './Elements'

export default function App() {
    const [time, setTime] = useState({
        seconds: 0,
        minutes: 0,
        hours: 0,
    });

    const [times, setTimes] = useState({
        secondss: 0,
        minutess: 0,
        hourss: 0,
    });

    const [isAboutTimerOn, setIsAboutTimerOn] = useState(false)
    const [isTimeTimerOn, setIsTimeTimerOn] = useState(false)
    const about = 'about'
    const contact = 'contact'

    const advanceTime = () => {
        setIsAboutTimerOn(true)
        setTimeout(() => {
            let nSeconds = time.seconds;
            let nMinutes = time.minutes;
            let nHours = time.hours;

            nSeconds++;

            if (nSeconds > 59) {
                nMinutes++;
                nSeconds = 0;
            }
            if (nMinutes > 59) {
                nHours++;
                nMinutes = 0;
            }
            if (nHours > 24) {
                nHours = 0;
            }

            isAboutTimerOn && setTime({ seconds: nSeconds, minutes: nMinutes, hours: nHours });
        }, 1000);
        console.log(time)
        console.log(about)
    };

    const startTime = () => {
        advanceTime()
    }

    const stopTime = () => {
        setIsAboutTimerOn(false)
    }

    const About = ({ time, startTime, stopTime }) => {

        useEffect(() => {
            startTime()

            return () => {
                stopTime()
            }

        }, [startTime, stopTime])

        return (
            <div>
                <p>
                    {`
                ${time.hours < 10 ? '0' + time.hours : time.hours} :
                ${time.minutes < 10 ? '0' + time.minutes : time.minutes} :
                ${time.seconds < 10 ? '0' + time.seconds : time.seconds}
              `}
                </p>
            </div>
        );
    }

    const advanceTimes = () => {
        setIsTimeTimerOn(true)
        setTimeout(() => {
            let nSecondss = times.secondss;
            let nMinutess = times.minutess;
            let nHourss = times.hourss;

            nSecondss++;

            if (nSecondss > 59) {
                nMinutess++;
                nSecondss = 0;
            }
            if (nMinutess > 59) {
                nHourss++;
                nMinutess = 0;
            }
            if (nHourss > 24) {
                nHourss = 0;
            }

            isTimeTimerOn && setTimes({ secondss: nSecondss, minutess: nMinutess, hourss: nHourss });
        }, 1000);
        console.log(times)
        console.log(contact)
    };

    const startTimes = () => {
        advanceTimes()
    }

    const stopTimes = () => {
        setIsTimeTimerOn(false)
    }

    const Contact = ({ times, startTimes, stopTimes }) => {

        useEffect(() => {
            startTimes()

            return () => {
                stopTimes()
            }

        }, [startTimes, stopTimes])

        return (
            <div>
                <p>
                    {`
                ${times.hourss < 10 ? '0' + times.hourss : times.hourss} :
                ${times.minutess < 10 ? '0' + times.minutess : times.minutess} :
                ${times.secondss < 10 ? '0' + times.secondss : times.secondss}
              `}
                </p>
            </div>
        );
    }

    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/about" exact component={() => <About startTime={startTime} stopTime={stopTime} time={time}/>}/>
                    <Route path="/contact" exact component={() => <Contact startTimes={startTimes} stopTimes={stopTimes} times={times}/>}/>
                    <Route path="/component" exact component={() => <Elements />}/>
                </Switch>
            </div>
        </Router>
    );
}
