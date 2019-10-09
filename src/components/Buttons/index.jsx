import React from 'react';

import './style.css';

export default props => {
  return (
    <button
      className={`
    button
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}
    `}
      onClick={
        () => props.calcular(props.label)
      }
      >
      {props.label}
    </button>
  );
}
