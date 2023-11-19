import { type GoalProps } from "../MainApp";

type Props = {
  goal: GoalProps;
  onDelete: (id: number) => void;
};

function Goals({ goal, onDelete }: Props) {
  return (
    <div className="">
      <article className="break-all rounded-lg  bg-primary-dark p-4 text-accent-light-50">
        <h1 className="text-lg font-bold text-accent-light-100">
          {goal.title}
        </h1>
        <p className="text-xs">{goal.description}</p>
        <div className="flex justify-end">
          <button
            className="rounded-sm bg-accent-light-50 p-2 text-sm text-primary-dark"
            onClick={() => onDelete(goal.id)}
          >
            Delete
          </button>
        </div>
      </article>
    </div>
  );
}

export default Goals;
