import { Fragment } from 'react';
import { Helmet } from 'react-helmet';


import './NotFound.scss';

function NotFound() {

  return (
    <Fragment>
      <Helmet defaultTitle='Not Found!'/> 
      <div className='notFound'>
        <h2 className='notFound-h2'>Not Found!</h2>
        <p className='notFound-p'>Sorry, the page you are looking for cannot be found :(</p>
      </div>
    </Fragment>
  )

}

export default NotFound;