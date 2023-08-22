import { Router } from "express";
import { latestVideo } from "./service";
export const router = Router();

router.get("/", latestVideo);
