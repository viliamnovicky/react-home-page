import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const List = styled.div`
    background: white;
    position: absolute;
    bottom: 1rem;
    right: 5rem;
    width: 20vw;
    height: 70rem;
    border-radius: 1rem;
`

const Header = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-weight: 100;
    font-size: 3rem;
    padding: 2rem 0;

`

const Button = styled.button`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 2rem;
    background: var(--color-green-500);
    padding: 1rem 3rem;
    font-size: 2rem;
    text-transform: uppercase;
    border-radius: 50rem;
    border: none;
    cursor: pointer;
    color: var(--color-grey-50);

    &:hover {
        background: var(--color-green-600);
    }
`

function ToDoList() {
    return (
        <List>
            <Header>don't forget</Header>
            <ToDoItem task={"Pokódovať"}/>
            <ToDoItem task={"Zabehať"}/>
            <ToDoItem task={"Umyť riad"}/>
            <Button>add task</Button>
        </List>
    )
}

export default ToDoList
