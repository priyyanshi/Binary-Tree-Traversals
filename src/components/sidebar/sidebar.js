import React from 'react'
import Styles from './sidebar.module.css'
import Pages from './pages'
import Buttons from './buttons'

function Sidebar() {

    return (
        <div className={Styles.sidebar}>
            <Pages/>
            <Buttons/>
        </div>
    )
}

export default Sidebar