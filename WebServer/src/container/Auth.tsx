import { Grid, Button } from "@mui/material";
import bgOne from "../assets/abstract-shape.png";
import { useState } from "react";
import CarouselItem from "../components/Auth/Carousel";

import Signin from "../components/Auth/Signin";
import Signup from "../components/Auth/Signup";

import content from "../data/content.json";

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
    <Grid container spacing={4} style={{ padding: "20px" }}>
      <Grid item xs={6}>
        <div
          style={{
            backgroundColor: "black",
            borderRadius: "2%",
            border: "solidj1px #cdcdcd",
            height: "90vh",
            padding: "20px",
          }}
        >
          <h1 style={{ color: "white", fontSize: "3rem" }}>
            {content.appName}
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "80%",
            }}
          >
            <img src={bgOne} alt="abstract-img" />
          </div>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div
          style={{
            borderRadius: "2%",
            border: "solid 1px #cdcdcd",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            height: "90vh",
            flexDirection: "column",
          }}
        >
          {!showSignIn && !showSignUp && !showCarousel && (
            <div style={{ width: "70%", margin: "auto" }}>
              <h1>Productive Mind</h1>
              <p>
                With only the feature you need, Organic Mind is customed for
                individual seeking a stress-free way to stay focused on their
                goals, projects, and tasks.
              </p>
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#fcba03",
                  color: "black",
                }}
                className="bg-pri"
                onClick={() => handleSignIn("carousel")}
                variant="contained"
              >
                Get Started
              </Button>
              <Button
                style={{ width: "100% ", color: "darkgrey" }}
                onClick={() => setShowSignIn(true)}
              >
                {" "}
                Already have an account? Sign In
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
