import React from 'react';
import { screen, render } from '@testing-library/react';
import Filters from "../Filter/Filters.js";


describe("Basic render of Filter", ()=>{
    it("Should have filter button", () => {
        const {getByTestId}= render(<Filters/>);
        expect(getByTestId("filter_btn")).toBeDefined();
    })

    it("Should verify the buttons in filter",()=>{
        render(<Filters/>);
        
        const btn=screen.getByTestId("filter_btn");

        expect(btn.hasChildNodes());
    })
})

//expect the haschildnodes