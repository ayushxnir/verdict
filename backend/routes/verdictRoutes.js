import express from "express";
import {
    getAllVerdictQuestions,
  postVerdictQuestion,
  voteVerdict,
} from "../controller/verdictController.js";

const router = express.Router();

router.get("/", getAllVerdictQuestions);
router.post("/", postVerdictQuestion);
router.post("/voteVerdict/:id/:option", voteVerdict);

export default router;
