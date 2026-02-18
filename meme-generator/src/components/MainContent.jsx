import { useEffect, useState } from "react";
import "./MainContent.css"
export default function MainContent() {
  const [meme,setMeme] = useState({
    topText: "I love you",
    bottomText: "But as a friend",
    url: "../src/assets/meme-image.jpeg"
  })

  const [allMemes,setAllMemes] = useState([])
  useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=> setAllMemes(data.data.memes))
  },[])

  function handleChange(e){
    const {name,value} = e.currentTarget
    setMeme(prev=>({
      ...prev,
      [name]:value
    }))
  }
   function handleSubmit(event){
    event.preventDefault();
    const formdata = new FormData(event.currentTarget)
    const toptext = formdata.get('top-text')
    const bottomtext = formdata.get('bottom-text')
    const random = Math.floor(Math.random() * allMemes.length)
    const randomUrl = allMemes[random].url
    setMeme(prev=>({
      ...prev,
      url:randomUrl
    }))
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="form-container">

        <label htmlFor="top-text">Top Text
          <input id="top-text" type="text" name="topText" placeholder="Top text" onChange={handleChange} value={meme.topText}/>
        </label>
        <label htmlFor="bottom-text">Bottom Text
          <input id="bottom-text" type="text" name="bottomText" placeholder="Bottom Text" onChange={handleChange} value={meme.bottomText} />
        </label>

        <button className="generate-btn">
          Get a new meme image 🖼️
        </button>
      </form>

      <div className="meme">
        <span>{meme.topText}</span>
        <span>{meme.bottomText}</span>
        <img
          src={meme.url}
          alt="meme"
          className="meme-img"
           
        />

      </div>
    </main>
  );
}
