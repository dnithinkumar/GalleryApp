// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onClickThumbnail, isSelected} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const onSelectThumbnail = () => {
    onClickThumbnail(id)
  }

  const selectedThumbnailClassName = isSelected ? 'selected-thumbnail' : ''

  return (
    <li className="thumbnail-item">
      <button onClick={onSelectThumbnail} className="image-btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${selectedThumbnailClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
