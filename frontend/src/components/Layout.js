import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  background: red;
  margin: 12em auto 4rem auto;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
`;
const ContentStyles = styled.div`
  background: white;
  padding: 2em;
`;
function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </div>
  );
}

export default Layout;
