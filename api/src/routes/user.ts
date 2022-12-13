import express, { Request, Response } from "express";
import { User } from "../models";

const router = express.Router();

router.get("/user/:uid", async (req: Request, res: Response) => {
  const uid = req.params.uid;
  const user = await User.find({ uid: uid });
  return res.status(200).send(user);
});

router.get("/user", async (req: Request, res: Response) => {
  const user = await User.find(req.query);
  return res.status(200).send(user);
});
router.get("/", async (req: Request, res: Response) => {
  return res.status(200).send(req.query);
});

router.post("/user", async (req: Request, res: Response) => {
  const { firstName, lastName, uid, dob, phone, role } = req.body;
  console.log(req.body);
  const user = User.build({ firstName, lastName, uid, dob, phone, role });
  await user.save();
  return res.status(201).send(user);
});
router.put("/user", async (req: Request, res: Response) => {
  const { filter, update } = req.body;
  console.log(filter, update);
  User.findOneAndUpdate(filter, update, {}, (result) => {
    console.log(result);
    return res.status(201).send(result);
  });
});
router.delete("/user", async (req: Request, res: Response) => {
  const filter = req.body;

  User.findOneAndDelete(filter, {}, (result) => {
    console.log(result);
    return res.status(201).send(result);
  });
});

export { router as userRouter };
