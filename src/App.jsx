import { useEffect } from "react"
import { useState } from "react"
import ImageCard from "./components/ImageCard";
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [term, setTerm] = useState('');

  useEffect(()=>{




    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {

      if (term.trim() === "") {
        setImages(data.hits); // Clear images when the term is empty
        setIsLoading(false);
        return;
      }

      const filteredImages = data.hits.filter(image => 
        image.tags.toLowerCase().includes(term.toLowerCase())
      );
      setImages(filteredImages);

      setIsLoading(false);
      console.log(data.hits);
      
    })
    .catch(err =>console.log(err));

  },[term]);


  return (
    
    <div className="container flex justify-center flex-col mx-auto items-center">
      
      <div className="">

      <input type="text"
      onChange={e=> setTerm(e.target.value)}
      placeholder="Search an Image by Tags" className="m-5 p-2 px-[60px] placeholder-black bg-gray-300 flex text-center justify-center rounded-full" />
      </div>


      {isLoading? <h1 className="text-7xl text-center mx-auto mt-32">Loading...</h1>: 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {
        images.map(image=>(

          <ImageCard key={image.id} image={image} />
          
        ))
      }

      </div>
      }
      

    </div>
  )
}

export default App