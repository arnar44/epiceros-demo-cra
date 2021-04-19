import { Fragment, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Sidebar from '../../components/sidebar/Sidebar';
import RegisterForm from '../../components/registerForm/RegisterForm';
import Welcome from '../../components/welcome/Welcome';

import './Register.scss';

function Register() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ agreed, setAgreed ] = useState(true);
  const [ inputError, setInputError ] = useState('');
  const [ agreementError, setAgreementError ] = useState(false);
  const [ submitted, setSubmitted ] = useState(false);

  const [ fetching, setFetching ] = useState(false);
  const [ teamList, setTeamList ] = useState([]);


  const fetchList = async () => {
    let response;
    setFetching(true);
    try {
      response = await fetch('https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6');
    } catch (error) {
      console.error(error);
      setFetching(false);
      setTeamList(['Error fetching team!']);
      return;
    }

    const json = await response.json();
    setFetching(false);
    
    if(!json.team) {
      setTeamList(['Error fetching team!']);
      return;
    }
    
    const teamList = json.team;
    const localNames = JSON.parse(window.localStorage.getItem('names'));
    const names = localNames || [];

    setTeamList(teamList.concat(names));
  }

  useEffect(() => {
    fetchList();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setInputError(' error');
      return;
    }
    
    setInputError('');

    if (!agreed) {
      setAgreementError(true);
      return;
    }

    const localNames = JSON.parse(window.localStorage.getItem('names'));
    const names = localNames || [];
    names.push(name);
    window.localStorage.setItem('names', JSON.stringify(names));
    
    setTeamList( prevList => [...prevList, name]);
    setAgreementError(false);
    setSubmitted(true);
    setName('');
    setEmail('');
  }

  return (
    <Fragment>
      <Helmet defaultTitle='Register'/>
      <Sidebar teamList={teamList} fetching={fetching} />
      {submitted && <Welcome buttonHandler={setSubmitted} />}
      {!submitted && 
              <RegisterForm 
              submitHandler={handleSubmit}
              nameHandler={setName}
              emailHandler={setEmail}
              agreementHandler={setAgreed}
              inputError={inputError}
              agreementError={agreementError}
            />
      }
    </Fragment>
  )
}

export default Register;