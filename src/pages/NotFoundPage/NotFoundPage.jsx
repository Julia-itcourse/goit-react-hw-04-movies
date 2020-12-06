import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import imagePath from '../../assets/404Error.png'

const NotFoundPage = () => (
  <div className="NotFoundPageWrapper">
    <img src = {imagePath} alt="No page" width = '320'/>
    <Link to="/">Go back home</Link>
  </div>
);

NotFoundPage.propTypes = {
  // bla: PropTypes.string,
};

NotFoundPage.defaultProps = {
  // bla: 'test',
};

export default NotFoundPage;
