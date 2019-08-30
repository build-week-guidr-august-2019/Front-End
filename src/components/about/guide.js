import React from "react";
import guide1 from "../../img/become-a-guide-1.jpg";
import guide2 from "../../img/become-a-guide-2.jpg";
import { Grid, Image } from "semantic-ui-react";

const BecomeAGuide = () => {
  return (
    <div className="guidr-container">
      <div className="guidr-intro-content">
        <h1>What Does It Take To Become A Guide?</h1>

        <Grid>
          <Grid.Column width={6}>
            <Image src={guide1} />
          </Grid.Column>
          <Grid.Column width={8}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={8}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Image src={guide2} />
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default BecomeAGuide;
