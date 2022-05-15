import React from 'react'
import styled  from 'styled-components';
import mobile from './responsive';


import image1 from '../../assets/images/photo23.jpg';
import image2 from '../../assets/images/photo19.jpg';
import image3 from '../../assets/images/photo22.jpg';



const Container = styled.div`
  height: 100vh;
  font-size: 1.5em;
  text-align: center;
  margin-top: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #fcae07;
`
const Wrapper = styled.div`
display: flex;
margin: 5px;
${mobile({display: "flex", flexDirection:"column"})}
background-color: #fcae07;

`

const Left = styled.div`
justify-content: flex-start;

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
    background-color: #eee;
    border: none;
    height: 2px;
    width: 25%;
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

`

// const  BR = styled.div`
// `
const  Image = styled.img`
height: 70vh;
width: 100vh;
float: right;
`
const Item1 = styled.p`
display: left;
`
const Item2 = styled.div`

`
const Item3 = styled.div`
justify-content: start;
`

const SmallImage = styled.img`
margin: 5px;
height: 34vh;
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
            <Item1>Amos Tina Nfon</Item1>
            <Item1>Duis sint proident est elit in. Quis aliquip id commodo pariatur ex irure dolor amet. Dolore id minim elit ullamco veniam. Mollit nisi laboris id qui incididunt sint cupidatat fugiat. Lorem minim duis officia laboris veniam nostrud duis id. Qui pariatur eu quis exercitation eiusmod excepteur sit tempor elit.
</Item1>
            <Item3>
            <SmallImage src={image1}/>
            <SmallImage src={image2}/>
            <SmallImage src={image3}/>
            </Item3>
            </Item2>
            <Image src="https://i.ytimg.com/vi/Rwxq-oS1yG4/maxresdefault.jpg"/>
          </BL>
        </Body>
        <Footer></Footer>
    </Container>
  )
}

export default AppFirst;


// const Container = styled.div`
// padding-top: 20px;
// margin-top: 40px;
// height: 100vh;
// background-color: #fcae07;
// `

// const Wrapper = styled.div`
//   display: flex;
//   margin-top: 10px;
//   padding-top: 10px;
//   ${mobile({display: "flex", flexDirection:"column"})}
// `

// const Right = styled.div`
//   flex:1;
// `
// const Left = styled.div`
//   flex: 1;
// `

// const Image = styled.img`
// width: 100vh;
// `
// const One = styled.p`

// `

// const Two = styled.div`
  
// `

// const Three = styled.div`
// `

// const SmallImage = styled.img`
// width: 20vh;
// margin: 5px;
// border-radius: 5px;
// `


// const AppFirst = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Left>
//           @The_Process
//           <One>Amos TINA NFON</One>
//           <Two>Lorem fugiat ad est dolore quis aliquip deserunt mollit elit quis dolore Lorem magna. Ex cupidatat reprehenderit elit quis incididunt duis duis consectetur veniam fugiat fugiat aliqua ut non. Ad eiusmod sit Lorem non voluptate consequat esse ea ad cupidatat fugiat mollit et anim.

// Pariatur sit est commodo adipisicing nisi est dolor aliquip commodo incididunt ad. Ipsum culpa excepteur eiusmod sit esse sunt officia irure commodo elit Lorem. Ipsum dolore aliquip nisi commodo pariatur cupidatat culpa aliqua Lorem proident.</Two>
//         <Three>
//           <SmallImage src={image1}/> 
//           <SmallImage src={image2}/> 
//           <SmallImage src={image3}/> 
//         </Three>
//         </Left>
//         <Right>
//           <Image src="https://www.freepsdbazaar.com/wp-content/uploads/2020/06/sky-replace/sky-rain/rain-10-freepsdbazaar.jpg"/>
//         </Right>
//       </Wrapper>
//     </Container>
//   )
// }


//export default AppFirst;