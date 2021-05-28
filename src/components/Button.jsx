import React from 'react';
import PropTypes from "prop-types";

import classNames from "classnames";

const Button = ({ onClick, children, outline, className }) => {
    return <button
        onClick={onClick  }
        className={classNames('button', className, {
            'button--outline': outline,
        })}>{children}</button>
}
Button.propTypes = {
    onClick: PropTypes.func,
    outline: PropTypes.bool,
}

Button.defaultProps = {

}

export default Button;