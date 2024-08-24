import React, { useState } from "react";
import { Link } from "react-router-dom";
import Demo from "./Confetti";

const DrawingActivity = () => {

  return (
    <div>


      <Link to={`/`}>Home</Link>
      <h3>Drawing Activity</h3>
      <p>
        1) Draw two diagonal parallel lines that are both intersected by a
        vertical line.
      </p>
      <br />
      <p>
        2) Draw a triangle that has two perpendicular sides that have a the
        lengths of 3 cm, 4 cm, and a hypotenuse of 5 cm. Find its perimeter
      </p>
    </div>
  );
};

export default DrawingActivity;
