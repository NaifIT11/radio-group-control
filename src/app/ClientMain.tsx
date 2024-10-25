"use client";

import { useState } from "react";

export default function Main() {
  const radioOptions = ["google" , "amazon" , "microsoft"];
  const [company  , setCompany] = useState<string>("");
  return (
    <div className="flex flex-col gap-3 rounded border border-indigo-500 p-4">
        <MainHeader title="Main Form" description="choose one of the follwing" />
        <form className="flex flex-col gap-3">
           {radioOptions.map((radioOption => (
                <div className="flex justify-between items-center cursor-pointer">
                    <label htmlFor={radioOption}>{radioOption}</label>
                    <input type="radio" name="company" value={radioOption} onChange={(e) => setCompany(e.target.value)} id={radioOption} className="accent-indigo-500" />
                </div>
            )))}
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
