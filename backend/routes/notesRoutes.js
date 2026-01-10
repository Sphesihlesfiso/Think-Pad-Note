import express from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} from "./controllers/notesControllers.js";
const router = express.Router();
router.get("/", getAllNotes);
router.post("/note", createNote);
router.post("/note/:id", updateNote);
router.delete("/note/:id", deleteNote);

export default router;
