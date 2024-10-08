import { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { fetchDataFromApi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiCOnfiguration,getGenres } from './store/slices/homeSlice';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import SearchResult from './pages/SearchResult/SearchResult';
import Explore from './pages/Explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
// import Header from './Components/Common/Header/Header.jsx'
import Footer from './Components/Common/Footer/Footer.jsx'
import Header from './Components/Common/Header/Header.jsx'



function App() {
  const dispatch=useDispatch();
  const {url}=useSelector(state=>state.home);

  useEffect(()=>{
    fetchApiConfig();
    genresCall();
  },[]);

  const fetchApiConfig=()=>{
    fetchDataFromApi("/configuration")
    .then((res)=>{
      const url={
        backdrop:res.images.secure_base_url+"original",
        poster:res.images.secure_base_url+"original",
        profile:res.images.secure_base_url+"original",
      };
      dispatch(getApiCOnfiguration(url));
    });
  }

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
        promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    // console.log(data);
    data.map(({ genres }) => {
        return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
};

  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='/:mediaType/:id' element={<Details/> }/>
          <Route path='/search/:query' element={<SearchResult/>}/>
          <Route path='/explore/:mediaType' element={<Explore/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
