import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <div>
        <img src='../../public/logo192.png' alt='' />
      </div>

      <div>
        <h1 style={{ color: '#edf0f1', textAlign: 'center' }}>
          Hi, I'm Jona 👋
        </h1>
        <h3 style={{ color: '#edf0f1', textAlign: 'center' }}>
          I study Software Development at AUT.
        </h3>
      </div>
    </div>
  );
};

export default Home;
