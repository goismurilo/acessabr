import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Button({ children, onClick, width }) {
    return (
        <button className="buttonB" onClick={onClick} style={{ width }}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onClick: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired
}

export default Button;