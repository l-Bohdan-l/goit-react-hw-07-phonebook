import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.scss';

export const ContactListItem = ({ name, phone, id, onDelete }) => {
  return (
    <>
      <span>
        {name} : {phone}
      </span>
      <button
        className={styles.button}
        type="button"
        onClick={() => onDelete(id)}
      >
        x
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
