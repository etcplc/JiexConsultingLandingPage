import { scheduleInfoData } from "@/data/Data";
import React from "react";

const ScheduleInfo = () => {
  return (
    <>
      {scheduleInfoData.map((item) => (
        <div className="rv-1-schedule-conf" key={item.id}>
          <div className="rv-1-schedule-conf__author">
            <div className="rv-1-schedule-conf__author-info">
              <h5 className="rv-1-schedule-conf__author-name">{item.name}</h5>
              <span className="rv-1-schedule-conf__author-label">
                {item.label}
              </span>
            </div>
            <div className="rv-1-schedule-conf__author-img">
              <img src={item.img} alt="Author Image" />
            </div>
          </div>

          <div className="rv-1-schedule-conf__details">
            <h4 className="rv-1-schedule-conf__name">
              <a href="#" className="rv-text-anime">
                {item.title}
              </a>
            </h4>
            <ul className="rv-1-schedule-conf__infos">
              <li>
                <i className="fa-solid fa-location-dot"></i> {item.location}
              </li>
              <li>
                <i className="fa-solid fa-clock"></i> {item.time}
              </li>
            </ul>
          </div>

          <a href="#" className="rv-1-schedule-conf__btn">
            View Details <i className="fa-light fa-arrow-right"></i>
          </a>
        </div>
      ))}
    </>
  );
};

export default ScheduleInfo;
