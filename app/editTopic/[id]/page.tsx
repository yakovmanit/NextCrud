import React from 'react';
import EditTopicForm from "@/components/EditTopicForm";
import axios from "axios";
import {ITopic} from "@/models/topic";

interface IEditTopicParams {
  params: {
    id: string;
  }
}

const EditTopic: React.FC<IEditTopicParams> = async ({ params }) => {
  const { id } = params;

  const handleEdit = async () => {
    try {
      const { data } = await axios.get<ITopic>(`http://localhost:3000/api/topics?id=${id}`);

      return data;

    } catch (err) {
      console.error(err)
    }
  }

  const topic = await handleEdit();

  if (!topic) {
    return 'Loading';
  }

  return (
    <div>
      <EditTopicForm param={id} titleProp={topic.title} descriptionProp={topic.description} />
    </div>
  );
};

export default EditTopic;