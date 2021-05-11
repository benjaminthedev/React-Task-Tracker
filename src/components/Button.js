import PropTypes from 'prop-types'

const Button = ({ color, text, onClick}) => {

   return (
        <>
         <button className="btn" onClick={onClick} style={{backgroundColor: color }}>{text}</button>   
        </>
    )
}

Button.defaultProps = {
    color: 'black',
    text: 'Button Text'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired, 
    onClick: PropTypes.func.isRequired
}

export default Button
