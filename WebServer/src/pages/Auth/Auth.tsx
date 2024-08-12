import { Grid, Button } from "@mui/material";
import bgOne from "../../assets/auth_image.png";
import { useState } from "react";
import CarouselItem from "./component/Carousel";

import Signin from "./component/Signin";
import Signup from "./component/Signup";

import content from "../../data/content.json";

export default function Auth() {
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const [showCarousel, setShowCarousel] = useState<boolean>(false);

  const handleSignIn = (data: string) => {
    switch (data) {
      case "signin":
        setShowSignIn(true);
        setShowSignUp(false);
        setShowCarousel(false);
        break;

      case "signup":
        setShowSignIn(false);
        setShowSignUp(true);
        setShowCarousel(false);
        break;

      case "carousel":
        setShowSignIn(false);
        setShowSignUp(false);
        setShowCarousel(true);
        break;

      default:
        setShowSignIn(false);
        setShowSignUp(false);
        setShowCarousel(false);
        break;
    }
  };

  return (
    <Grid container spacing={4} className="authentication_left_main">
      <Grid item xs={6}>
        <div className="authentication_left_component">
          <h1 className="authentication_left_title">{content.appName}</h1>
          <div className="authentication_left_img">
            <img src={bgOne} alt="abstract-img" />
          </div>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="auth_right_main">
          {!showSignIn && !showSignUp && !showCarousel && (
            <div className="auth_right_component">
              <h1>{content.auth_intro.title}</h1>
              <p>{content.auth_intro.body}</p>
              <Button
                className="bg-pri auth_right_button"
                onClick={() => handleSignIn("carousel")}
                variant="contained"
              >
                {content.getStarted}
              </Button>
              <Button
                style={{ width: "100% ", color: "darkgrey" }}
                onClick={() => setShowSignIn(true)}
              >
                {content.auth_account_signin}
              </Button>
            </div>
          )}

          {showSignIn && <Signin onButtonClick={handleSignIn} />}
          {showCarousel && <CarouselItem onButtonClick={handleSignIn} />}
          {showSignUp && <Signup onButtonClick={handleSignIn} />}
        </div>
      </Grid>
    </Grid>
  );
}
