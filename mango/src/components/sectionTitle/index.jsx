const { default: styled } = require("styled-components");

export const SectionTitle = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color:black;
  @media screen and (max-width: 480px) {
  
   display:flex;
  }
 
  &:hover {
    background-color: transparent;
    border: none;
   
  }
  text-align: center;
`;