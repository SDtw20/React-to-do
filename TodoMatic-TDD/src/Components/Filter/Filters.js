import React from "react";

function Filters(props){
        return(
        <button type="button" className="btn toggle-btn" data-testid="filter_btn" aria-pressed={props.isPressed} onClick={()=>props.setFilter(props.name)}>
            {props.name}
        </button>
        );
}

export default Filters;