import './Welcome.scss';

function Welcome(props) {
  const { buttonHandler } = props;

  return (
    <div className='welcome'>
      <h2 className='welcome-h2'>Welcome to the team!</h2>
      <h3 className='welcome-h3'>We have a lot of work todo, lets get started!</h3>
      <p className='welcome-p'>Don't forget to bring fika as per the terms ;)</p>
      <button 
        className='welcome-button' 
        onClick={ () => buttonHandler(false)}>
          Sign up more member
      </button>
    </div>
  )
}

export default Welcome;