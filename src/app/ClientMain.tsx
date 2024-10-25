"use client";

import { useState } from "react";

export default function Main() {
  const radioOptions = ["google" , "amazon" , "microsoft"];
  const [company  , setCompany] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({company})
  }
  return (
    <div className="w-[50vw] flex flex-col gap-3 rounded border border-indigo-500 p-4">
        <MainHeader title="Main Form" description="choose one of the follwing" />
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
           {radioOptions.map((radioOption => (
                <div className="flex justify-between items-center cursor-pointer">
                    <label htmlFor={radioOption}>{radioOption}</label>
                    <input type="radio" name="company" value={radioOption} onChange={(e) => setCompany(e.target.value)} id={radioOption} className="accent-indigo-500" />
                </div>
            )))}
            <button className="self-end font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded px-4 py-2">submit</button>
        </form>
    </div>
  );
}

function MainHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <h1 className="text-xl">Main Form</h1>
      <p className="text-sm">choose a one of the following</p>
    </div>
  );
}
