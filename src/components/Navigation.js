import React from 'react';
import {
    NavLink,
    Link,
    useRouteMatch
  } from "react-router-dom";

function Navigation() {
    function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
        let match = useRouteMatch({
          path: to,
          exact: activeOnlyWhenExact
        });
        console.log('match', match)
        return (
            <li className={`nav-item ${match ? "active" : ""}`}>
                <Link className="nav-link" to={to}>{label}</Link>
            </li>
        );
    }

const menus = [
    {
        activeOnlyWhenExact: true,
        to: '/',
        label: 'Home'
    },
    {
        activeOnlyWhenExact: false,
        to: '/about',
        label: 'About'
    },
    {
        activeOnlyWhenExact: false,
        to: '/post',
        label: 'Post'
    },
    {
        activeOnlyWhenExact: false,
        to: '/contact',
        label: 'Contact Login'
    },
]
function showMenus (array) {
    let xhtml = null
    if (array.length > 0) {
        xhtml = array.map((menu, index) => {
            return <OldSchoolMenuLink
                        key={index}
                        activeOnlyWhenExact={menu.activeOnlyWhenExact}
                        to={menu.to}
                        label={menu.label}
                    />
        })
    }
    return xhtml
}

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
            <NavLink className="navbar-brand" to="/">Start Bootstrap</NavLink>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    {showMenus(menus)}
                    {/* <OldSchoolMenuLink 
                        activeOnlyWhenExact={true}
                        to="/"
                        label="Home"
                    />
                    <OldSchoolMenuLink 
                        to="/about"
                        label="About"
                    />
                    <OldSchoolMenuLink 
                        to="/post"
                        label="Post"
                    />
                    <OldSchoolMenuLink 
                        to="/contact"
                        label="Contact"
                    /> */}


                    {/* <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active home" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active about" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active post" to="/post">Sample Post</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active contact" to="/contact">Contact</NavLink>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navigation;
