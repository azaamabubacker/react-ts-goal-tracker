import { useState } from "react";
import NewGoals from "../NewGoals";
import GoalsContainer from "../GoalsContainer";
import InfoBox from "../InfoBox";

export type GoalProps = {
  id: number;
  title: string;
  description: string;
};

const MainApp = () => {
  const [goals, setGoals] = useState<GoalProps[]>([]);

  const goalHandler = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoals: GoalProps = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoals];
    });
  };

  const deleteHandler = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <div>
        <NewGoals onAddGoal={goalHandler} />
      </div>
      {goals.length === 0 ? (
        <InfoBox mode="hint">
          You have no goals yet, Please add some goals.
        </InfoBox>
      ) : goals.length >= 4 ? (
        <InfoBox mode="warning">Warning! You have too many goals..</InfoBox>
      ) : null}
      <div>
        <GoalsContainer goals={goals} onDeleteHandler={deleteHandler} />
      </div>
    </>
  );
};

export default MainApp;
