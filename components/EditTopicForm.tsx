"use client"

import React, {useState} from 'react';
import axios from "axios";
import {ITopicCreate} from "@/app/api/topics/route";
import {useRouter} from "next/navigation";

interface IEditTopicFormProps {
  param: string;
  titleProp: string
  descriptionProp: string
}

const EditTopicForm: React.FC<IEditTopicFormProps> = ({ param, titleProp, descriptionProp }) => {
  const [title, setTitle] = useState(titleProp);
  const [description, setDescription] = useState(descriptionProp);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title and description are required!');
      return;
    }

    try {
      await axios.put(`http://localhost:3000/api/topics/${param}`, {title, description} as ITopicCreate);

      router.push("/");
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <div>
      <form
        className="flex flex-col gap-4 items-start"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="border border-blue-100 px-8 py-2 w-full"
          type="text"
          value={title}
          onChange={e => setTitle(e.currentTarget.value)}
        />
        <input
          className="border border-blue-100 px-8 py-2 w-full"
          type="text"
          value={description}
          onChange={e => setDescription(e.currentTarget.value)}
        />

        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white"
        >
          Update topic
        </button>
      </form>
    </div>
  );
};

export default EditTopicForm;