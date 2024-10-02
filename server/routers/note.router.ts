import express from "express";
import {
  addNote,
  deleteNote,
  getAllNote,
  updateNote,
} from "../controllers/note.controllers";

const noteRouter = express.Router();

noteRouter.route("/notes").get(getAllNote);
noteRouter.route("/notes").post(addNote);
noteRouter.route("/notes/delete/:id").delete(deleteNote);
noteRouter.route("/notes/update/:id").patch(updateNote);

export default noteRouter;
