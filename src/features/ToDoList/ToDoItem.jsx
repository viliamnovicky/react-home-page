import styled from "styled-components";

const TaskContainer = styled.p`
  text-align: left;
  padding: 1rem 0;
  font-size: 2rem;
  font-weight: 100;
`;

const Task = styled.p`
    
`

const CheckBox = styled.input`
    
`

function ToDoItem({ task }) {
  return <TaskContainer>
    <Task>{task}</Task>
    <CheckBox/>
    </TaskContainer>;
}

export default ToDoItem;
