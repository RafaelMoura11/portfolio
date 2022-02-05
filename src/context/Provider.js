import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

function Provider({ children }) {
  const [language, setLanguage] = useState('portuguese');

  const statesAndFunctions = {
    language,
    setLanguage,
  };
  return (
    <MyContext.Provider value={ statesAndFunctions }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.isRequired,
};

export default Provider;
