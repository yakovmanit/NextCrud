import React from 'react';

const addTopic = () => {
  return (
    <div>
      <form className="flex flex-col gap-4 items-start">
        <input className="border border-blue-100 px-8 py-2 w-full" type="text" placeholder="Title" />
        <input className="border border-blue-100 px-8 py-2 w-full" type="text" placeholder="Descr" />

        <button className="py-2 px-4 bg-blue-500 text-white">Add topic</button>
      </form>
    </div>
  );
};

export default addTopic;