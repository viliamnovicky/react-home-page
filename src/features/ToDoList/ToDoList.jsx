import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import { useTaskList } from "./useListData";
import { useState } from "react";
import Button from "../../ui/Buttons";

const ListContainer = styled.div`
  position: absolute;
  bottom: 0rem;
  right: 5rem;
  width: 20vw;
  height: 70rem;
  border-radius: 1rem;
  overflow: hidden;
  background: var(--color-grey-200);
`;

const List = styled.div`
  background: var(--color-grey-50);
  color: var(--color-grey-800);
  width: 100%;
  height: 70rem;
  overflow: scroll;
`;

const Header = styled.h1`
  color: var(--color-grey-700);
  background: var(--color-grey-50);
  text-transform: uppercase;
  text-align: center;
  font-weight: 100;
  font-size: 3rem;
  padding: 2rem 0;
`;

const Input = styled.input`
  width: calc(100% - 11rem);
  height: 5rem;
  position: absolute;
  bottom: 10rem;
  padding: 1rem 2rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50rem;
  border: none;
  color: var(--color-grey-800);
  font-size: 1.6rem;
  z-index: 2;

  &:active,
  &:focus {
    outline: none;
  }
`;

const Buttons = styled.div`
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-grey-100);
  width: 100%;
  height: 20rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
  z-index: 1;
  padding-bottom: 4rem;
  border-radius: 1rem;
`;

// const Button = styled.button`
//   background: var(--color-green-500);
//   width: 15rem;
//   height: 5rem;
//   font-size: 2rem;
//   text-transform: uppercase;
//   border-radius: 50rem;
//   border: none;
//   cursor: pointer;
//   color: var(--color-grey-50);

//   &:hover {
//     background: var(--color-green-600);
//   }
// `;

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState(
    localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []
  );

  function handleAddTask() {
    setTasklist([...tasklist, { task: task, checked: false }]);
    localStorage.setItem("tasks", JSON.stringify(tasklist));
    setTask("")
  }

  function handleDeleteAllTasks() {
    setTasklist([])
    localStorage.setItem("tasks", JSON.stringify(tasklist));
  }

  function handleDeleteTask(taskToDelete) {
    console.log(taskToDelete)
    setTasklist(tasklist.filter(task => task !== taskToDelete))
    localStorage.setItem("tasks", JSON.stringify(tasklist));
  }

  return (
    <ListContainer>
      <Header>don't forget</Header>
      <List>
        {/* <ToDoItem task={"Pokódovať"} />
      <ToDoItem task={"Zabehať"} />
      <ToDoItem task={"Umyť riad"} /> */}
        {tasklist.map((task) => (
          <ToDoItem task={task.task} checked={task.checked} key={task.task} onClick={() => handleDeleteTask(task)}/>
        ))}
      </List>
      <Input
        type="text"
        placeholder="add new task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        maxlength="25"
      ></Input>
      <Buttons>
        <Button onClick={handleAddTask}>add task</Button>
        {tasklist.length > 0 && <Button onClick={handleDeleteAllTasks} variation="red">delete all</Button>}
      </Buttons>
    </ListContainer>
  );
}

export default ToDoList;
