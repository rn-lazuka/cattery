import React from 'react';
import {Link} from "react-router-dom";


function Parents() {
    return (
        <div>
            <div className={'blockForNav'}></div>
<Link to={'parents/males'}>Males</Link> | <Link to={'parents/females'}>Females</Link>
        </div>
    );
}

export default Parents;