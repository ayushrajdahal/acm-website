"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Timer from "@/components/ui/Timer";
import EventSection from "../EventsSection";

const events = [
  {
    name: "Bash Workshop",
    date: new Date("2025-01-21T23:00:00Z"), // 5 PM CST is 11 PM UTC
    zoomLink: "https://uno.zoom.us/j/82594180263",
  },
  {
    name: "Git Workshop",
    date: new Date("2025-01-23T23:00:00Z"), // 5 PM CST is 11 PM UTC
    zoomLink: "https://uno.zoom.us/j/86753001896",
  },
  {
    name: "Vim Tutorial",
    date: new Date("2025-01-28T23:00:00Z"), // 5 PM CST is 11 PM UTC
    zoomLink: "https://uno.zoom.us/j/88207502564",
  },
];

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const now = new Date();

    events.forEach((event) => {
      if (
        now >= event.date &&
        now <= new Date(event.date.getTime() + 75 * 60 * 1000)
      ) {
        router.push(event.zoomLink);
      } else {
        const timeout = event.date.getTime() - now.getTime();
        setTimeout(() => {
          router.push(event.zoomLink);
        }, timeout);
      }
    });
  }, [router]);

  return (
    <div className="App">
      <Timer />
      <EventSection />
    </div>
  );
}
