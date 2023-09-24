import mongoose, { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Perintah diperlukan"],
  },
  tag: {
    type: String,
    required: [true, "Tag diperlukan"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
