import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome }) => {

  const inputHomeStyle = classNames('input', {
    isHome,
  })

  return (
    <div>
      <section className='main'>
        <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
        <input type='text' className={inputHomeStyle} placeholder='Buscar...' />
      </section>
    </div>
  );
};

Search.propTypes = {
  isHome: PropTypes.bool,
}

export default Search;
