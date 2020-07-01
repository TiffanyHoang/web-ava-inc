import React from 'react'
import colors from '../config/colors'

export const HomeContact = () => (
  <div className="container">
    <div className="contentContainer">
      <div className="content">
        <h2>Contact</h2>

        <h3>Fouding Director / President - Thuy Dang</h3>
        <h3>Vice President 1 - Tina Nguyen</h3>
        <h3>Vice President 2 - Giang Quach</h3>
        <h3>Secretary - Mai Nguyen</h3>
        <h3>Treasurer - Le Vo</h3>
        <h3>Mobile: 0438 933 923</h3>
        <h3>Tel: 9386 6522</h3>
        <h3>
          {'Email: '}
          <a href="mailto:ava.melb@gmail.com">ava.melb@gmail.com</a>
        </h3>
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
        background-color: ${colors.pinkLight};
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
        color: ${colors.purple};
        font-weight: 400;
      }
    `}</style>
    {/* eslint-enable */}
  </div>
)
