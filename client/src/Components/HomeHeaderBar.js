import React from "react";
import "C:/Users/sanip/OneDrive/Desktop/Board/client/src/Styles/HomeStyles/HomeHeaderBar.css";
import Button from "react-bootstrap/Button";
function HomeHeaderBar() {
  return (
    <>
      <div className="headerBar">
        <h4 className="headerBar__intro">
          {" "}
          Want to get hired at to your dream job??{" "}
          <Button variant="outline-primary" className="headerInfoButton">
            {" "}
            Know more
          </Button>{" "}
        </h4>
      </div>
    </>
  );
}

export default HomeHeaderBar;
