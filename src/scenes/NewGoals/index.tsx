import { FormEvent, useRef } from "react";

type Props = {
  onAddGoal: (goal: string, summary: string) => void;
};

function NewGoals({ onAddGoal }: Props) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    event.currentTarget.reset();

    onAddGoal(enteredGoal, enteredSummary);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" ">
        <div className=" mt-8 flex flex-col">
          <label
            htmlFor="goal"
            className="mb-2 text-lg font-bold text-accent-light-100"
          >
            Your Goal
          </label>
          <input
            id="goal"
            type="text"
            ref={goalRef}
            className="rounded-lg border-accent-light-50 bg-accent-light-50 p-3 text-primary-dark focus:border-accent-light-50 focus:outline-none focus:ring-2 focus:ring-accent-light-100"
          />
        </div>
        <div className=" my-4 flex flex-col">
          <label
            htmlFor="summary"
            className="mb-2 text-lg font-bold text-accent-light-100 "
          >
            Short Summary
          </label>
          <input
            id="summary"
            type="text"
            ref={summaryRef}
            className="block rounded-lg border-accent-light-50 bg-accent-light-50 p-3 text-primary-dark focus:border-accent-light-50 focus:outline-none focus:ring-2 focus:ring-accent-light-100"
          />
        </div>
        <div className=" mb-4 mt-8">
          <button className="w-full rounded-lg bg-accent-light-100 p-3 text-lg font-bold text-primary-dark transition duration-300 ease-in-out hover:bg-button-hover hover:text-primary-dark">
            ADD GOAL
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewGoals;
