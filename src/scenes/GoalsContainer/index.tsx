import { type GoalProps } from "../MainApp";
import Goals from "../Goals";

type Props = {
  goals: GoalProps[];
  onDeleteHandler: (id: number) => void;
};

const GoalsContainer = ({ goals, onDeleteHandler }: Props) => {
  return (
    <ul className=" mt-8 grid grid-flow-dense grid-cols-2 gap-4 pb-4">
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goals goal={goal} onDelete={onDeleteHandler} />
        </li>
      ))}
    </ul>
  );
};

export default GoalsContainer;
