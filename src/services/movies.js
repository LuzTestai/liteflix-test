import api from './api'

const moviesService = {}

moviesService.getOutstanding = function () {
  return api
    .get('/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20')
    .then((res) => res.data.results[0])
    .catch((err) => {
      throw err
    })
}
moviesService.getUpcoming = function () {
  return api
    .get('/upcoming?api_key=6f26fd536dd6192ec8a57e94141f8b20')
    .then((res) => res.data.results.slice(0, 8))
    .catch((err) => {
      throw err
    })
}
moviesService.getPopular = function () {
  return api
    .get('/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20')
    .then((res) => res.data.results.slice(0, 8))
    .catch((err) => {
      throw err
    })
}

// moviesServices.getCommentById = function (id) {
//   return api.get(`/comments/${id}`)
//     .then(res => res.data)
//     .catch(err => { throw err })
// }

export default moviesService
