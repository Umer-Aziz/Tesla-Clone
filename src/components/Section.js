import React from 'react'
import styled from 'styled-components'

const Section = ({title,description,leftBtnText,rightBtnText,backgroundImg}) => {
    return (
        <Wrap bgImg={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                { rightBtnText &&
                <RightButton>
                {rightBtnText}
                </RightButton>  
                
                }
                
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
};

const Wrap = styled.div `
   width:100vw;
   height:100vh;
   background-size:cover;
   background-position:center;
   background-repeat:no-repeat;
   background-image:${ props => `url("/images/${props.bgImg}")` } ;
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   align-items:center;
`;

const ItemText = styled.div `
   padding-top:15vh;
   text-align:center;
`;

const ButtonGroup = styled.div `
  display:flex;
  margin-bottom:30px;
@media ( max-width: 768px ) {
      flex-direction:column;
  }
`;

const LeftButton = styled.div `
   background-color:rgba(23,26,32,0.8);
   height:40px;
   width:256px;
   font-weight: bold;
   color:white;
   cursor:pointer;
   display:flex;
   align-items:center;
   justify-content:center;
   border-radius:100px;
   opacity:0.85;
   text-transform:uppercase;
   font-size:12px;
   margin:8px;
`;

const RightButton = styled(LeftButton) `
 
   background:white;
   opacity:0.65;
   color:black;

`;

const DownArrow = styled.img `
    overflow-x:hidden;
    height:40px;
    animation:animateDown infinite 1.5s;
`;

const Buttons = styled.div ``;




export default Section
