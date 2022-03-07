import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar';
import Image from './Image';
function App() {
  const [term, setterm] = useState("")
  const [image, setimage] = useState([])
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=26032069-b8b17b547c9592572d3a04f19&q=${term}&image_type=photo&pretty=true`).then(res => res.json()).then(data => setimage(data.hits))

  }, [term])
  return (
    <div>
      <Searchbar setterm={setterm} />
      <div className='flex flex-wrap justify-center py-6'>
        {image.length ? image.map((obj, ind) => {
          return <div key={ind}>
            <Image image={obj} />
          </div>
        }) : <div className='text-4xl my-5'>No Image to Display</div>}

      </div>
    </div>
  );
}
export default App;
