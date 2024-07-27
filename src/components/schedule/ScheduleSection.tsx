"use client";
import React, { useState } from "react";
import ScheduleInfo from "./ScheduleInfo";
import { scheduleData } from "@/data/Data";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const ScheduleSection = () => {
  const [activeTab, setActiveTab] = useState<string>(scheduleData[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  return (
    <section className="rv-1-schedule rv-section-spacing">
      <div className="container">
        <div className="rv-1-section-heading text-center">
          <h6 className="rv-1-section__sub-title rv-text-anime">
            SCHEDULE DATES
          </h6>

          <h2 className="rv-1-section__title rv-text-anime">
            Conference Schedule
          </h2>
        </div>
        <nav>
          <div
            className="nav nav-tabs rv-1-schedule__tabs"
            id="rv-1-schedule-tab"
          >
            {scheduleData.map((tab, index) => (
              <DivAnimateXAxis duration={1.2 + 0.2 * index} key={tab.id}>
                <button
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <span className="title">{tab.title}</span>
                  <span className="sub-title">{tab.subTitle}</span>
                </button>
              </DivAnimateXAxis>
            ))}
          </div>
        </nav>
        <DivAnimateXAxis
          className="tab-content"
          id="rv-1-schedule-tab-content"
          position={80}
        >
          {scheduleData.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${
                activeTab === tab.id ? "show active" : ""
              }`}
              id={tab.id}
            >
              <ScheduleInfo />
            </div>
          ))}
        </DivAnimateXAxis>
      </div>
    </section>
  );
};

export default ScheduleSection;
