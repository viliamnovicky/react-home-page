import { useState } from "react";
import styled from "styled-components";

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
  }
`;

const Label = styled.label`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 5px solid white;
  outline: 2px solid black;
  position: absolute;
  left: 2rem;
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
padding-right: 2rem;
font-size: 2rem;
`;

const Button = styled.button`
    
    transform: translateX(-50%);
    width: 7rem;
    height: 3rem;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 50rem;
    border: none;
    cursor: pointer;

    color: var(--color-red-500);
      outline: .2rem solid var(--color-red-600);
    

    &:hover {
      background: var(--color-red-600);
      color: var(--color-red-50);
    }
`

function ToDoItem({ task }) {
  const [isChecked, setIsChecked] = useState(false);
  
  return (
    <TaskContainer>
      <CheckBoxHidden id={task} type="checkbox" checked={isChecked} onChange={() => setIsChecked((isChecked) => !isChecked)}/>
      <Label for={task}></Label>
      <Task>{task}</Task>
      {isChecked && <Button>delete</Button>}
    </TaskContainer>
  );
}

export default ToDoItem;
