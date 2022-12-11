import express from "express";

const router = express.Router();
import {getUsers,createuser} from '../controller/controller.js';


router.get('/getusers',getUsers)
router.post('/createuser',createuser)

export default router;

