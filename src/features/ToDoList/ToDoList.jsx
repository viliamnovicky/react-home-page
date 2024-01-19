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
    padding-top: 2rem;

`

function ToDoList() {
    return (
        <List>
            <Header>don't forget</Header>

            <ToDoItem task={"Pokódovať"}/>
            <ToDoItem task={"Zabehať"}/>
            <ToDoItem task={"Umyť riad"}/>
        </List>
    )
}

export default ToDoList
