import { useEffect, useState } from 'react'
import './Modal.css'
import svgAttach from '../../assets/svg/clip.svg'
import Liteflix from '../../assets/svg/liteflix.svg'
import ImageUploading from 'react-images-uploading'
import ProgressBar from './ProgressBar'

import { useDispatch } from 'react-redux'
import { setMyList } from '../../redux/actions'

const ModalDowland = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch()
  const [image, setImage] = useState([])
  const [showProgressBar, setShowProgressBar] = useState(false)
  const [category, setCategory] = useState('')
  const [nameMovie, setNameMovie] = useState('')
  const [submitEnabled, setSubmitEnabled] = useState(false)
  const [congratulations, setCongratulations] = useState(false)
  console.log(
    'image:',
    image,
    'nameMovie:',
    nameMovie,
    'category:',
    category,
    'showModal',
    showModal,
  )
  const sendNewMovie = async () => {
    const movie = {
      name: nameMovie,
      category: category,
      image: image,
    }
    try {
      await dispatch(setMyList(movie))
      setCongratulations(true)
    } catch (err) {
      console.log(err)
    }
  }

  const closeModal = () => {
    setCategory('')
    setNameMovie('')
    setImage([])
    setShowProgressBar(false)
    setCongratulations(false)
    setShowModal(false)
  }

  useEffect(() => {
    if (image.length > 0 && nameMovie.length > 0 && category.length > 0) {
      setSubmitEnabled(true)
    } else {
      setSubmitEnabled(false)
    }
  }, [image, category, nameMovie])

  const onChange = async (imageList, addUpdateIndex) => {
    setShowProgressBar(true)
    setImage(imageList)
  }

  return showModal ? (
    <div class="modal-custom">
      <div class="wrap-modal">
        {!congratulations ? (
          <div class="content-inputs">
            <div class="cross" onClick={() => closeModal()}>
              x
            </div>
            {showProgressBar ? (
              <ProgressBar
                showProgressBar={showProgressBar}
                setShowProgressBar={setShowProgressBar}
              />
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
              <button
                disabled={!submitEnabled}
                onClick={() => sendNewMovie()}
                class={`modal-btn ${
                  submitEnabled ? 'enabled-btn' : 'disables-btn'
                }`}
              >
                Subir Pelicula
              </button>
            </div>
          </div>
        ) : (
          <div class="content-congratulations">
            <div class="cross" onClick={() => closeModal(false)}>
              x
            </div>
            <div>
              <img className="mr-2" src={Liteflix} alt="logo" />
            </div>
            <div class="wrap-text-congratulations">
              <h1>Felicitaciones!</h1>
              <p>
                <strong>Liteflix {nameMovie}</strong> fue correctamente subido a
                la categoría
                <strong> {category}</strong>
              </p>
            </div>
            <div>
              <button
                class="modal-btn enabled-btn btn-close "
                onClick={() => closeModal()}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : null
}
export default ModalDowland
