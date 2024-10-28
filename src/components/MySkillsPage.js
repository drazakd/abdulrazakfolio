import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} /> Data Scientiste et Analyste
</Title>
<Description>
Je maitrise l'art de faire parler les données à travers des interfaces graphique et interactives. je créé aussi des models et IA et les integres dans des appli web
</Description>
<Description>
<strong>Skills</strong>
    <ul>
        <li>
            Machine Learning
        </li>
        <li>
            Deep Learning
        </li>
    </ul>
</Description>
                <Description>
                    <strong>Tools</strong>
                    <ul>
                        <li>
                            VScode
                        </li>
                        <li>
                            Power BI
                        </li>
                        <li>
                            Pack Microsoft Office
                        </li>


                    </ul>
                </Description>

            </Main>
    <Main>
        <Title>
        <Develope width={40} height={40} /> Développeur web et mobile
</Title>
<Description>
J'apprécie l'entreprise ou la marque pour laquelle je crée, c'est pourquoi j'aime donner vie à de nouvelles idées.
</Description>
<Description>
<strong>Skills</strong>
<p>
Html, Css, Js, React, Redux, Bootstrap, Tailwind, Wordpress, Node, Django, MongoDB, MySQL etc.
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
VScode, Github, Pycharm, etc.
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
