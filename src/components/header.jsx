import React, { PureComponent } from 'react';
import logo from '../images/yt_logo.png';
import styles from './header.module.css';


class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.headerRef = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
    this.onLayer = this.onLayer.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const word = this.inputRef.current.value;
    word ? this.props.onSearch(word) : alert('Please enter word');
    this.inputRef.current.value = '';
    window.scrollTo(0, 0);
  }

  onLayer() {
    this.headerRef.current.classList.toggle(styles.on);
  }

  onRefresh() {
    window.location.reload();
  }

  render() {
    return (
      <header className={styles.header} ref={this.headerRef}>
        <a href="#" className={`${styles.logo}`} onClick={this.onRefresh}><img src={logo} alt="youtube" /></a>
        <button className={styles['layer-button']} onClick={this.onLayer}><i className="fas fa-search"></i><i className="fas fa-times"></i></button>
        <form onSubmit={this.onSubmit}>
          <div className={styles.search}>
            <input type="text" ref={this.inputRef} className={styles['search-input']} />
            <button className={styles['search-button']}><i className="fas fa-search"></i></button>
          </div>
        </form>
      </header>
    );
  }
}

export default Header;