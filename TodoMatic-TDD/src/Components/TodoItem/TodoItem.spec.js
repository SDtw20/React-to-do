import React from "react";
import { screen, render, getByTestId, fireEvent } from '@testing-library/react';
import TaskList from "../TodoItem/TodoItem.js";

describe("Testing the ui",()=>{

    beforeEach(()=>{
        render(<TaskList/>)
    })
    it("Should contain task albel",()=>{
        const label=screen.getByTestId("todo-label");

        expect(label).toBeInTheDocument();
    })

    it("Should contain done button",()=>{
        const buttonDone=screen.getByTestId("todo-done");

        expect(buttonDone).toBeInTheDocument();
    })

    it("Should contain trash icon",()=>{
        const binIcon=screen.getByTestId("bin");

        expect(binIcon).toBeInTheDocument();
    })

    it("Should contain delete button",()=>{
        const tick=screen.getByTestId("tick");

        expect(tick).toBeInTheDocument();
    })

})

test("Strike the todo when tick button is clicked", () => {
    const markDone = jest.fn();
    render(<TaskList name="Water plants" id="10" completed="false" toggleTaskCompletion={markDone} />);
    const checkElement = screen.getByTestId("todo-done");
    fireEvent.click(checkElement);
    expect(markDone).toBeCalled();
  });
  
  test("delete todo when delete button clicked", () => {
    const deleteTodo = jest.fn();
    render(<TaskList name="Water plants" id="10" completed="false" deleteTask={deleteTodo} />);
    const deleteElement = screen.getByTestId("todo-del");
    fireEvent.click(deleteElement);
    expect(deleteTodo).toBeCalled();
  });