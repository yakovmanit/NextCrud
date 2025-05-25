import mongoose, {Model, Document} from "mongoose";

export interface ITopic extends Document {
  title: string,
  description: string,
  createdAt: Date,
  updatedAt: Date,
  _id: string
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