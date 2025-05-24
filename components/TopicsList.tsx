import React from 'react';
import RemoveBtn from "@/components/RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";

const TopicsList = () => {
  return (
    <div>
      <div className="border border-blue-100 p-3 flex justify-between">
        <div>
          <h2 className="text-xl font-semibold">Topic title</h2>
          <div>Topic descr</div>
        </div>

        <div className="flex items-center gap-3">
          <RemoveBtn />
          <Link href={'/editTopic/123'}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopicsList;