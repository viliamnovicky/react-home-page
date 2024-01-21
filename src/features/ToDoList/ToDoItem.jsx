import { useState } from "react";
import styled from "styled-components";
import Button from "../../ui/Buttons";

const TaskContainer = styled.div`
  text-align: left;
  padding: 2rem 0;
  font-size: 2rem;
  font-weight: 100;
  position: relative;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;

  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

const CheckBoxHidden = styled.input`
  opacity: 0;
  cursor: pointer;

  &:checked ~ label {
    background: black;
    opacity: 0.7;
  }

  &:checked ~ label ~ p {
    text-decoration: line-through;
    opacity: 0.7;
    padding-right: 0
  }
`;

const Label = styled.label`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 5px solid white;
  background: var(--color-grey-100);
  outline: 1px solid var(--color-grey-400);
  position: absolute;
  cursor: pointer;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  span {
    position: absolute;
    left: 5rem;
    width: 30rem;
  }
`;
const Task = styled.p`
font-size: 2rem;
text-align: left;
width: 60%;
text-align: right;
`;


function ToDoItem({ task, checked, onClick }) {
  const [isChecked, setIsChecked] = useState(checked);
  
  return (
    <TaskContainer>
      <CheckBoxHidden id={task} type="checkbox" checked={isChecked} onChange={() => setIsChecked((isChecked) => !isChecked)}/>
      <Label for={task}/>
      <Task>{task}</Task>
      {isChecked && <Button size={"small"} variation="redSecondary" onClick={onClick}>delete</Button>}
    </TaskContainer>
  );
}

export default ToDoItem;
