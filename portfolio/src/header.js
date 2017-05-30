import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import LinkedIn from './components/LinkedIn'
import GitHub from './components/GitHub'
import Email from './components/Email'
import { style } from './stylesheet'

export default class Header extends Component {

 render() {
   return (
     <div>
       <row>
         <div className="col-sm-2"></div>
         <div className="col-sm-10">
           {/*<Profile />*/}
           <ul className={css(style.headerMenu)}>
             <li className={css(style.headerMenuItem)}><LinkedIn /></li>
             <li className={css(style.headerMenuItem)}><GitHub /></li>
             <li className={css(style.headerMenuItem)}><Email /></li>
           </ul>
         </div>
         <div className="col-sm-2"></div>
       </row>
     </div>
   )
 }
}