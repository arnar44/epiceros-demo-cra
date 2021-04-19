import './RegisterForm.scss';

function RegisterForm(props) {
  const { 
    submitHandler,
    nameHandler, 
    emailHandler, 
    agreementHandler, 
    inputError, 
    agreementError } = props;


  return (
    <form className='register-form' onSubmit={ e => submitHandler(e)}>
      <h2 className='register-h2'>Register</h2>
      <h3 className='register-h3'>Team player - Be positive - Beat yesterday</h3> 
      <p className='register-p'>
        Together we re-define the experience of online gaming through gamification and novel technical solutions.
      </p>
      <input className={`register-input${inputError}`} type='text' placeholder='Name' onChange={e => nameHandler(e.target.value)} />
      <input className={`register-input${inputError}`} type='text' placeholder='Email' onChange={e => emailHandler(e.target.value)} />
      <div className='register-term'>
        <input className='register-box' type='checkbox' name='terms' id='terms' defaultChecked onChange={e => agreementHandler(e.target.checked)} />
        <label htmlFor='terms'>
          I agree to the terms
          <span className='register-secret'> and I bring nice fika when corona is over ;)</span>
        </label>
      </div>
      
      {inputError && <p>Please insert name and email to sign up</p>}
      {agreementError && <p>Please agree to terms to sign up</p>}
      
      <button type='submit' className='register-button'>I'm in, sign me up</button>
    </form>
  )
}

export default RegisterForm;