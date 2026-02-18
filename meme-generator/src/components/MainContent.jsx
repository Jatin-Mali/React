import { useState, useEffect } from "react";
import "./MainContent.css"
export default function MainContent() {
  const [meme, setMeme] = useState({
    toptext: "I love you",
    bottomtext: "but as a freind",
    url: "../src/assets/meme-image.jpeg"
  })

  const [allMemes, setAllMemes] = useState([])
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data=> setAllMemes(data.data.memes)
      )
      
  }, [])

  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget)
    const toptext = formdata.get('top-text')
    const bottomtext = formdata.get('bottom-text')

    const random = Math.floor(Math.random() * allMemes.length)
    const randomUrl = allMemes[random].url
    setMeme(prev=> ({
      ...prev,
      url:randomUrl
    }))
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="form-container">

        <label htmlFor="top-text">Top Text
          <input id="top-text" type="text" name="top-text" placeholder="One does not simply" />
        </label>
        <label htmlFor="bottom-text">Bottom Text
          <input id="bottom-text" type="text" name="bottom-text" placeholder="Walk into Mordor" />
        </label>

        <button className="generate-btn">
          Get a new meme image 🖼️
        </button>
      </form>

      <div className="meme">
        <span>{meme.toptext}</span>
        <span>{meme.bottomtext}</span>
        <img src={meme.url} alt="MEME" />

      </div>
    </main>
  );
}
