"use client";

export default function Main() {
  const radioOptions = ["google" , "amazon" , "microsoft"]
  return (
    <div className="flex flex-col gap-3 rounded border border-indigo-500 p-4">
        <MainHeader title="Main Form" description="choose one of the follwing" />
        <div className="flex flex-col gap-3">
            {radioOptions.map((radioOption => (
                <div className="flex justify-between items-center">
                    <label htmlFor="option">{radioOption}</label>
                    
                </div>
            )))}
        </div>
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
