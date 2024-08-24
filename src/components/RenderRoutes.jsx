import React from "react";
import { Route, Routes } from "react-router-dom";
import ReadTasks from "./ReadTasks";
import PrivateRoutes from "./PrivateRoutes";
import Home from "./Home";

const RenderRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route element={<PrivateRoutes />}>
          <Route exact path="/createtask" element={<CreateTask />} />
          <Route exact path="/readtasks" element={<ReadTasks />} />
          <Route exact path="/updatetask/:id" element={<UpdateTask />} />
          <Route exact path="/deletetask/:id" element={<DeleteTask />} />
        </Route> */}
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default RenderRoutes;
