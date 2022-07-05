import React from "react";
import PropTypes from 'prop-types';

function Notification({ message }) {
    return <h3>{message}</h3>;
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;