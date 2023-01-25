import "./HeadLine.css"

function HeadLine({ text }) {
  return (
    <div className="headline">
      <h2 className="headline__text">{text}</h2>
    </div>
  )
}

export default HeadLine
