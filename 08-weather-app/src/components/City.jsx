import React from "react";

function City({ city }) {
  if (!city) {
    return <div>Şehir bulunamadı.</div>;
  }
  return (
    <div>
      <div>
        <h1>{city.name}</h1>
        <h1> {city.main.temp}</h1>
        <h1> {city.weather[0].main}</h1>
      </div>
    </div>
  );
}

export default City;
