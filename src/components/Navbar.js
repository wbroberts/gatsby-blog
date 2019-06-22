import React from 'react';
import { Link } from 'gatsby';

import '../css/styles.css';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      }
    );
  };

  render() {
    return (
      <nav role="navigation" aria-label="main-navigation" className="py-4">
        <div className="container m-auto flex justify-between">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <h2 className="text-xl">MAEVE WALL</h2>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu">
            <div className="flex justify-between">
              <Link className="mr-6" to="/">
                Home
              </Link>
              <Link className="mr-6" to="/about">
                About
              </Link>
              <Link className="mr-6" to="/products">
                Products
              </Link>
              <Link className="mr-6" to="/blog">
                Blog
              </Link>
              <Link className="" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
