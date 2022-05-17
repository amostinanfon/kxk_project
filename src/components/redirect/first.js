import React from 'react'
import styled  from 'styled-components';
import mobile from './responsive';


import image1 from '../../assets/images/photo23.jpg';
import image2 from '../../assets/images/photo19.jpg';
import image3 from '../../assets/images/photo21.jpg';



const Container = styled.div`
  height: 100%;
  color: white;
  margin-top: 40px;
  padding-top: 30px;
  padding-bottom: 50px;
  padding-right: 10px;
  background-color: #000;
`
const Wrapper = styled.div`
display: flex;
padding: 10px;
${mobile({display: "flex", flexDirection:"column"})}
/* background-color: #fcae07; */

`

// const Left = styled.div`
// margin-left: 20px;
// padding-left: 20px;
// font-size: 20px;
// font-weight: 600  ;
// text-transform: uppercase                                                                                                                                                                                                                                                                                                                                                       0px;
// `

const Right = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
margin-right: 40px;
padding-right: 40px;
${mobile({display: "none"})}

`
const MenuItem = styled.span`
justify-content: space-between;
font-size: 20px;
font-weight: 600;
margin-left: 50px;
margin-right: 50px;
align-items: center;
text-transform: uppercase;
/* ${mobile({display: "none"})} */
`

const Hr1 = styled.hr`
    background-color: #fcae07;
    border-radius: 5px;
    border: none;
    height: 3px;
    width: 30px;
    margin: 0px;
`

const Hr2 = styled.hr`
    background-color: #fcae07;
    border-radius: 5px;
    border: none;
    height: 5px;
    width: 25%;
    margin-top: 0px;
    padding-top: 0px;
`

const Body = styled.div`
margin-bottom: 50px;
`

const  BL = styled.div`
display: flex;
margin: 10px;
`


const  Amos = styled.div`
margin: 20px;
padding: 20px;

`


const  Image = styled.img`
width: 100%;
border-radius: 15px;
`

const BR = styled.br`
`

const Item1 = styled.div`
line-height: 1em;
word-spacing: 0.25em;
margin-bottom: 30px;
padding-bottom: 20px;
margin-top: -50px;
padding-top: -20px;
color: #fcae07;
font-size: 50px;
width: 90%;
font-weight: 600;
text-transform: uppercase;
`
const Item2 = styled.div`

`
const Item3 = styled.div`
justify-content: start;
`
const Item4 = styled.div`
width: 70%;
`

const SmallImage = styled.img`
margin: 5px;
height: 50vh;
width: 25%;
border-radius: 20px;
`
const Footer = styled.div`
background-color: black ;
`

const AppFirst = () => {
  return (
    <Container>
        <Wrapper>
          <MenuItem>
            @Zacharia
            <Hr1/>
          </MenuItem>
          <Right>
            <MenuItem>Menu</MenuItem>
            <MenuItem>styled</MenuItem>
            <MenuItem>AEsthetic</MenuItem>
          </Right>
        </Wrapper>
        <Body>
          <BL>
            <Item2>
              <Amos>
              <Item1>TINA NFON <BR/>Amos</Item1>
            <Item4>Duis sint proident est elit in. Quis aliquip id commodo pariatur ex irure dolor amet.
               Dolore id minim elit ullamco veniam. Mollit nisi laboris id qui incididunt sint cupidatat fugiat. 
               Lorem minim duis officia laboris veniam 
              nostrud duis id. Qui pariatur eu quis exercitation eiusmod excepteur sit tempor elit.  
            </Item4>
            </Amos>
            <Item3>
            <SmallImage src={image1}/>
            <SmallImage src={image2}/>
            <SmallImage src={image3}/>
            </Item3>
            </Item2>
            <Image src="https://mocah.org/thumbs/4584401-women-closed-eyes-bare-shoulders-face-neon-purple-background-body-paint-colorful.jpg"/>
          </BL>
        </Body>
        <Hr2/>
        <Footer></Footer>
    </Container>
  )
}

export default AppFirst;


