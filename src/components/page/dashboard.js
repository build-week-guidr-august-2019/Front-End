import React, { useState, useEffect } from "react";
import { Button, Container, Grid, Image, Header } from "semantic-ui-react";
import trip1 from "../../img/trip1.JPG";
import Axios from "axios";
import { Link } from "react-router-dom";

function Dashboard(props) {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    Axios.get("https://lambda-guidr.herokuapp.com/api/user/trips").then(res => {
      console.log(res);
      setTrips(res.data.trips);
    });
  }, []);

  return (
    <div className="dashboard-container">
      <Container>
        <p className="intro-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
      <div className="trip-list">
        <h1>Your Trips</h1>
        {trips.map(trip => {
          if (trips.indexOf(trip) % 2 === 0) {
            return (
              <Grid className="trip1" key={trip.id}>
                <Grid.Column width={8}>
                  <Image as={Link} to={`/trips/${trip.id}`} src={trip1} />
                </Grid.Column>
                <Grid.Column width={8}>
                  <a href={`/trips/${trip.id}`}>
                    <Header as="h2">{trip.title}</Header>
                  </a>
                  <p className="short-description">{trip.shortDescription}</p>
                  <Button
                    as={Link}
                    to={`/trips/${trip.id}`}
                    className="view-trip-button"
                  >
                    View Trip
                  </Button>
                </Grid.Column>
              </Grid>
            );
          } else {
            return (
              <Grid className="trip2" key={trip.id}>
                <Grid.Column width={8}>
                  <a href={`/trips/${trip.id}`}>
                    <Header as="h2">{trip.title}</Header>
                  </a>
                  <p className="short-description">{trip.shortDescription}</p>
                  <Button
                    as={Link}
                    to={`/trips/${trip.id}`}
                    className="view-trip-button"
                  >
                    View Trip
                  </Button>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Image as={Link} to={`/trips/${trip.id}`} src={trip1} />
                </Grid.Column>
              </Grid>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Dashboard;
