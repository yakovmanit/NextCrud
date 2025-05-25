"use client"

import React from 'react';
import {HiOutlineTrash} from "react-icons/hi";
import axios from "axios";
import {useRouter} from "next/navigation";

interface IRemoveBtnProps {
  id: string;
}

const RemoveBtn: React.FC<IRemoveBtnProps> = ({ id }) => {
  const router = useRouter()

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/topics?id=${id}`);

      if (res.status === 200) {
        router.refresh();
      }

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button onClick={handleDelete} className="text-red-500">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;