import mongoose from "mongoose";

const verdictSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 250,
    },
    optionOne: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    optionTwo: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    voteCountOne: {
      type: Number,
      default: 0,
    },
    voteCountTwo: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);


export default mongoose.model("Verdict", verdictSchema)