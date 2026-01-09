import { Request, Response } from "express";
import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../../models/User";
import Token from "../../models/Token";
import { generateToken } from "../../utils/generateToken";
import { sendMail } from "../../utils/sendMail";
import crypto from "crypto";
dotenv.config();
const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email required" });
    }

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email });
    }

    const token = generateToken();
    const publicId = crypto.randomUUID()
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

    await Token.create({ userId: user._id, token, public_id:publicId, expiresAt });

    await sendMail(email, publicId);

    return res
      .status(201)
      .json({ message: "If the email exists, a login link has been sent" });
  } catch (error) {
    console.error("Unexpected error in /login:", error);
    return res
      .status(500)
      .json({ success: false, message: "Interval server error" });
  }
});

router.get("/verify/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Token is Required" });
    }
    const tokenDoc = await Token.findOne({ public_id: id });

    if (!tokenDoc || tokenDoc.used || tokenDoc.expiresAt < new Date()) {
      return res
        .status(400)
        .json({ message: "Token is Missing or Token Expired" });
    }

    tokenDoc.used = true;
    await tokenDoc.save();
    if (!process.env.JWT_SECRET) {
      return res.status(400).json({ message: "JWT_SECRET key Missing" });
      console.log("JWT_SECRET key Missing");
    }
    const session = jwt.sign(
      { userId: tokenDoc.userId },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("auth-cookie", session, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000
    });
    res.setHeader("Authorization", `Bearer ${session}`);
    return res.status(200).json({ success: true, message: "Logged in", tokenDoc, session });
  } catch (error) {
    console.error("Unexpected error :", error);
    return res
      .status(500)
      .json({ success: false, message: "Interval server error" });
  }
});

router.post("/logout", async (req: Request, res: Response) => {
  res.clearCookie("auth-cookie", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return res.status(200).json({ success: true, message: "Logged out" });
});

export default router;
