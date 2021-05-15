import views from "../../components/views";
import {
  VIEW_ONE_PATH,
  VIEW_TWO_PATH,
  VIEW_THREE_PATH,
  PRIVATE_VIEW_PATH
} from "./paths";

export const VIEW_ONE = {
  component: views.ViewOne,
  path: VIEW_ONE_PATH,
  isPrivate: false
};

export const VIEW_TWO = {
  component: views.ViewTwo,
  path: VIEW_TWO_PATH,
  isPrivate: false
};

export const VIEW_THREE = {
  component: views.ViewThree,
  path: VIEW_THREE_PATH,
  isPrivate: false
};

export const PRIVATE_VIEW = {
  component: views.PrivateView,
  path: PRIVATE_VIEW_PATH,
  isPrivate: true
};

export default [VIEW_ONE, VIEW_TWO, VIEW_THREE, PRIVATE_VIEW];
