import mongoose, { Schema, Document, Model } from "mongoose";

export interface IToken extends Document {
  userId: mongoose.Types.ObjectId;
  email:string;
  token: string;
  public_id: string;
  expiresAt: Date;
  used: Boolean;
}

const TokenSchema = new Schema<IToken>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  email: { type: String, required: true },
  token: { type: String, required: true },
  public_id: { type: String, required: true },
  expiresAt: { type: Date, required: true, expires: 0 },
  used: {type: Boolean, default: false}
});

const Token: Model<IToken> =
  mongoose.models.Token || mongoose.model<IToken>("Token", TokenSchema);

export default Token;
