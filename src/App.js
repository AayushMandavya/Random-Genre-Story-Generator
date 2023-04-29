import { useEffect,useState } from 'react';
import './App.css';

function App() {
  const [genre, setGenre] = useState([]);
  const [story, setStory] = useState([]);


  useEffect(() => {
    fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/")
      .then((response) => response.json())
      .then((data) => setGenre(data));

     fetch("https://binaryjazz.us/wp-json/genrenator/v1/story/")
      .then((response) => response.json())
      .then((data) => setStory(data));
  }, []);

  let  fetchnewstory=() => {
    fetch("https://binaryjazz.us/wp-json/genrenator/v1/story/")
    .then((response) => response.json())
    .then((data) => setStory(data));
  }

let  fetchnewgenre=() => {
  fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/")
  .then((response) => response.json())
  .then((data) => setGenre(data));
}
  return (
    <>

    <h1>
      Randomly Generate your own Genre and Story
    </h1>

    <div className='Genre'>
    <h2>
      {genre}
    </h2>
    <button onClick={fetchnewgenre}>
      Generate new Genre
    </button>
    </div>

    <div className='Story'>
    <h2>
      {story}
    </h2>
    <button onClick={fetchnewstory}>
      Generate new Story
    </button>
    </div>
  
    <p>
      Mandu Creations , A React API Project.
    </p>

  
    </>
  );
}

export default App;
