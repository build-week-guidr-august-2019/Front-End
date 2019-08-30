import React, { useState, useEffect } from "react";
import { Container, Grid, Image, List } from "semantic-ui-react";
import Axios from "axios";
import trip1 from "../../img/trip1.JPG";

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
    <Grid columns={1} centered>
      <Grid.Column width={8}>
        <Container>
          <h2>{trip.title}</h2>
          <Image src={trip1} />
          <p>{trip.description}</p>
          <List>
            <List.Item>Date of Trip: {trip.date}</List.Item>
            <List.Item>Duration of Trip: {trip.duration} days</List.Item>
          </List>
        </Container>
      </Grid.Column>
    </Grid>
  );
};

export default TripDetail;
