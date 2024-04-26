import styled from 'styled-components';
// import {useForm} from 'react-hook-form';
import Linkinput  from './UI/Input';

const Section = styled.section `  
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    h1{
        font-family: "Poppins";
        color: #475569;
        text-align: center;
        font-weight: 600;
    }

    iframe{
        border: 1px solid #475569;

    }

  
`


const Home = () => {
    return(
        <Section>
            <h1>Linkedin Video Downloader</h1>
            <Linkinput/>
            <iframe></iframe>

        </Section>
    )
}

export default Home;