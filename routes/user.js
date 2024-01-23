import express from "express";
// import { User } from "../models/user.js";
import { getMyProfile,  login, logout, register} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);


// router.route("/userid/:id").get(getUserDetails);
router.get("/me", isAuthenticated, getMyProfile);


export default router;