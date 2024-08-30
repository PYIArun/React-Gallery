const ImageCard = ({image}) => {

    const tags = image.tags.split(',');
  return (
    

        <div className="m-[40px] max-w-sm bg-white-500 rounded-lg hover:scale-105 ease-in-out duration-200 overflow-hidden shadow-lg">
      <img src={image.webformatURL}  className="w-full hover:scale-105 duration-100 ease-in"></img>

      <div className="px-6 py-4">

        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>

        <ul>
          <li>
            <strong>Views: </strong>
          {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
          {image.downloads}
          </li>
          
          <li>
            <strong>Comments: </strong>
          {image.comments}
          </li>
        </ul>
      </div>

      <div className="px-6">
        <a 
          href={image.largeImageURL} 
          download 
          className="inline-block rounded-full bg-gray-500  text-white font-bold py-1 px-4"
        >
          Download
        </a>
      </div>
      <div className="px-6 py-4">


            {tags.map((tag, index)=>(
        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">

                {tag}
          
        </span>
            ))}


        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span> */}
      </div>
    </div>
  )
}

export default ImageCard;