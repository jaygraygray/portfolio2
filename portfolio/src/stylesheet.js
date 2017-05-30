import { StyleSheet } from 'aphrodite'

export const style = StyleSheet.create({
  headerImg : {
    height: '160px',
    width: '160px',
    transition: 'all .2s',
    ':hover': {
        marginLeft: '24px',
        transform: 'rotate(0.1turn)',
        opacity: '.8',
        transition: 'all .2s',
    }
  },
  headerMenu: {
    display: 'flex',
    flexDirection: 'space-around',
  },
  headerMenuItem: {
    listStyle: 'none',
  }
})