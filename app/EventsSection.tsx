"use client";
import React, { useState, useEffect } from "react";
import { events } from "./lists.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const EventSection = () => {
  const [activeFilter, setActiveFilter] = useState<"past" | "future">("future");
  type Event = {
    id: number;
    title: string;
    description: string;
    date: string; // Dates are either valid date strings or descriptive text like "Spring 2025"
    location: string;
    actionLabel: string;
  };

  const isValidDate = (dateString: string): boolean => {
    const parsedDate = new Date(dateString);
    return !isNaN(parsedDate.getTime()); // Check if the parsed date is valid
  };

  const filterEvents = (
    events: Event[],
    activeFilter: "past" | "future"
  ): Event[] => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date

    const filteredEvents = events.filter((event) => {
      if (activeFilter === "past") {
        // Include only valid dates in the past
        return isValidDate(event.date) && new Date(event.date) < today;
      }

      // Include future dates, today's date, and non-date elements
      return !isValidDate(event.date) || new Date(event.date) >= today;
    });

    if (activeFilter === "past") {
      // Sort past events by date, most recent first
      return filteredEvents.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }

    return filteredEvents;
  };

  const filteredEvents = filterEvents(events, activeFilter);

  return (
    <>
      <section id="events" className="mb-32 scroll-mt-24">
        <h2 className="text-3xl font-medium mb-16 text-center">Events</h2>
        <div className="flex justify-center mb-12 space-x-4">
          {["future", "past"].map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter as "past" | "future")}
              className={`${
                activeFilter === filter
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } capitalize`}
            >
              {filter} Events
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event, index) => (
            <Card
              key={index}
              className="border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <CardHeader className="border-b border-gray-50 bg-gray-50">
                <CardTitle className="text-lg font-medium text-center">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="mr-2" size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2" size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default EventSection;
