import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Content, Text } from './HeroImage.styles'

const HeroImage = (props) => {
  const { image, title, text } = props

  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  )
}

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default HeroImage
