import PropTypes from 'prop-types'

const Button = ({ color, text}) => {

    const onClick = () => {
        console.log('Clicked');

    }

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
    color: PropTypes.string.isRequired
}

export default Button
