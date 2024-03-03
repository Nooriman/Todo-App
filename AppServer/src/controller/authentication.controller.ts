import { Request, Response } from "express";
import AuthenticationModel, {
  AuthenticationSchema,
} from "../model/authentication.model";
import ResponseMessage from '../Constants.json';

export const postLogin = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const auth = await AuthenticationModel.findOne({ email, password });
    if (auth) {
      res.json({ message: ResponseMessage.login_success });
    } else {
      res.status(401).json({ message: ResponseMessage.login_failure });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const postSignup = async (req: Request, res: Response) => {
  try {
    console.log("postSignup");
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
