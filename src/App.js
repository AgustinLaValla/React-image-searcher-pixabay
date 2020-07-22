import React, { useState, useEffect } from 'react';
import { Searcher } from './components/Searcher';
import { Results } from './components/Results';

function App() {

  const [fromResultComponent, setFromResultComponent] = useState(false);
  const [searchData, setSearchData] = useState({ search: '', page: 1 });
  const [imageList, setImageList] = useState([]);
  const [touched, setTouched] = useState(false);

  const getSearchedValue = (value) => {
    setFromResultComponent(true);
    setSearchData({ search: value, page: 1 });

  };

  const requestApi = async () => {
    const url = `https://pixabay.com/api/?key=17573744-beda57154c6bc8bb2e586dc85&q=${searchData.search}&per_page=30&page=${searchData.page}`;
    const query = await fetch(url);
    const result = await query.json();
    const images = result.hits;
    await setImageList([...images]);
    setTouched(true);
    setFromResultComponent(false);
    const jumboElement = document.querySelector('.jumbotron');
    jumboElement.scrollIntoView('smooth', 'end');
  }

  const prevPage = () => {
    const nextPage = searchData.page > 1 ? searchData.page - 1 : searchData.page;
    setSearchData({ ...searchData, page: nextPage });
  };

  const nextPage = () => {
    const nextPage = searchData.page + 1;
    setSearchData({ ...searchData, page: nextPage });
  }

  useEffect(() => {
    if (fromResultComponent) {
      requestApi(searchData.search);
    }
  }, [fromResultComponent])

  useEffect(() => {
    if (searchData.page > 0 && !fromResultComponent && touched) {
      requestApi();
    }
  }, [searchData.page])

  return (
    <div className="container pb-2">
      <div className="jumbotron" style={{ backgroundColor: '#a9a9a9 ' }}>
        <p className="lead text-center" style={{ color: '#000', fontWeight: 'bold' }}>Buscador de imágenes</p>
        <Searcher {...{ getSearchedValue }} />
      </div>
      <Results {...{ imageList, prevPage, nextPage }} />
      <NoImage touched={touched} imageLength={imageList.length} />
    </div>
  );
}

const NoImage = ({ touched, imageLength }) => {
  if (touched && imageLength === 0) {
    return (
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="alert alert-warning" >
            <span style={{ fontWeight: 'bold' }}>Your search has no results</span>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default App;
