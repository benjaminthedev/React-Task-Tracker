import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>          
               <Button color='red' text='hello'/> 
        </header>
    )
}

export default Header

Header.propTypes = {
    title: PropTypes.string.isRequired,
}