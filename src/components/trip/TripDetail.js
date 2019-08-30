import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Image, List, Button } from "semantic-ui-react";
import Axios from "axios";
import trip1 from "../../img/trip1.JPG";

const TripDetail = props => {
  const [trip, setTrip] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    Axios.get(`https://lambda-guidr.herokuapp.com/api/trip/${id}`).then(res => {
      console.log(res);
      setTrip(res.data);
    });
  }, [id]);

  return (
    <Grid columns={2} centered>
      <Grid.Column width={8}>
        <Container>
          <h2>{trip.title}</h2>
          <p>{trip.description}</p>
          <List>
            <List.Item>Date of Trip: {trip.date}</List.Item>
            <List.Item>Duration of Trip: {trip.duration} days</List.Item>
          </List>
          <Button as={Link} to={`/trips/${id}/edit`}>
            Edit Trip
          </Button>
        </Container>
      </Grid.Column>
      <Grid.Column width={8}>
        <Container>
          <Image src={trip1} />
        </Container>
      </Grid.Column>
    </Grid>
  );
};

export default TripDetail;
