import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contacts/contactsActions';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.phonebookReducers.filter);

  return (
    <label className={styles.findLabel}>
      Find contacts by Name
      <input
        className={styles.findInput}
        type="text"
        value={filter}
        onChange={e => dispatch(filterContact(e.target.value))}
      ></input>
    </label>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
