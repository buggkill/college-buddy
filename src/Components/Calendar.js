import { Button } from "@mui/material";
import React from "react";


function Calendar({title,date,description}) {

  var newDate = date.slice(0,10) + "T09:00:00-07:00";

  console.log("the date is ===>>>>>>", newDate)

  var gapi = window.gapi;
  /* 
    Update with your own Client Id and Api key 
  */
  var CLIENT_ID =
    "909939538587-73prq6gnvupdrl1q82kof9a4qria93af.apps.googleusercontent.com";
  var API_KEY = "AIzaSyAZpo8iBWPx19jaLP6Og7OjPeRG9gKpORg";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const handleClick = () => {
    gapi.load("client:auth2", () => {
      console.log("loaded client");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
        plugin_name: "name"
      });

      gapi.client.load("calendar", "v3", () => console.log("bam!"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {

            console.log("inside then")
          var event = {
            summary: title,
            // location: "800 Howard St., San Francisco, CA 94103",
            description: description,
            start: {
              // "2022-05-28T09:00:00-07:00"
              dateTime: newDate,
              timeZone: "Asia/Kolkata",
            },
            end: {
              dateTime: newDate,
              timeZone: "Asia/Kolkata",
            },
            recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
            // attendees: [
            //   { email: "lpage@example.com" },
            //   { email: "sbrin@example.com" },
            // ],
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };

          console.log("event1====>>>>>>>", event);

          var request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });

          console.log("lol");

          request.execute((event) => {
            console.log("event2====>>>>>>>", event);
            window.open(event.htmlLink);
          });

          gapi.client.calendar.events
            .list({
              calendarId: "primary",
              timeMin: new Date().toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 10,
              orderBy: "startTime",
            })
            .then((response) => {
              const events = response.result.items;
              console.log("EVENTS: ", events);
            });
        }).catch((err)=> console.log("caught this error",err));

        console.log("lewl")
    });
  };

  return (

 <Button style={{fontWeight:"bold" }} onClick={handleClick} variant="contained" >
          Add To Calendar
</Button>
  );
}

export default Calendar;
