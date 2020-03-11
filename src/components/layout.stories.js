import React from 'react';
import home from '../assets/home.svg';
import intranet from '../assets/intranet.svg';
import ogi from '../assets/OGI.svg';
import ogp from '../assets/OGP.svg';
import arrowNote from '../assets/arrow-note.svg';
import arrowList from '../assets/arrow-list.svg';
import listIcon from '../assets/list-icone.svg';
import './styles.css'

export default {title: 'Layout'};

export const card = () => 
<section className="card">
   
</section>;

export const navBar = () => <section className="navbar">
 <ul className="nav-list">
        <li className="nav-item">
            <div><img src={home}/></div>
            <span>INTRANET</span>
        </li>
        <li className="nav-item">
            <div><img src={intranet}/></div>
            <span>OGP</span>
        </li>
        <li className="nav-item">
            <div><img src={ogi}/></div>
            <span>OGI</span>
        </li>
        <li className="nav-item">
            <div><img src={ogp}/></div>
            <span>COMPTE</span>
        </li>
       
    </ul>
</section>;

export const studentItem = () => 
<div className="student-item">
    <div className="student-item-top">
        <div className="name-skill"> <span className="font-weight">Manon Ragnotti</span>
        <span className="font-light">Développeur front-end</span>
    </div>
         <img src={arrowList}/>
    </div>

    <div>
     <div className="skill-level">
     <div className="circle"> A </div>
        <span className="text-skill">UX</span>
     </div>
    </div>
</div>;

export const formGroupItem = () => 
<div className="formGroup-item">
    <span className="text-skill">Nombre d'étudiants / groupe</span>
    <div>
        <span className="margin-right">1</span>
        <img src={arrowNote} />

    </div>
</div>;

export const dashboardItem = () => 
<div className="dashboard-item">
    <img src={listIcon}/>
    <span className="align-center">Étudiants P2020</span>
</div>
;

export const skillLevel = () => 
<div className="skill-level">
<div className="circle"> A </div>
<span className="text-skill">UX</span>
</div>;

export const skillItem = () => 
<div className="skill-item">
    <span className="text-skill">Développeur front-end</span>
    <div>
        <span className="margin-right">1</span>
        <img src={arrowNote} />

    </div>
</div>

export const title = () => <h1 className="title">86 étudiants Web P2020</h1>;

export const subTitle = () => <h3 className="subtitle">Son identité</h3>;

export const input = () => 
<input className="input-appli" placeholder="Adresse mail" />;





