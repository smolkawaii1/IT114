import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  fund: { type: Number, required: true },
  source: { type: String, required: true },
  sectorType: { type: String, required: true },
  proponent: { type: String, required: true },
  status: { type: String, required: true },
  duration: {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
});
const projectModel = mongoose.model("Project", ProjectSchema);

export default projectModel;
