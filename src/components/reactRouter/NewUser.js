import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { NavLink } from './ReactRouter';

const NewUser = ({ title }) => {
  return (
    <div className="row">
      <div className="col">
        <p>New User</p>

        <header>
          <h2>User List:</h2>
          {[...Array(20).keys()].map((index) => (
            <div key={index}>
              <NavLink
                to={`${index}`}
                className="text-dark"
                activeClassName={'active__third '}
              >
                User {index}
              </NavLink>
            </div>
          ))}
        </header>
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default NewUser;
