import React from 'react'
import Header from './Header/header'
import Footer from './Footer/footer'


const Layout = props => {
    return (
        <div>
            <Header></Header>
                {props.children}
            <Footer></Footer>
        </div>
    )
}

export default Layout
