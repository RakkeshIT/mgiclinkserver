import mongoose, { Schema , Document} from "mongoose";

export interface IQuestion {
  id: number;
  question: string;
}

export interface IInterview extends Document {
  userId: string;

  user_query: {
    role: string;
    experience: string;
    difficulty: string;
    numberOfQuestions: number;
  };

  questions: IQuestion[];
}

const questionSchema = new Schema<IInterview>(
  {
    userId: {
      type: String,
      required: true,
    },

    user_query: {
      role: {
        type: String,
        required: true,
      },

      experience: {
        type: String,
        required: true,
      },

      difficulty: {
        type: String,
        required: true,
      },

      numberOfQuestions: {
        type: Number,
        required: true,
      },
    },

    questions: [
      {
        id: {
          type: Number,
          required: true,
        },

        question: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Questions =
  mongoose.models.Questions ||
  mongoose.model<IInterview>(
    "Questions",
    questionSchema
  );