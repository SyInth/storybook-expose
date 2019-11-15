import React from 'react';
import editLogo from '../assets/edit.svg'
import './styles.css'

export default {title: 'Buttons'};

export const connexion = () => <button className="btn-connexion">Connection</button>;

export const deconnexion = () => <button className="btn-deconnexion">Disconnection</button>;

export const help = () => <button className="btn-help">?</button>;

export const edit = () => <button className="btn-edit">
    <img src={editLogo} alt="edit"/>
</button>;




