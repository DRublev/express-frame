import { Router } from "express";
import { shorten } from "./controllers/shorten.js";
import { redirect } from "./controllers/redirect.js";

const router = new Router();

router.get("/api/url/shorten", shorten);
router.get("/s/:hash", redirect);

export default router;