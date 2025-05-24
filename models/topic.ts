import mongoose, {Model, Document} from "mongoose";

interface ITopic extends Document {
  title: string,
  description: string,
  createdAt: Date,
  updatedAt: Date,
}

const topicSchema = new mongoose.Schema<ITopic>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Topic: Model<ITopic> = mongoose.models.Topic || mongoose.model<ITopic>("Topic", topicSchema);

export default Topic;