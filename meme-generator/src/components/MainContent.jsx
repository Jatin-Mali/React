import { useState } from "react";
import "./MainContent.css"
export default function MainContent() {
  const [meme,setMeme] = useState({
    topText: "",
    bottomText: "",
    img: "../src/assets/meme-image.jpeg"
  })

   function handleSubmit(event){
    event.preventDefault();
    const formdata = new FormData(event.currentTarget)
    const toptext = formdata.get('top-text')
    const bottomtext = formdata.get('bottom-text')

    setMeme({
      ...meme,
      topText:toptext,
      bottomText:bottomtext,

    })
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
        <span>{meme.topText}</span>
        <span>{meme.bottomText}</span>
        <img
          src={meme.img}
          alt="meme"
          className="meme-img"
        />

      </div>
    </main>
  );
}
