"use client"
import React, { useState } from "react";

function Recommendations() {
  const [recommendations, setRecommendations] = useState([
    { name: "John Doe", message: "Excellent developer!" },
    { name: "Jane Smith", message: "Highly recommend working with them!" },
    { name: "Bob Johnson", message: "Outstanding skills and creativity!" },
  ]);

  const [form, setForm] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecommendations([...recommendations, form]);
    alert("Thank you for your recommendation!");
    setForm({ name: "", message: "" });
  };

  return (
    <section id="recommendations" className="recommendations-section p-[20px] m-[10px]">
      <h2 className="text-[30px]">Recommendations</h2>
      <div id="recommendation-list" className=" p-[20px] grid grid-cols-3 gap-4 justify-items-center content-center bg-[#353839]">
        {recommendations.map((rec, index) => (
          <div key={index} className="recommendation w-[350px] rounded-[8px] h-[180px] bg-[#ffffff] flex flex-col gap-2 justify-start p-[10px] items-start">
            <strong>{rec.name}:</strong>
            <p>" {rec.message} "</p>
          </div>
        ))}
      </div>
      <form id="recommendation-form" className=" gap-4 mt-[30px] p-[20px] rounded-[8px] justify-center items-center flex flex-col " onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-[70%] border border-[1px] rounded-[8px] p-[5px]"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Recommendation"
          className="w-[70%] border-[1px] h-[200px] resize-none rounded-[8px] p-[5px]"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button type="submit" className="w-[20%] h-12  border-[1px] border-[#353839] text-[#353839] rounded-[8px] ">Submit</button>
      </form>
      <div className="flex flex-row justify-end items-end">
        <div className="rounded-[50%] bg-[#353839] p-[20px]">
          <svg fill="#ffffff" height="40" width="40" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512" xmlSpace="preserve">
            <g>
              <g>
                <path d="M505.752,304.894L271.085,70.227c-8.331-8.331-21.839-8.331-30.17,0L6.248,304.894C2.248,308.894,0,314.321,0,319.979
			v106.667c0,19.006,22.979,28.524,36.418,15.085L256,222.149L475.582,441.73C489.021,455.17,512,445.651,512,426.645V319.979
			C512,314.321,509.752,308.894,505.752,304.894z M469.333,375.142L271.085,176.894c-8.331-8.331-21.839-8.331-30.17,0
			L42.667,375.142v-46.327L256,115.482l213.333,213.333V375.142z"/>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Recommendations;