import React from 'react';
import styled, { keyframes } from 'styled-components';


function Orb(){

      const moveOrb = keyframes`
         0%{
            transform: translate(0, 0);
         }
         50%{
            transform: translate(400px, 500px);
         }
         100%{
            transform: translate(0, 0);
         }
      `;

      const OrbStyled = styled.div`
         height: 70vh;
         width: 70vh;
         position: absolute;
         border-radius: 50%;
         margin-top: -37vh;
         margin-left: -37vh;
         background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
         filter: blur(100px);
         animation: ${moveOrb} 1s alternate linear infinite;
     `;
     return(
        <OrbStyled>
            
        </OrbStyled>
     )
}

export default Orb;