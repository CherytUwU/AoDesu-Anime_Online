import { lazy } from "react";

const ViewOne = lazy(() => import("./ViewOne"));
const ViewTwo = lazy(() => import("./ViewTwo"));
const ViewThree = lazy(() => import("./ViewThree"));
const PrivateView = lazy(() => import("./PrivateView"));

export default {
  ViewOne,
  ViewTwo,
  ViewThree,
  PrivateView
};
