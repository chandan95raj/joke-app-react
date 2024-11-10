const Message = ({ joke }) => {
  return (
    <>
      <div className="font-monospace">
        <h3>{joke.setup}</h3>
        <h4>{joke.punchline}</h4>
      </div>
    </>
  )
}

export default Message