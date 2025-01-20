"use client";
import React from "react";

interface TimerState {
  minutes: number;
  seconds: number;
  hours: number;
  days: number;
}

class Timer extends React.Component<object, TimerState> {
  interval: NodeJS.Timeout | undefined;

  state: TimerState = {
    minutes: 0,
    seconds: 0,
    hours: 0,
    days: 0,
  };

  componentDidMount() {
    const targetDate = new Date("2025-01-21T23:00:00Z"); // 5 PM CST is 11 PM UTC
    this.updateTimer(targetDate);
    this.interval = setInterval(() => this.updateTimer(targetDate), 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  updateTimer(targetDate: Date) {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      if (this.interval) {
        clearInterval(this.interval);
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });
  }

  render() {
    const { minutes, seconds, hours, days } = this.state;
    return (
      <div className="flex flex-col items-center justify-center mb-8 mt-16">
        <h2 className="text-5xl font-semibold mb-4">Bash Workshop Starts In</h2>
        <h1 className="text-9xl font-bold mb-6">
          {days < 10 ? `${days}` : days}d {hours < 10 ? `${hours}` : hours}h{" "}
          {minutes < 10 ? `${minutes}` : minutes}m{" "}
          {seconds < 10 ? `${seconds}` : seconds}s
        </h1>
      </div>
    );
  }
}

export default Timer;
