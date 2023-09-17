import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Slide from './components/Slide'
import './App.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class App extends Component {
  state = {
    active: initialSlidesList[0].id,
    tabsList: initialSlidesList,
    heading: initialSlidesList[0].heading,
    description: initialSlidesList[0].description,
    isClicked: false,
    isDescriptionClicked: false,
  }

  activeTabs = (id, heading, description) => {
    this.setState({active: id, heading, description})
  }

  onAddNewTab = () => {
    const newTab = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }

    this.setState(prevState => ({
      tabsList: [...prevState.tabsList, newTab],
      heading: 'Heading',
      description: 'Description',
    }))
  }

  onChangeHeading = e => {
    const {active} = this.state
    this.setState(prevState => ({
      tabsList: prevState.tabsList.map(each => {
        if (active === each.id) {
          return {...each, heading: e.target.value}
        }
        return each
      }),
      heading: e.target.value,
    }))
  }

  onChangeDescription = e => {
    const {active} = this.state
    this.setState(prevState => ({
      tabsList: prevState.tabsList.map(each => {
        if (active === each.id) {
          return {...each, description: e.target.value}
        }
        return each
      }),
      description: e.target.value,
    }))
  }

  onClickHeading = () => {
    this.setState({isClicked: true, isDescriptionClicked: false})
  }

  onClickDescription = () => {
    this.setState({
      isDescriptionClicked: true,
      isClicked: false,
    })
  }

  render() {
    const {
      active,
      tabsList,
      heading,
      description,
      isClicked,
      isDescriptionClicked,
    } = this.state

    return (
      <>
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
            className="website-logo"
          />
          <h1 className="website-heading">Nxt Slides</h1>
        </nav>
        <div className="bottom-section">
          <button
            type="button"
            onClick={this.onAddNewTab}
            className="new-slide-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon"
            />
            New
          </button>
          <div className="slide-container">
            <ol className="sidebar-slide-container">
              {tabsList.map((eachSlide, index) => (
                <Slide
                  eachSlide={eachSlide}
                  key={eachSlide.id}
                  activeTabs={this.activeTabs}
                  isActive={eachSlide.id === active}
                  slideNum={index + 1}
                />
              ))}
            </ol>
            <div className="active-slide-container">
              <div className="input-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickHeading}
                >
                  {isClicked ? (
                    <input
                      type="text"
                      value={heading}
                      className="heading-input"
                      onChange={this.onChangeHeading}
                    />
                  ) : (
                    <h1 className="heading">{heading}</h1>
                  )}
                </button>
              </div>
              <div className="input-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickDescription}
                >
                  {isDescriptionClicked ? (
                    <input
                      type="text"
                      value={description}
                      className="description-input "
                      onChange={this.onChangeDescription}
                    />
                  ) : (
                    <p className="description">{description}</p>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
