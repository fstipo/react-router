import React from 'react';

const Page = ({ title }) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <section className="section__main"></section>
    </>
  );
};

export default Page;
