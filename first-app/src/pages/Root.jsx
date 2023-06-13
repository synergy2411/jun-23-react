import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";

export default function Root() {
  // const navigation = useNavigation();
  // console.log("NAVIGATION STATE : ", navigation.state);

  // if (navigation.state === "loading") {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div>
      <Header />
      <br />
      <div className="row">
        <div className="col-6 offset-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
