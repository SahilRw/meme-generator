import React from 'react'
import memesData from '../memesData'

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomMeme = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomMeme].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }
  return (
    <main className='p-10'>
      <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-1 md:grid-rows-2 gap-4'>
        <input
          type="text"
          placeholder='Top Text'
          className='rounded indent-1.5 border border-gray-300 p-2' />
        <input
          type="text"
          placeholder='Bottom Text'
          className='rounded indent-1.5 border border-gray-300 p-2' />
        <button
          className='col-span-full cursor-pointer rounded bg-gradient-to-r from-purple-700 to-purple-900 text-white border-0'
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} alt="meme" className='max-w-full' />
    </main>
  )
}

export default Meme
