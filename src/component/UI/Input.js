import styled from 'styled-components';
import Button from './Button';


export const Formcontainer = styled.form`

    display: flex;
    width : 100%;
    max-width: 600px;
    font-family: "Poppins", sans-serif;
    margin-bottom: 40px;
    

    .input-wrapper{
        background-color: #0077B5;
        padding: 5px;
        display: flex;
        width: 100%;
        margin-right: 10px;

        
    }
    

    input{
        flex: 1;
        border: none;
        outline: none
        font-size: 0.87rem;
        color: #475569;
        padding-left: 10px;



        &:focus{
        outline: none;
        }
    }

`

const Linkinput = ({}) =>{

    return(
        <Formcontainer>
            <div className='input-wrapper'>
                <input placeholder='Enter url' />
            </div>
            <Button/>
        </Formcontainer>
    )
}

export default Linkinput;