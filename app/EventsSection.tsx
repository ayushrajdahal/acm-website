"use client";
import React, { useState } from "react";
import { events } from "./content/events.json";
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
    if (!isNaN(parsedDate.getTime())) {
      return true; // Check if the parsed date is valid
    }

    // Check for "Spring {year}" or "Fall {year}"
    const seasonYearRegex = /^(Spring|Fall) \d{4}$/;
    return seasonYearRegex.test(dateString);
  };

  const getSeasonDate = (seasonString: string): Date => {
    const [season, year] = seasonString.split(" ");
    const month = season === "Spring" ? 4 : 10; // May for Spring, November for Fall
    return new Date(parseInt(year), month, 1);
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
        if (isValidDate(event.date)) {
          const eventDate = getSeasonDate(event.date) || new Date(event.date);
          return eventDate < today;
        }
        return false;
      }

      // Include future dates, today's date, and non-date elements
      if (isValidDate(event.date)) {
        const eventDate = getSeasonDate(event.date) || new Date(event.date);
        return eventDate >= today;
      }
      return true;
    });

    if (activeFilter === "past") {
      // Sort past events by date, most recent first
      return filteredEvents.sort((a, b) => {
        const dateA = getSeasonDate(a.date) || new Date(a.date);
        const dateB = getSeasonDate(b.date) || new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
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
