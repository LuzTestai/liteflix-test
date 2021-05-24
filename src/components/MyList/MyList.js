import './MyList.css'

export const MyList = ({ myList }) => {
  return (
    <div class="wrap-movies">
      <h2 class="mylist-text">Mi Lista</h2>
      <div class="wrap-movies-row row-mylist">
        {myList.map((movie, index) => (
          <div class="col-3 wrap-img" key={index}>
            <img src={`${movie.image[0].data_url}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  )
}
