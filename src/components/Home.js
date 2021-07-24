import React from 'react'

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

import HeroImage from './HeroImage'
import Grid from './Grid'
import Thumb from './Thumb'
import Spinner from './Spinner'
import SearchBar from './SearchBar'
import Button from './Button'

import { useHomeFetch } from '../hooks/useHomeFetch'

import NoImage from '../images/no_image.jpg'

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch()
  console.log(state)

  if (error) return <div>有些地方錯誤了！</div>

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? '搜尋結果' : `熱門電影`}>
        {state.results.map((movie) => {
          return (
            <Thumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
            />
          )
        })}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='看更多' callback={() => setIsLoadingMore(true)} />
      )}
    </>
  )
}

export default Home
