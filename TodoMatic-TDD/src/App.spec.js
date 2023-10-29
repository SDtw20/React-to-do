import React from "react";
import {render} from '@testing-library/react';
import App from "./App.js";

describe("<App/>",()=>{

    it("Should render the app",()=>{
        render(<App/>);
    })
})