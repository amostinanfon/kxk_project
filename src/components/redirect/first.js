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
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #000;
`
const Wrapper = styled.div`
display: flex;
margin: 5px;
${mobile({display: "flex", flexDirection:"column"})}
/* background-color: #fcae07; */

`

const Left = styled.div`
justify-content: flex-start;
margin-left: 20px;
padding-left: 20px;

`
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

const Hr = styled.hr`
    background-color: #fcae07;
    border-radius: 5px;
    border: none;
    height: 5px;
    width: 40%;
`

const Body = styled.div`
margin-bottom: 50px;
padding-bottom: 50px;
`

const  BL = styled.div`
display: flex;
margin: 10px;
`
const Footer = styled.div`
background-color: black ;
height: 25vh;
`

const  Amos = styled.div`
margin: 20px;
padding: 20px;

`


const  Image = styled.img`
height: 100vh;
width: 100vh;
float: right;
border-radius: 5px;
`

const BR = styled.br`

`

const Item1 = styled.div`
color: #fcae07;
font-size: 60px;
font-weight: 1000;
text-transform: uppercase;
`
const Item2 = styled.div`

`
const Item3 = styled.div`
justify-content: start;
`
const Item4 = styled.span`
`

const SmallImage = styled.img`
margin: 5px;
height: 50vh;
width: 28vh;
border-radius: 20px;
`

const AppFirst = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            @Zacharia
            <Hr/>
          </Left>
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
              <Item1>Amos</Item1>
              <Item1>Nfon Amos</Item1>
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
            <Image src="https://i.ytimg.com/vi/Rwxq-oS1yG4/maxresdefault.jpg"/>
          </BL>
        </Body>
        <Hr/>
    </Container>
  )
}

export default AppFirst;


