import React from 'react';
import { screen, render } from '@testing-library/react';
import Header from "../Header/Header.js";


describe("Basic render of Header", ()=>{
    it("Should have Header", () => {
        const {getByTestId}= render(<Header/>);
        expect(getByTestId("Title")).toBeDefined();
    })

    test("Should verify the title of Form",()=>{
        render(<Header/>);
        
        const title=screen.getByText("Welcome To TODOmatic");

        expect(title).toBeInTheDocument();
    })
})