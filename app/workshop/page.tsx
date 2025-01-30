"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Timer from "@/components/ui/Timer";
import EventSection from "../EventsSection";

const events = [
  {
    name: "Advanced Bash Workshop",
    date: new Date("2025-02-04T23:00:00Z"), // 5 PM CST is 11 PM UTC
    zoomLink: "", // TODO: add zoom link
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
