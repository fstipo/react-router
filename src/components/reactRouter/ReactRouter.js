import React from 'react';
import './ReactRouter.css';

const ReactRouter = () => {
  return (
    <div className="container mt-3">
      <header className="d-flex justify-content-start align-items-center gap-2">
        <h2 className="text-success">ReactRouter</h2>
        <nav>
          <ul className="d-flex list-unstyled pt-2 gap-2">
            <li className="btn btn-link text-decoration-none">
              <a className="text-dark text-decoration-none fw-bold" href="/">
                Dashboard
              </a>
            </li>
            <li className="btn btn-link text-decoration-none">
              <a className="text-dark text-decoration-none fw-bold" href="/">
                Projects
              </a>
            </li>
            <li className="btn btn-link text-decoration-none">
              <a className="text-dark text-decoration-none fw-bold" href="/">
                Team
              </a>
            </li>
            <li className="btn btn-link text-decoration-none">
              <a className="text-dark text-decoration-none fw-bold" href="/">
                Calendar
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <main>
        <header>
          <h1>Dashboard</h1>
        </header>
        <section className="section__main">aaaaa</section>
      </main>
    </div>
  );
};

export default ReactRouter;
