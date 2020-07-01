import React from 'react'
import { Page } from '../components/layout-page'
import { HomeIntro } from '../components/home-intro'
import { HomeWhoWeAre } from '../components/home-who-we-are'
import { HomeGallery } from '../components/home-gallery'
import { HomeWhatWeDo } from '../components/home-what-we-do'
import { HomeContact } from '../components/home-contact'

export default () => (
  <Page>
    <HomeIntro />
    <HomeWhoWeAre />
    <HomeGallery />
    <HomeWhatWeDo />
    <HomeContact />
  </Page>
)
