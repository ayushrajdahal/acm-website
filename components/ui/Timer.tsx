"use client";
import React from "react";

class Timer extends React.Component {
  state = {
    minutes: 0,
    seconds: 0,
    hours: 0,
    days: 0,
  };

  componentDidMount() {
    let date = new Date();
    // set the date to 21 january, 2025 5 PM CST
    date.setFullYear(2025, 0, 21);
    date.setHours(17);
    date.setMinutes(0);
    // date.setDate(date.getDate() + 2);
    let countDownDate = new Date(date).getTime();
    setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.setState({
        minutes: minutes,
        days: days,
        hours: hours,
        seconds: seconds,
      });
    }, 1000);
  }

  render() {
    const { minutes, seconds, hours, days } = this.state;
    return (
      <div className="flex flex-col items-center justify-center mb-8 mt-16">
        <h2 className="text-5xl font-semibold mb-4">Bash Workshop Starts In</h2>
        <h1 className="text-9xl font-bold mb-6">
          {days < 10 ? `${days}` : days}d {hours < 10 ? `0${hours}` : hours}h{" "}
          {minutes < 10 ? `0${minutes}` : minutes}m{" "}
          {seconds < 10 ? `0${seconds}` : seconds}s
        </h1>
      </div>
    );
  }
}

export default Timer;
