import styled from 'styled-components';

export const FeedbackBtn = styled.button`text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  border-radius: 45px;
  margin: 10px 20px;
text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
   background: ${p => p.theme.white};
  box-shadow: ${p => p.theme.boxShadow};
  transition: .10s;
  cursor: pointer;
  border: ${p => p.theme.border}
}
:active {
  background: #2EE59D;
  box-shadow: ${p => p.theme.boxShadowHover};
  color: ${p => p.theme.colors.white};
  transform: translateY(-7px);
}`;
