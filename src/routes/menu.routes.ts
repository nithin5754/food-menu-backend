import express from "express";
import { getAllMenus, seed } from "../controller/menu.controller";

const router = express.Router();

function menuRoutes() {
  router.get("/get/all/menus",getAllMenus);
  router.get('/seed',seed)

  return router;
}

export default menuRoutes;