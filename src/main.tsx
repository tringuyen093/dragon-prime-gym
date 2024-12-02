/* eslint-disable react-refresh/only-export-components */
import { StrictMode, Suspense } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Global } from '@emotion/react'
import { GlobalStyle } from '@/globalStyle'
import { Helmet } from 'react-helmet'
import mediaQuery from '@/utils/units/mediaQuery'
import styled from 'styled-components'
import style from '@/style'
import App from '@/App.tsx'
import Header from '@/components/header'
import './style.ts'
import 'swiper/css'
import 'swiper/css/navigation'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const MainWrapper = styled.div`
  width: 100vw;
  padding-top: 100px;
  height: calc(100vh - 100px);

  ${mediaQuery['belowDesktop']} {
    padding-top: 0px;
    height: 100vh;
  }
`

const Loading = () => {
  return <MainWrapper />
}

const RootApp = () => {
  return (
    <>
      <Global styles={[GlobalStyle, style]} />
      <Helmet>
        <meta
          property='og:URL'
          key='og:URL'
          content='https://i.imgur.com/YK9aIvL.jpg'
        />
        <meta
          property='og:image'
          key='og:image'
          content='https://i.imgur.com/YK9aIvL.jpg'
        />
        <meta property='og:type' key='og:type' content='website' />
        <meta property='og:title' key='og:title' content='Dragon Prime Gym' />
        <meta
          property='og:description'
          key='og:description'
          content='Health & Fitness'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Dragon Prime Gym' />
        <meta name='twitter:description' content='Health & Fitness' />
        <meta name='twitter:image' content='https://i.imgur.com/YK9aIvL.jpg' />
        <link
          rel='icon'
          type='image/svg+xml'
          href='https://i.imgur.com/YK9aIvL.jpg'
        />
      </Helmet>

      <BrowserRouter>
        <Header />

        <MainWrapper>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </MainWrapper>
      </BrowserRouter>
    </>
  )
}

root.render(
  <StrictMode>
    <RootApp />
  </StrictMode>
)
