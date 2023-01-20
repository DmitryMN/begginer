import React, { useEffect, useState } from 'react';
import './index.scss';
import { photosApi } from './api/api';
import Collection from './components/Collection';


const categories = [
  { "name": "Все" },
  { "name": "Море" },
  { "name": "Горы" },
  { "name": "Архитектура" },
  { "name": "Города" }
]

function App() {

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState('');
  const [loading, setLoading] = useState(false);
  const [categoryId, setCategoryId] = useState(0);

  useEffect(() => {
    try {
      setLoading(false);
      photosApi.fetchPhotos(categoryId, page).then(data => {
        if (data.status === 200) {
          setLoading(true);
          setImages(data.data);
        }
      });
    } catch (e) {
      alert("Server error")
    }
  }, [categoryId, page]);

  const onChangeContent = (event) => {
    setSearchName(event.target.value);
  }



  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {
            categories.map((category, index) => <li key={index} onClick={ () => setCategoryId(index)} className={categoryId === index ? 'active': ''}>{category.name}</li>)
          }
        </ul>
        <input className="search-input" placeholder="Поиск по названию" onChange={onChangeContent} value={searchName} />
      </div>
      <div className="content">
        {
          loading ?
          images
            .filter(elem => elem.name.toLowerCase().includes(searchName.toLowerCase()))
            .map(image => <Collection key={image.id} name={image.name} photos={image.photos} />)
          : <div>Идет загрузка....</div>
        }
      </div>
      <ul className="pagination">
        {
          [...Array(5)].map((_, i) => <li onClick={() => {setPage(i + 1)}} key={i} className={`${page === (i + 1) ? 'active': ''}`}>{i + 1}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
