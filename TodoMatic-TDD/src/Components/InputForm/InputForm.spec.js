import React from "react";
import { screen, render, getByTestId, fireEvent } from '@testing-library/react';
import Form from "../InputForm/InputForm.js";

describe("Testing the ui",()=>{

    beforeEach(()=>{
        render(<Form/>)
    })
    it("Should contain an input field",()=>{
        const inputField=screen.getByTestId("test-input");

        expect(inputField).toBeInTheDocument();
    })

    it("Should contain submit button",()=>{
        const buttonSubmit=screen.getByTestId("test-submit");

        expect(buttonSubmit).toBeInTheDocument();
    })

    it("Should change the input value as user types",()=>{
        const inputField=screen.getByTestId("test-input");
        fireEvent.change(inputField,{"target":{"value":"Water plants"}});
        
        expect(inputField).toHaveAttribute("value","Water plants");
    })
})
describe("Testing the functionality",()=>{
    it("Should submit the input",()=>{
        const mockFn=jest.fn();
        render(<Form addTask={mockFn}/>);
        const inputField=screen.getByTestId("test-input");
        fireEvent.change(inputField,{"target":{"value":"Water Plants"}});
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(mockFn).toHaveBeenCalled();
    })

    it("Should give alert when empty value is submitted",()=>{
        const mockFn=jest.fn();
        render(<Form addTask={mockFn}/>);
        const alertMock=jest.spyOn(window,'alert').mockImplementation();
        const inputField=screen.getByTestId("test-input");
        fireEvent.change(inputField,{"target":{"value":""}});
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(alertMock).toHaveBeenCalled();
    })
})