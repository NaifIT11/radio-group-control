"use client";

import { forwardRef, useState } from "react";

export default function Main() {
  const radioOptions = ["google", "amazon", "microsoft"];
  const [company, setCompany] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ company });
  };

  return (
    <div className="w-[50vw] flex flex-col gap-3 rounded border border-indigo-500 p-4">
      <MainHeader title="Main Form" description="choose one of the following" />
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        {radioOptions.map((radioOption) => (
          <RadioInput
            key={radioOption}
            label={radioOption}
            value={radioOption}
            onValueChange={setCompany}
          />
        ))}
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
      <h1 className="text-xl">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
}

interface RadioButtonProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
}

const RadioInput = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, value, onValueChange }, ref) => {
    return (
      <label
        htmlFor={value}
        className="flex has-[:checked]:text-indigo-500 has-[:checked]:border-indigo-200 border p-3 rounded justify-between items-center cursor-pointer"
      >
        <span className="text-md">{label}</span>
        <input
          type="radio"
          name="company"
          value={value}
          onChange={() => onValueChange(value)}
          id={value}
          ref={ref}
          className="cursor-pointer accent-indigo-500"
        />
      </label>
    );
  }
);

RadioInput.displayName = "RadioInput"; 
