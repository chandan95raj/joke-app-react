// eslint-disable-next-line react/prop-types
const Message = ({joke}) => {
  return (
    <>
    <h3 className="text-primary">{joke.setup}</h3>
    <h4 className="text-secondary">{joke.punchline}</h4>
    </>
  )
}

export default Message