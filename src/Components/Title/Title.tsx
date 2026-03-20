import "./Title.scss"

function Title({text}: {text: string}) {
    return (
      <div className="title-container">
        <div className="title-line"></div>
        <div className="title-content">
          <span className="title-sparkle">✦</span>
          <h2>{text}</h2>
          <span className="title-sparkle">✦</span>
        </div>
      </div>
    )
}
  
export { Title };