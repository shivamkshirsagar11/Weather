import React from "react";
import OneDayCard from "./OneDayCard";
export default function DailyWeatherCard({
  weatherData: { daily },
  weatherData: {
    current: { name },
  },
}) {
  console.log(daily);
  return (
    <div className="d-flex justify-content-center p-5">
      <div
        id="carouselExampleControls"
        className="carousel slide text-center"
        data-bs-ride="carousel"
        style={{ width: "25rem" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <OneDayCard data={daily.list[1]} city={name} />
          </div>
          <div className="carousel-item">
            <OneDayCard data={daily.list[2]} city={name} />
          </div>
          <div className="carousel-item">
            <OneDayCard data={daily.list[3]} city={name} />
          </div>
          <div className="carousel-item">
            <OneDayCard data={daily.list[4]} city={name} />
          </div>
          <div className="carousel-item">
            <OneDayCard data={daily.list[5]} city={name} />
          </div>
          <div className="carousel-item">
            <OneDayCard data={daily.list[6]} city={name} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
