import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import {style} from '../stylesheet'

export default class LinkedIn extends Component {
  render () {
    return (
      <div>
        <img src={require('../images/Octocat.png')}
              className={css(style.headerImg)}
        />
      </div>
    )
  }
}


