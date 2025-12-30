import Verdict from "../models/Verdict.js";

const getAllVerdictQuestions = async (req, res) => {
  try {
    const verdict = await Verdict.find();
    if (verdict.length === 0) {
      res.status(400).json({
        message: "No Data To Fetch !",
      });
    } else {
      res.status(200).json({
        message: "Fetch Successfull !",
        data: verdict,
      });
    }
  } catch (error) {
    console.log("❌ Error in GetAllVerdictQuestions " + error);
  }
};

const postVerdictQuestion = async (req, res) => {
  try {
    const { question, optionOne, optionTwo } = req.body;
    if (!question || !optionOne || !optionTwo) {
      res.status(400).json({
        message: "Please Include All Fields !",
      });
      return;
    }

    const verdict = await Verdict.create(req.body);
    if (verdict) {
      res.status(201).json({
        message: "Created Successfull !",
        data: verdict,
      });
    }
  } catch (error) {
    console.log("❌ Error in postVerdictQuestion " + error);
  }
};

const voteVerdict = async (req, res) => {
  try {
    const { id, option } = req.params;

    if (!["one", "two"].includes(option) || !id) {
      res.status(400).json({
        message: "Please Choose An Option !",
      });
    }
    const update =
      option === "one"
        ? { $inc: { voteCountOne: 1 } }
        : { $inc: { voteCountTwo: 1 } };

    const verdict = await Verdict.findByIdAndUpdate(id, update, { new: true });

    if (!verdict) {
      return res.status(404).json({
        message: "Verdict not found",
      });
    } else {
      res.status(200).json({
        message: "Vote recorded successfully",
        data: verdict,
      });
    }
  } catch (error) {
    console.log("❌ Error in voteVerdict " + error);
  }
};

export { getAllVerdictQuestions, postVerdictQuestion, voteVerdict };
