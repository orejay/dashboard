import React, { useState, useRef, useEffect } from "react";

const Countdown = ({ time }) => {
  const Ref = useRef(null);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / 1000 / 60 / 60 / 24);

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (time) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(time);
    if (total >= 0) {
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date(time);

    deadline.setSeconds(deadline.getSeconds());
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <div className="flex">
      <h2 className={days > 1 ? `mr-2` : `hidden`}>
        {days}
        {` days`}
      </h2>
      <h2>
        {timer}
        {hours > 0
          ? ` hour(s)`
          : minutes > 0
          ? ` minute(s)`
          : seconds > 0
          ? ` second(s)`
          : ``}
      </h2>
    </div>
  );
};

export default Countdown;
