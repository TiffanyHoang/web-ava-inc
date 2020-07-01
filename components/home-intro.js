import React from 'react'
import colors from '../config/colors'

export const HomeIntro = () => (
  <div className="container">
    <div className="content">
      <h1>Australian Vietnamese Arts</h1>
      <h2>The group is made up of Vietnamese musicians, poem writers, song writers, dancers</h2>
    </div>

    {/* eslint-disable react/jsx-one-expression-per-line, react/jsx-closing-tag-location */}
    <style jsx>{`
      .container {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      .container::after {
        content: "";
        background: url(/images/art.jpeg);
        background-size: cover;
        opacity: 0.2;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
      }

      .content {
        padding: 1rem;
      }

      h1 {
        color: ${colors.pink};
        border-bottom: 4px solid ${colors.pinkLight};
        display: inline-block;
        font-size: 3rem;
        margin-bottom: 0;
      }

      h2 {
        color: ${colors.pink};
        font-weight: 400;
        font-style: italic;
      }
    `}</style>
    {/* eslint-enable */}
  </div>
)
