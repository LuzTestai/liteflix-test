import { useState } from 'react'
import './Modal.css'
import svgAttach from '../../assets/svg/clip.svg'
import ImageUploading from 'react-images-uploading'
import ProgressBar from './ProgressBar'

const ModalDowland = ({ children }) => {
  const [images, setImages] = useState([])
  const [showModal, setShowModal] = useState(true)
  const [showProgressBar, setShowProgressBar] = useState(false)

  const onChange = (imageList, addUpdateIndex) => {
    setShowProgressBar(true)
    // data for submit
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
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
              value={images}
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
                  {/* {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <div className="image-item__btn-wrapper">
                        <button onClick={() => onImageRemove(index)}>-</button>
                      </div>
                    </div>
                  ))} */}
                </div>
              )}
            </ImageUploading>
          )}

          <div class="container-input">
            <div class="col-6">
              <label>Nombre de la pelicula</label>
              <input class="input-info" />
            </div>

            <div class="col-6">
              <label>Categoria</label>
              <input class="input-info" />
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button class="modal-btn">Subir Pelicula</button>
          </div>
        </div>
      </div>
    </div>
  ) : null
}
export default ModalDowland
