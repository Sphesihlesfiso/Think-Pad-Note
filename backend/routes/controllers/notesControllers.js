import Note from "../../models/note.js";
export const getNoteById =async(req,res)=>{
  try {
    const oneNote=await Note.findById(req.params.id)
    res.status(200).json(oneNote)
  } catch (error) {
    console.error(error);
    res.status(404).json({message:"Error in the getNoteById controller"})
  }
}
export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({createdAt:-1});
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
};
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({ message: "Note created." });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erro creating note.",
    });
  }
};
export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!newNote) {
      return res.status(404).json({ meesage: "Note not found" });
    } else {
      return res.status(200).json({ meesage: "Note updated successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ meesage: "Error in the updatenote Controller" });
  }
};
export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ meesage: "Note deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(404).json({ meesage: "Error in the delete note Controller" });
  }
};
