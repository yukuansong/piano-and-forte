import "./appointmentTimeslot.css";
import { Link } from "react-router-dom";

import { useState } from "react";

function AppointmentTimeslot(prop) {
  const [timeDay, setTimeDay] = useState("");
  const onChange = (e) => {
    setTimeDay(e.target.value);
  };

  const data = [
    {
      name: "John Smith",
      date: "2023-05-17",
      PM: ["3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"],
      AM: ["9:00 AM", "9:30 AM", "10:00 AM"],
    },
    {
      name: "Peter William",
      date: "2023-05-18",
      PM: ["2:00 PM", "3:30 PM", "4:00 PM"],
      AM: ["8:00 AM", "9:30 AM", "10:00 AM"],
    },
    {
      name: "Jennifer Lou",
      date: "2023-05-19",
      PM: ["1:00 PM", "3:30 PM", "4:00 PM"],
      AM: ["7:00 AM", "9:30 AM", "10:00 AM"],
    },
  ];
  
  const getDayOfWeek = (date) => {
    const dayOfWeek = new Date(date).getDay() + 1;

    return isNaN(dayOfWeek)
      ? null
      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek];
  };

  console.log("prop:  " + prop.date_am_pm.date + "  " + prop.date_am_pm.am_pm);
  const showAm =
    prop.date_am_pm.am_pm === "AM" || prop.date_am_pm.am_pm === "AMPM";
  const showPm =
    prop.date_am_pm.am_pm === "PM" || prop.date_am_pm.am_pm === "AMPM";

  return (
    <div className="appointment-timeslot-container">
      <div className="appointment-timeslot-previous">&laquo; Previous</div>
      <div className="appointment-timeslot-firstdate">
        {getDayOfWeek(data[0].date)} {data[0].date.substring(5)}
      </div>
      <div className="appointment-timeslot-seconddate">
        {getDayOfWeek(data[1].date)} {data[1].date.substring(5)}
      </div>
      <div className="appointment-timeslot-thirddate">
        {getDayOfWeek(data[2].date)} {data[2].date.substring(5)}
      </div>
      <div className="appointment-timeslot-next">Next &raquo;</div>
      {showAm && (
        <div className="right-align appointment-timeslot-firstdate-am">
          {data[0].AM.map((element, index) => {
            const uniqueId = data[0].date + " " + element;
            return (
              <div className="each-timeslot" key={index}>
                <input
                  type="radio"
                  onChange={onChange}
                  name="timeDay"
                  value={uniqueId}
                  checked={timeDay === uniqueId}
                  id={uniqueId}
                />
                <label htmlFor={uniqueId}>{element}</label>
              </div>
            );
          })}
        </div>
      )}
      {showPm && (
        <div className="right-align appointment-timeslot-firstdate-pm">
          {data[0].PM.map((element, index) => {
            const uniqueId = data[0].date + " " + element;
            return (
              <div className="each-timeslot" key={index}>
                <input
                  type="radio"
                  onChange={onChange}
                  name="timeDay"
                  value={uniqueId}
                  checked={timeDay === uniqueId}
                  id={uniqueId}
                />
                <label htmlFor={uniqueId}>{element}</label>
              </div>
            );
          })}
        </div>
      )}
      {showAm && (
        <div className="right-align appointment-timeslot-seconddate-am">
          {data[1].AM.map((element, index) => {
            const uniqueId = data[1].date + " " + element;
            return (
              <div className="each-timeslot" key={index}>
                <input
                  type="radio"
                  onChange={onChange}
                  name="timeDay"
                  value={uniqueId}
                  checked={timeDay === uniqueId}
                  id={uniqueId}
                />
                <label htmlFor={uniqueId}>{element}</label>
              </div>
            );
          })}
        </div>
      )}
      {showPm && (
        <div className="left-align appointment-timeslot-seconddate-pm">
          {data[1].PM.map((element, index) => {
            const uniqueId = data[1].date + " " + element;
            return (
              <div className="each-timeslot" key={index}>
                <input
                  type="radio"
                  onChange={onChange}
                  name="timeDay"
                  value={uniqueId}
                  checked={timeDay === uniqueId}
                  id={uniqueId}
                />
                <label htmlFor={uniqueId}>{element}</label>
              </div>
            );
          })}
        </div>
      )}
      {showAm && (
        <div className="left-align appointment-timeslot-thirddate-am">
          {data[2].AM.map((element, index) => {
            const uniqueId = data[2].date + " " + element;
            return (
              <div className="each-timeslot" key={index}>
                <input
                  type="radio"
                  onChange={onChange}
                  name="timeDay"
                  value={uniqueId}
                  checked={timeDay === uniqueId}
                  id={uniqueId}
                />
                <label htmlFor={uniqueId}>{element}</label>
              </div>
            );
          })}
        </div>
      )}
      {showPm && (
        <div className="left-align appointment-timeslot-thirddate-pm">
          {data[2].PM.map((element, index) => {
            const uniqueId = data[2].date + " " + element;
            return (
              <div className="each-timeslot" key={index}>
                <input
                  type="radio"
                  onChange={onChange}
                  name="timeDay"
                  value={uniqueId}
                  checked={timeDay === uniqueId}
                  id={uniqueId}
                />
                <label htmlFor={uniqueId}>{element}</label>
              </div>
            );
          })}
        </div>
      )}

      <Link
        to="/studentContact"
        className="appointment-timeslot-next-button-link"
      >
        <button className="appointment-timeslot-next-button">Next</button>
      </Link>

      {console.log(" time of day : " + timeDay)}
    </div>
  );
}

export default AppointmentTimeslot;
