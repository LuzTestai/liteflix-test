import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Home.css'
import { getOutstanding, getUpcoming, getPopular } from '../../redux/actions'
import { Outstanding } from '../Outstanding/Outstanding'
import { Upcoming } from '../Upcoming/Upcoming'
import { Popular } from '../Popular/Popular'
import { MyList } from '../../components/MyList/MyList'

const Home = () => {
  const { myList } = useSelector((state) => state.myList)
  const dispatch = useDispatch()
  const { outstanding, upcoming, popular } = useSelector(
    (state) => state.movies,
  )
  console.log('myList', myList)
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
      {myList.length > 0 ? <MyList myList={myList} /> : null}

      <Upcoming upcoming={upcoming} />
      <Popular popular={popular} />
    </div>
  )
}
export default Home
