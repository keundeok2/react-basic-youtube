import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(`seach Value : ${value}`);
    onSearch(value);
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  console.log('header');

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src='/images/logo.png' alt='youtube' />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        className={styles.input}
        ref={inputRef}
        type='search'
        placeholder='Search...'
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type='submit' onClick={onClick}>
        <img
          className={styles.buttonImg}
          src='/images/search.png'
          alt='search'
        ></img>
      </button>
    </header>
  );
});

export default SearchHeader;
