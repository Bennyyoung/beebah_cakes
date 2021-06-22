import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/globalStyle';

import HeaderMain from './Headers/HeaderMain';
import HeaderMinor from './Headers/HeaderMinor';


const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  width: 90%;

`

const MainSection = styled.main`
  margin: 30px 0;
  width: 100%;
`

const FooterStyled = styled.footer`
  width: 100%;
  padding: 20px;
  text-align: right;

  @media (max-width: 600px) {
    text-align: center;

  }
`
const ExternalLink = styled.a`
  color: #c59fc5;
`


class Layout extends React.Component {

  componentDidMount() {
    if (window.Snipcart) {
      window.Snipcart.api.configure('show_continue_shopping', true);
    }
  }


  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const siteName = "Beebah Cakes"
    let header

    if (location.pathname === rootPath) {
      header = (
        <HeaderMain shopName={siteName}>
        </HeaderMain>
      )
    } else {
      header = (
        <HeaderMinor shopName={siteName}>
        </HeaderMinor>
      )
    }

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <PageWrapper>
            {header}
            <MainSection>{children}</MainSection>
            <FooterStyled>
              <div style={{ width: '35%' }}>
                <ul style={{ paddingBottom: '7px' }}>
                  <a href="https://www.instagram.com">
                    <img src="https://img.icons8.com/color/24/000000/instagram-new.png" />
                  </a>
                  <a href="https://web.facebook.com">
                    <img src="https://img.icons8.com/fluent/24/000000/facebook-new.png" />
                  </a>
                  <a href="https://twitter.com">
                    <img src="https://img.icons8.com/fluent/24/000000/twitter.png" />
                  </a>
                  <a href="https://youtube.com">
                    <img src="https://img.icons8.com/color/24/000000/youtube.png" />
                  </a>
                </ul>
              </div>
              <div style={{ width: '90.3%', textAlign: 'center', paddingBottom: '10px' }}>
                <div>
                  <strong><img src="https://img.icons8.com/color/24/000000/home.png" /></strong> No 7 IMO Close Shell Estate Edjeba Warri Delta State.<br />
                </div>

                <div>
                  <strong><img src="https://img.icons8.com/color/24/000000/phone.png" /></strong> 09016950777

                </div>
              </div>
              <div>
                <strong>Beebah Cakes
                  - Made by <ExternalLink href="https://www.bloomhubng.com/" target="_blank" rel="noopener noreferrer">Bloomhub Limited</ExternalLink>
                </strong>

              </div>
            </FooterStyled>
          </PageWrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
