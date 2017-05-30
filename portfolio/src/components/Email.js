import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import {style} from '../stylesheet'

export default class Email extends Component {
  render () {
    return (
      <div>
        <img src={require('../images/file-tk-email-icon-svg-28.png')}
              className={css(style.headerImg)}
        />
      </div>
    )
  }
}


