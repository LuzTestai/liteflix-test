import { useState } from 'react'
import './Modal.css'
import svgAttach from '../../assets/svg/clip.svg'
import ImageUploading from 'react-images-uploading'
import ProgressBar from './ProgressBar'

import { useDispatch, useSelector } from 'react-redux'
import { setMyList } from '../../redux/actions'

const ModalDowland = ({ children }) => {
  const dispatch = useDispatch()
  const { myList } = useSelector((state) => state.myList)
  const [image, setImage] = useState([])
  const [showModal, setShowModal] = useState(true)
  const [showProgressBar, setShowProgressBar] = useState(false)
  const [category, setCategory] = useState(null)
  const [nameMovie, setNameMovie] = useState(null)
  console.log('myList', myList)
  const sendNewMovie = async () => {
    const movie = {
      name: nameMovie,
      category: category,
      image: image,
    }
    console.log('movie pepe', movie)
    try {
      await dispatch(setMyList(movie))
    } catch (err) {
      console.log(err)
    }
  }

  const onChange = async (imageList, addUpdateIndex) => {
    setShowProgressBar(true)
    console.log('imagesList', imageList[0].file)
    console.log(imageList, addUpdateIndex)

    setImage(imageList)
  }

  return showModal ? (
    <div class="modal-custom">
      <div class="wrap-modal">
        <div class="content-inputs">
          <div class="cross">x</div>
          {showProgressBar ? (
            <ProgressBar showProgressBar={showProgressBar} />
          ) : (
            <ImageUploading
              value={image}
              onChange={onChange}
              dataURLKey="data_url"
            >
              {({ onImageUpload, isDragging, dragProps }) => (
                <div
                  style={isDragging ? { color: 'red' } : null}
                  onClick={onImageUpload}
                  {...dragProps}
                  class="container-attach-file"
                >
                  <img src={svgAttach} alt="clip" />
                  <p class="text-dowland">
                    Agregar Archivo <span>o arrastrarlo y soltarlo aquí</span>
                  </p>
                  &nbsp;
                </div>
              )}
            </ImageUploading>
          )}

          <div class="container-input">
            <div class="col-6">
              <label>Nombre de la pelicula</label>
              <input
                onChange={(e) => setCategory(e.target.value)}
                class="input-info"
              />
            </div>

            <div class="col-6">
              <label>Categoria</label>
              <input
                onChange={(e) => setNameMovie(e.target.value)}
                class="input-info"
              />
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button onClick={() => sendNewMovie()} class="modal-btn">
              Subir Pelicula
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null
}
export default ModalDowland
