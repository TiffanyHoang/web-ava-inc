import React from 'react'

const photos = [
  {
    src: '/images/ava1.jpg',
  },
  {
    src: '/images/ava2.jpg',
  },
  {
    src: '/images/ava6.jpg',
  },
  {
    src: '/images/ava4.jpg',
  },
  {
    src: '/images/ava11.jpg',
  },
  {
    src: '/images/ava3.jpg',
  },
  {
    src: '/images/ava7.jpg',
  },
  {
    src: '/images/ava8.jpg',
  },
  {
    src: '/images/ava9.jpg',
  },
  {
    src: '/images/ava10.jpg',
  },
  {
    src: '/images/ava5.jpg',
  },
  {
    src: '/images/ava12.jpg',
  },
]

export const HomeGallery = () => (
  <div className="masonry">
    {photos.map(({ src }) => (
      <figure className="masonry-brick" key={src}>
        <img src={src} alt="" className="masonry-img" />
      </figure>
    ))}

    {/* eslint-disable react/jsx-one-expression-per-line, react/jsx-closing-tag-location */}
    <style jsx>{`
      .masonry {
        display: flex;
        flex-flow: row wrap;
        padding-left: .25rem;
        padding-top: .25rem;
        width: 100%;
      }

      .masonry-brick {
        flex: auto;
        min-width: 9rem;
        padding: 0 .25rem .25rem 0;
        margin: 0;
      }

      .masonry-brick:nth-child(4n+1){
        width: 16rem;
      }
      .masonry-brick:nth-child(4n+2){
        width: 20rem;
      }
      .masonry-brick:nth-child(4n+3){
        width: 12rem;
      }
      .masonry-brick:nth-child(4n+4){
        width: 24rem;
      }

      .masonry-img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    `}</style>
    {/* eslint-enable */}
  </div>
)
