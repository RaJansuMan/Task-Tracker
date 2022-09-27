import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, showAdd, addValue} ) => {
   
  return (
    <header className='header'>
        <h1> {title}</h1>
        <Button color={addValue ?'red':'green'} text={addValue ?'Close':'Add'} onClick={showAdd}/>
    </header>
  )
}
Header.defaultProps={
  title:'Task Tracker',
}
Header.propTypes={
    title:PropTypes.string,
}
export default Header
