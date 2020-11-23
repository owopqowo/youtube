import React, { useRef } from 'react';
import styles from './header.module.css';



const Header = (props) => {
  const inputRef = useRef();
  const headerRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const word = inputRef.current.value;
    word ? props.onSearch(word) : alert('Please enter word');
    inputRef.current.value = '';
    window.scrollTo(0, 0);
  }

  const onLayer = () => {
    headerRef.current.classList.toggle(styles.on);
  }

  const onRefresh = () => {
    window.location.reload();
  }

  return (
    <header className={styles.header} ref={headerRef}>
      <a href="#!" className={`${styles.logo}`} onClick={onRefresh}><img src={`${process.env.PUBLIC_URL}/images/yt_logo.png`} alt="youtube" /></a>
      <button className={styles['layer-button']} onClick={onLayer}><i className="fas fa-search"></i><i className="fas fa-times"></i></button>
      <form onSubmit={onSubmit}>
        <div className={styles.search}>
          <input type="text" ref={inputRef} className={styles['search-input']} />
          <button className={styles['search-button']}><i className="fas fa-search"></i></button>
        </div>
      </form>
    </header>
  )
};

export default Header;