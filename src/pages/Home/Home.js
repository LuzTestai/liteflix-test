import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Home.css'
import { getOutstanding, getUpcoming, getPopular } from '../../redux/actions'
import { Outstanding } from '../Outstanding/Outstanding'
import { Upcoming } from '../Upcoming/Upcoming'
import { Popular } from '../Popular/Popular'

const Home = () => {
  const dispatch = useDispatch()
  const { outstanding, upcoming, popular } = useSelector(
    (state) => state.movies,
  )

  useEffect(() => {
    const setComments = async () => {
      try {
        await dispatch(getOutstanding())
        await dispatch(getUpcoming())
        await dispatch(getPopular())
      } catch (err) {
        console.log(err)
      }
    }
    setComments()
  }, [dispatch])

  return (
    <div class="home-wrap">
      <div
        class="home-bg"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${outstanding.backdrop_path})`,
        }}
      />
      <Outstanding />
      <Upcoming upcoming={upcoming} />
      <Popular popular={popular} />
    </div>
  )
}
export default Home
