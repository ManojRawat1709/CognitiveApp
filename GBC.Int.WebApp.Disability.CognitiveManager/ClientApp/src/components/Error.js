import React, { useState, useEffect, useContext } from 'react'
import alertContext from './Context'

const Error = (props) => {

    return (
        <div className="err">
            {props.children}
        </div>
    );
}
export default Error;