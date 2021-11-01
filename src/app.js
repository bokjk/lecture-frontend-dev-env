import MainController from "./controllers/MainController.js";
import 'custom-event-polyfill';
import "./main.css";

document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});
