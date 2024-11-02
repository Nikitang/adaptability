import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const InitPage: FC = () => {
    return (
        <div className="init-page">
            <Link to="main">Internetlab</Link>
        </div>
    );
};

export default InitPage;
