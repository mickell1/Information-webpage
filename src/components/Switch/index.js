import React from 'react';
import { bool, string, func } from 'prop-types';
import './styles/Switch.css';
import { noop } from '@babel/types';

const Switch = ({ 
  checked,
  disabled,
  className,
  onClick
 }) => (
  <div 
    className={ checked ? "switch toggleOn" : "switch toggleOff" }
    onClick={onClick}
  >
    <div className={ checked ? "on" : "off" }></div>
  </div>
);

Switch.defaultProps = {
  checked: false,
  disabled: false,
  className: '',
  onClick: func,
};

Switch.propTypes = {
  checked: bool,
  disabled: bool,
  className: string,
  onClick: func,
};

export default Switch;