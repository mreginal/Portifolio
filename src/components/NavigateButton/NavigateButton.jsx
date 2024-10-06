import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigateButton.css'

const NavigateButton = ({ url, label, Icon }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.open(url, '_blank')
  };

  return (
    <button id='button-redirect' onClick={handleNavigate} style={styles.button}>
      {Icon && <Icon style={styles.icon} />}
      {label}
    </button>
  );
};

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  icon: {
    fontSize: '20px',
  }
};

export default NavigateButton;
