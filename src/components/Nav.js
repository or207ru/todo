import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <Link to="/">Show users list</Link>&nbsp;|&nbsp;
            <Link to="/post">Show blog</Link>
        </nav>
    );
}