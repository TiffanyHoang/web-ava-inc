import React from 'react'
import colors from '../config/colors'

export const HomeWhoWeAre = () => (
  <div className="container">
    <div className="content">
      <h2>Who we are</h2>
      <h3 className="bold">Established in 2010</h3>
      <h3>The group is made up of Vietnamese musicians, poem writers, song writers, dancers.  It is a colourful and exciting group. The members are dedicated and enjoy belonging to a group and performing at a variety of functions and Festivals e.g. Multicultural Festivals, Community Functions, Nursing Homes, Educational and Charity Fundraising events, around Victoria and interstate</h3>
      <h3>Through music and dance, it embarks on a mission to support Multiculturalism and harmony in society. It also aims to maintain and promote the beauty and distinctive aspects of Vietnamese culture. Members are all volunteers</h3>
      <h3>Our organisation is approved to host job seekers who are undertaking voluntary work as an approved activity</h3>
      <h3><strong>If you love Vietnamese music and dance and eager to volunteer you can join our group</strong></h3>

    </div>

    {/* eslint-disable react/jsx-one-expression-per-line, react/jsx-closing-tag-location */}
    <style jsx>{`
      .container {
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        background-color: ${colors.purple};
      }

      .content {
        max-width: 60rem;
        width: 100%;
        padding: 1rem;
      }

      h2 {
        font-size: 2.5rem;
        color: ${colors.pinkLight};
      }

      h3 {
        font-weight: 300;
        color: white;
      }

      .bold {
        font-weight: bold;
      }
    `}</style>
    {/* eslint-enable */}
  </div>
)
