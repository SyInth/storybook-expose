import React from 'react';
import editLogo from '../assets/edit.svg'
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

export default {title: 'Input'};

export const notes = () => 
<div id="notes">
<div className="radius">
    <p>A</p>
    </div>
    <p>Back</p>
</div>;

export const lastName = () => 
<Form.Control placeholder="Lastname" />;

export const firstName = () => <Form.Control placeholder="Firstname" />;

export const email = () => <Form.Control placeholder="Email" />;

export const cursus = () => <Form.Control placeholder="Description"/>;

export const password = () => <Form.Control placeholder="Password" />;




