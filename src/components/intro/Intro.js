import {React, useEffect, useRef} from 'react'
import './intro.scss'
import { init } from 'ityped'

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {

        init(textRef.current, { 
            startDelay: 1500, 
            backSpeed:60,
            showCursor:true,
            strings: [' Enjoy!', ' Have Fun!' ] })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className='img'>
                <div className='imgContainer'>
                    <img src='assets/dream.jpeg' alt=''></img>
                </div>
            
            </div>
            <div className='words'>
                <div className='wrapper'>
                    <h2>Hello, I'm</h2>
                    <h1>Marco</h1>
                    <h3>Welcome to my page !<span ref={textRef}></span></h3>
                </div>
                <a href='#portfolio'>
                    <img src='assets/godown.png' alt=''></img>
                </a>
            </div>
        </div>
    )
}
