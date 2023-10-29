import React from 'react';
import { screen, render } from '@testing-library/react';
import Footer from "../Footer/Footer.js";


describe("Basic rendering of Footer", ()=>{
    it("Should have Header", () => {
        const {getByTestId}= render(<Footer/>);
        expect(getByTestId("footer")).toBeDefined();
    })

    test("Should verify the text of Footer",()=>{
        render(<Footer/>);
        
        const footerText=screen.getByText("Made By Srashti Deshmukh");

        expect(footerText).toBeInTheDocument();
    })
})