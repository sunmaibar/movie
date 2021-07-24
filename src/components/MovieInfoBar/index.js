import React from 'react'
import PropTypes from 'prop-types'

import { calcTime, convertMoney } from '../../helpers'

import { Wrapper, Content } from './MovieInfoBar.styles'

const MovieInfoBar = ({ time, budget, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <div className='column'>
          <p>片長:{calcTime(time)}</p>
        </div>
        <div className='column'>
          <p>
            電影成本:{convertMoney(budget)}
            <span className='usd'>USD</span>
          </p>
        </div>
        <div className='column'>
          <p>
            票房收入:{convertMoney(revenue)}
            <span className='usd'>USD</span>
          </p>
        </div>
      </Content>
    </Wrapper>
  )
}

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
}

export default MovieInfoBar
