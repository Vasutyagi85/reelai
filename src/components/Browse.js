
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  //fetch data from tmdb api and update store
  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>


       {/* MainContainer
           - VideoBackground
           - VideoTitle
       SecondaryContainer
           - MovieList *n
             - Moviecards *n 
      */}



    </div>
  )
}

export default Browse