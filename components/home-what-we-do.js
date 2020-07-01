import React from 'react'
import colors from '../config/colors'

export const HomeWhatWeDo = () => (
  <div className="container">
    <div className="contentContainer">
      <div className="content">
        <h2>What we do</h2>
        <h3>Run festivals of Vietnamese Traditional Music </h3>
        <h3>Perform at nursing homes</h3>
        <h3>Perform at Vietamese New Year festivals</h3>
        <h3>Perform at Annual Mid Autumn Fesitvals</h3>
        <h3>Join Moomba Festivals</h3>
      </div>
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
        background: url(/images/flowers.jpeg);
        background-size: cover;
        opacity: 0.1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
      }

      .contentContainer {
        max-width: 60rem;
        width: 100%;
        margin: 0 auto;
      }

      .content {
        width: 100%;
        padding: 1rem;
      }

      h2 {
        font-size: 2.5rem;
        color: ${colors.purple};
      }

      h3 {
        font-weight: 400;
        color: ${colors.purple};
      }
    `}</style>
    {/* eslint-enable */}
  </div>
)
