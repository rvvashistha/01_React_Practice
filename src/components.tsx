import React, { Fragment } from 'react'



//jjwwohiwe
const Phara = () => {
    const el = (<div title='Welcome to React'>
        <h1>An Introduction to React</h1>
        <p id='introduction'>
            <span className='"test-bold'>React</span>
            &nbsp; is a JS library for building the UI lets learn it
        </p>

    </div>)
    return el
}



const new_el = (
    <Fragment>
        <Phara></Phara>
        <Phara></Phara>
    </Fragment>
)



export { new_el } 