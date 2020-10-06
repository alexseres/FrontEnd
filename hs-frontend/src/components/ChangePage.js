import React from "react";
import styled from "styled-components";

const ChangePage = (props) => {
    const StyledButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 15px;
    color: black;
    border: 2px solid chartreuse;
  `;

    return (
        <div>
            {props.actualPage > 1 ? (
                <StyledButton onClick={() => props.changePage("back")}>
                    Back
                </StyledButton>
            ) : null}
            {props.allDataCount - 1 > props.actualPage * props.maxItem ? (
                <StyledButton onClick={() => props.changePage("next")}>
                    Next
                </StyledButton>
            ) : null}
        </div>
    );
};

export default ChangePage;