import React from 'react'
import './css/project-cards.css'

export default function Card(props) {
  const { tags, githubLink, logoLink, name, description } = props

  let tagsElement
  if (tags) {
    tagsElement = tags.map((tag, key) => (
      <div key={key}>
        <p>{tag}</p>
      </div>)
    )
  }

  return (
    <div className="Card-Container">
      <a className="Card-Real-Link" href={githubLink}>
        <div className="Card-Header">
          <img className="Project-Logo"
            alt="the framework or language that the project is build upon"
            src={logoLink} />
          <h3 className="Card-Title">{name}</h3>
        </div>
        <div className="Card-Body">
          <div className="Card-Description">
            <p> {description}</p>
          </div>
          <div className="Card-Tag">
            {tagsElement}
          </div>
          <div className="Card-Link">
            View Project
          </div>
        </div>
      </a>
    </div>
  )
}
