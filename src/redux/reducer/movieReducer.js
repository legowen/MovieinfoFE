import {createSlice} from "@reduxjs/toolkit"

let initialState={
  popularMovies:{},
  allListMovies:{},
  topRateMovies:{},
  upcomingMovies:{},
  genreList:{},
  loading:true,
  searchMovie:{},
  reviewList:{},
  movieVideoList:{},
  recommendationList:{},
  banner:{},
  home:true,
  searchTitleList:{},
 
}

const movieSlice=createSlice({
  name:'movie',
  initialState,
  reducers:{
   getAllmovies(state,action){
    state.popularMovies=action.payload.pop
    state.allListMovies=action.payload.all
    state.topRateMovies=action.payload.top
    state.upcomingMovies=action.payload.up
    state.genreList=action.payload.genre
    state.banner=action.payload.banner
    state.loading=false
   
  

  
   },
   getSearchMovies(state,action){
    state.loading=false
    state.searchMovie=action.payload.search
    state.genreList=action.payload.genre
    state.reviewList=action.payload.review
    state.movieVideoList=action.payload.MovieVideo
    state.recommendationList=action.payload.recommend
    state.movieVideoList=action.payload.movieVideo
    

   },
   loadingHandler(state,action){
    state.loading=true
   },
   getError(state,action){
    state.loading=false
   },
   
   searchByTitle(state,action){
    state.searchTitleList=action.payload.searchTitle
    
   },
  

  }
 
});

export const movieActions = movieSlice.actions
export default movieSlice.reducer