import React from 'react';
import logoHetic from '../assets/logo-hetic.png';
import intranetIcon from '../assets/intranet.svg';
import OGPIcon from '../assets/OGP.svg';
import OGIIcon from '../assets/OGI.svg';

export default {title: 'Link'};

export const logo = () =>
    <div className="logo-hetic">
        <img src={logoHetic} alt="logoHetic"/>
    </div>;


export const intranet = () =>
    <div className="intranet">
        <img src={intranetIcon} alt="Intranet"/>
        <p className="padding-intra">Intranet</p>
    </div>;

export const OGP = () =>
    <div className="OGP">
        <img src={OGPIcon} alt="OGP"/>
        <p className="padding-intra">OGP</p>
    </div>;

export const OGI = () =>
    <div className="OGI">
        <img src={OGIIcon} alt="OGI"/>
        <p className="padding-intra">OGI</p>
    </div>;


export const categories = () => (
    <div className="categories-content">
        <ul className="categories-list">
            <li className="categories-item-active">Bachelor Web P2020
                <div className="green-underline"></div></li>
            <li className="categories-item">Bachelor Web P2021</li>
            <li className="categories-item">Bachelor Web P2022</li>
        </ul>
    </div>
);

export const EditProfile = () => (
    <div className="edit-profile">
        <div className="text-content-profile">
            <p className="name-profile">Eric PRIOU</p>
            <p className="edit-link">Editer mon profil ></p>
        </div>

        <div className="profile-picture">
            <div className="circle"></div>
        </div>
    </div>
);

