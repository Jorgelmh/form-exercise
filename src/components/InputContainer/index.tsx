import React, {useState} from 'react'
import { StyledContainer } from './styles'

/**
 *  ============================
 *       INPUT CONTAINER
 *  ============================
 * 
 *  Styles for every input field
 */
const InputContainer: React.FC = (props) => {
    return (
        <StyledContainer data-aos="zoom-in">
            {props.children}
        </StyledContainer>
    )
}

export default InputContainer