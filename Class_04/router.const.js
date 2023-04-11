import { Router } from "express";
import songsRoutes from "./routes/songs.routes.js";
import artistsRoutes from "./routes/artists.routes.js";
const router = Router();

//Songs routes
router.use("/songs", songsRoutes);

//Artists routes
router.use("/artists", artistsRoutes);

export default router;
