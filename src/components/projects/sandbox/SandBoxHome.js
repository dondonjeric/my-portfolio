import React from "react";
import {Link} from 'react-router-dom';

import './SandBoxHome.css'

const SandBoxHome = () => {
    return (
        <div>
            <Link to="/account"></Link>
            <h1>Sand Box</h1>
        </div>
    );
}

export default SandBoxHome;