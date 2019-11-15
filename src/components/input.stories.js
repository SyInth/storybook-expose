import React from 'react';
import editLogo from '../assets/edit.svg'
import './styles.css'

export default {title: 'Input'};

export const notes = () => <button className="btn-connexion">Connexion</button>;

export const lastName = () => <button className="btn-deconnexion">Déconnexion</button>;

export const firstName = () => <button className="btn-help">?</button>;

export const email = () => <button className="btn-edit">
    <img src={editLogo} alt="edit"/>
</button>;

export const cursus = () => <button className="btn-edit">
    <img src={editLogo} alt="edit"/>
</button>;

export const password = () => <button className="btn-edit">
    <img src={editLogo} alt="edit"/>
</button>;




