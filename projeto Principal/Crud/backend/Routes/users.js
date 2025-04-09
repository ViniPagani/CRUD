import express from "express";
import { getUsers, postUsers, deleteUser, putUsers } from "../Controllers/users.js";

const router = express.Router();

router.get("/users", getUsers);

router.post("/users", postUsers);

router.delete("/users/:id", deleteUser);

router.put("/users/:id", putUsers);
 

export default router;