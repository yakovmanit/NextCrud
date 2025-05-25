"use client"

import React, {useState} from "react";
import axios from "axios";
import {ITopicCreate} from "@/app/api/topics/route";
import {useRouter} from "next/navigation";

const AddTopic = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title and description are required!');
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/topics", {title, description} as ITopicCreate);

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
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <input
          className="border border-blue-100 px-8 py-2 w-full"
          type="text"
          placeholder="Descr"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />

        <button
          className="py-2 px-4 bg-blue-500 text-white"
          type="submit"
        >
          Add topic
        </button>
      </form>
    </div>
  );
};

export default AddTopic;