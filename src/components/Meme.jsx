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

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main className='p-10'>
      <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-1 md:grid-rows-2 gap-4'>
        <input
          type="text"
          placeholder='Top Text'
          className='rounded indent-1.5 border border-gray-300 p-2'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder='Bottom Text'
          className='rounded indent-1.5 border border-gray-300 p-2'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          className='col-span-full cursor-pointer rounded bg-gradient-to-r from-purple-700 to-purple-900 text-white border-0'
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className='relative'>
        <img src={meme.randomImage} alt="meme" className='rounded max-w-full' />
        <h2 className="meme--text absolute w-4/5 text-center left-1/2 transform -translate-x-2/4 text-white tracking-wide top-0">{meme.topText}</h2>
        <h2 className="meme--text absolute w-4/5 text-center left-1/2 transform -translate-x-2/4 text-white tracking-wide bottom-0">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme


