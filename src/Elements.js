import React, { useState, useEffect, useRef } from "react";
import './Elements.css'

function Elements() {
  const [isShown, setIsShown] = useState(false);
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0
  });

  const funRef = useRef(null);
  const component = 'component'

  useEffect(() => {
    let isCancelled = false;

    if (isShown) {
      funRef.current = setInterval(() => {
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

        !isCancelled &&
          setTime({ seconds: nSeconds, minutes: nMinutes, hours: nHours });
      }, 1000);
    }

    return () => {
      //final time:
      console.log(time);
      console.log(component);
      isCancelled = true;
    };
  }, [isShown, time]);
  return (
    <div className="App">
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        Hover over me!
      </button>
      {isShown && (
        <div>
          <p>
            {`
            ${time.hours < 10 ? "0" + time.hours : time.hours} :
            ${time.minutes < 10 ? "0" + time.minutes : time.minutes} :
            ${time.seconds < 10 ? "0" + time.seconds : time.seconds}
          `}
          </p>
        </div>
      )}
    </div>
  );
}

export default Elements;
