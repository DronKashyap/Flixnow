import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Requests from './Requests'
import Rows from './Components/Rows'
import Banner from './Components/banner'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Rows title='Popular' fetchurl={Requests.fetchpopular} />
      <Rows title='Now Playing' fetchurl={Requests.fetchnowplaying} />
      <Rows title='Top Rated' fetchurl={Requests.fetchtoprated} />
      <Rows title='Upcoming' fetchurl={Requests.fetchupcoming} />
    </>
  )
}

export default App

