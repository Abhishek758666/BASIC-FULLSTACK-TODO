import { Request, Response } from "express";
import Note from "../models/note.schema";

export const getAllNote = async (req: Request, res: Response) => {
  try {
    const notes = await Note.find();
    res.send({ message: "getting notes", notes: notes });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while fetching notes.");
  }
};

export const addNote = async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  try {
    const addNotes = await Note.create(data);
    res.send({ message: "notes added sucessfully", addNotes });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while adding notes.");
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedNote = await Note.findByIdAndUpdate(id, data, { new: true });
    if (!updatedNote) {
      res.status(404).send({ message: "Note not found" });
      return;
    }
    res
      .status(200)
      .send({ message: "Note updated successfully", note: updatedNote });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while updating the note.");
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedNote = await Note.findByIdAndDelete({ _id: id });
    res.send({ message: "notes deleted sucessfully", deletedNote });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while deleting notes.");
  }
};
