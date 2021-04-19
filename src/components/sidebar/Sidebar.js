import { Fragment } from 'react';
import './Sidebar.scss';

function Sidebar(props) {
  const { teamList, fetching } = props;

  return (
    <Fragment>
      <title>Join the team</title>
      <div className='sidebar'>
        <h1 className='sidebar-h1'>
          <span>Join</span>
          <span>the</span>
          <span>team</span>
        </h1>
        {fetching && <p>Fetching List...</p>}
        {!fetching &&
          <ul className='team-list'>
            {teamList.map( (employee, i) => {
              return <li key={i}>{employee}</li>
            })}
          </ul>}
      </div>
    </Fragment>
  )
}

export default Sidebar;