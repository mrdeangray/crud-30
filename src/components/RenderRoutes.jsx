import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Home from "./Home";
import DrawingActivity from "./DrawingActivity";

const RenderRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/drawingactivity" element={<DrawingActivity />} />
          {/* <Route exact path="/updatetask/:id" element={<UpdateTask />} /> */}
        </Route>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default RenderRoutes;
