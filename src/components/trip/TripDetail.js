import React, { useState, useEffect } from "react";
import Axios from "axios";

const TripDetail = props => {
  const [trip, setTrip] = useState({});

  useEffect(() => {
    Axios.get(
      `https://lambda-guidr.herokuapp.com/api/trip/${props.match.params.id}`
    ).then(res => {
      console.log(res);
      setTrip(res.data);
    });
  }, []);

  return (
    <div>
      <p>{trip.title}</p>
      <p>{trip.date}</p>
      <p>{trip.type}</p>
      <p>{trip.duration}</p>
      <p>{trip.description}</p>
    </div>
  );
};

export default TripDetail;
