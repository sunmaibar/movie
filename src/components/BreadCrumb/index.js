import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Wrapper, Content } from './BreadCrumb.styles'

const BreadCrumb = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <span>回首頁</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  )
}
BreadCrumb.propTypes = {
  movieTitle: PropTypes.string,
}

export default BreadCrumb
