import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-image: ${p => p.colors.footerBack};
  background-color: ${p => p.colors.footerBack};

  .hr{
    color: ${props => props.colors.color};
    height: 2px;
  }

  .link{
    display: block;
  }

  a {
    color: ${p => p.colors.color};
    display: block;
    font-weight: bold;
  }
`;

export default FooterWrapper;