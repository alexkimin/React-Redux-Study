import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const SEO = ({
  title,
  description,
  link,
  contentType
}) => (
  <Helmet
    htmlAttributes={{
      lang: 'en',
    }}
    title={ title }
    link={ link }
  />
)

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.array,
  contentType: PropTypes.string,
};

export default SEO
