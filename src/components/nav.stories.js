import React from 'react';
import logo from '../assets/logo.svg';

export default {title: 'Nav'};

export const Default = () =>
    <div className="nav-default">
        <div className="logo-content"><img src={logo} alt="logo" className="logo"/></div>
        <ul className="list-nav">
            <li>Home</li>
            <li>Description</li>
            <li>Contact</li>
        </ul>
    </div>;

export const withButtons = () => (
    <div className="nav-default">
        <div className="logo-content"><img src={logo} alt="logo" className="logo"/></div>
        <ul className="list-nav">
            <li>
                <button className="button-nav">Home</button>
            </li>
            <li>
                <button className="button-nav">Description</button>
            </li>
            <li>
                <button className="button-nav">Contact</button>
            </li>
        </ul>
    </div>
);

export const withInput = () => (
    <div className="nav-default">
        <div className="logo-content"><img src={logo} alt="logo" className="logo"/></div>
        <input type="text" placeholder="Research"/>
    </div>
);
