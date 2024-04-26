import styled from "styled-components";
import {FaArrowDown} from "react-icons/fa";

const Btn = styled.button`
    background-color: #0077B5;
    border: none;
    padding: 12px 20px;
    color: #fff;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
`


const Button = () => {
    return (
      <Btn><FaArrowDown/></Btn>
    )

}
export default Button