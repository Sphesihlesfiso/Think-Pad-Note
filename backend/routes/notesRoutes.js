import express from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  getNoteById
} from "./controllers/notesControllers.js";
const router = express.Router();
router.get("/", getAllNotes);
router.get("/note/:id",getNoteById)
router.post("/note", createNote);
router.post("/note/:id", updateNote);
router.delete("/note/:id", deleteNote);

export default router;
