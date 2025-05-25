import React from 'react';
import RemoveBtn from "@/components/RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";
import {ITopic} from "@/models/topic";
import axios from "axios";

const TopicsList = async () => {
  const { data } = await axios.get<ITopic[]>("http://localhost:3000/api/topics");

  return (
    <div className="flex flex-col gap-4">
      {
        data.map(data => (
          <div key={data._id} className="border border-blue-100 p-3 flex justify-between">
            <div>
              <h2 className="text-xl font-semibold">{data.title}</h2>
              <div>{data.description}</div>
            </div>

            <div className="flex items-center gap-3">
              <RemoveBtn id={data._id} />
              <Link href={`/editTopic/${data._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default TopicsList;