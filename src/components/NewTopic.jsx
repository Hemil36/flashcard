import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../UserSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NewTopic = () => {
  const [topic, setTopic] = useState("");
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(topic, user);
    try{
    const response = await axios.post(
      "http://localhost:5000/api/topics/new",
      {
        topic_name: topic,
        user_id: user,
      },
      {
        withCredentials: true,
      }
      
    );
    
    toast.success("Topic added successfully");
    navigate("/");
    console.log(response);
  }catch(err){
    toast.error('Please try again')
  }
  };

  return (
    <div className="p-4 h-full flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="new-topic" className="mb-2 text-xl font-medium ">
          New Topic
        </label>
        <input
          type="text"
          id="new-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border-2 border-gray-300 rounded px-3 py-2 mb-4 "
          placeholder="Enter new topic"
        />
        <button
          type="submit"
          className="bg-[#ffdd59]  py-1 rounded hover:bg-yellow-400 transition"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
};

export default NewTopic;
