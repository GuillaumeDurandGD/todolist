import React from 'react';
import {bool, func, string} from 'prop-types';

import classes from './Item.css';

Item.propTypes = {
    active: bool.isRequired,
    clicked: func.isRequired,
    text: string.isRequired
};

function Item({active, clicked, text}) {
    const classesArray = [classes.Item];
    if(!active){
        classesArray.push(classes.Active);
    }

    return <li className={classesArray.join(" ")} onClick={clicked}>{text}</li>
}

export default Item;