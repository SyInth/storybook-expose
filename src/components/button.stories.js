import React from 'react';
import {Button} from '@storybook/react/demo';
import './styles.css'

export default {title: 'Buttons'};

export const withText = () => <Button className="lol">Button with text</Button>;

export const withEmoji = () => (
    <Button><span role="img" aria-label="so cool">😀</span></Button>
);

export const withEmojiss = () => (
    <Button><span role="img" aria-label="so cool">😀</span></Button>
);


