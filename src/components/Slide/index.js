import './index.css'

const Slide = props => {
  const {eachSlide, isActive, activeTabs, slideNum} = props
  const {id, heading, description} = eachSlide

  const onActiveTab = () => {
    activeTabs(id, heading, description)
  }

  const bgColor = isActive ? 'bg-color' : 'card'

  return (
    <li testid={`slideTab${slideNum}`}>
      <button type="button" onClick={onActiveTab} className="slides-container">
        <p>{slideNum}</p>
        <div className={bgColor}>
          <h1 className="heading-sidebar">{heading}</h1>
          <p className="description-sidebar">{description}</p>
        </div>
      </button>
    </li>
  )
}

export default Slide
