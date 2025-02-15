import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";

const Routing = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
