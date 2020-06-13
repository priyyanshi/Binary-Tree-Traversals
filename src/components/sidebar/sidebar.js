import React from 'react'
import styles from './sidebar.module.css'
import Pages from './pages'
import Buttons from './buttons'

function Sidebar() {

    return (
        <div className={styles.sidebar}>
            <Pages/>
            <Buttons/>
        </div>
    )
}

export default Sidebar