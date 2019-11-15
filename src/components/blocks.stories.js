import React from 'react';
import editLogo from '../assets/edit.svg'
import './styles.css'

export default {title: 'Blocks'};

export const Header = () => <button className="btn-connexion">Connexion</button>;

export const itemList = () => <button className="btn-deconnexion">Déconnexion</button>;

export const categoriesList = () => <button className="btn-help">?</button>;

export const titleCard = () => <button className="btn-edit">
    <img src={editLogo} alt="edit"/>
</button>;





