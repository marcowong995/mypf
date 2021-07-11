import React from 'react'
import './cards.scss';
import CastForEducationIcon from '@material-ui/icons/CastForEducation'
import TranslateIcon from '@material-ui/icons/Translate';
import ComputerIcon from '@material-ui/icons/Computer';

export default function Cards() {




    return (
        <div className='cards' id='cards'>
            <h1>Information</h1>
            <div className='container'>                
                <div className='card'>
                    <div className='top'>
                        <CastForEducationIcon className='left'></CastForEducationIcon>
                        <div className='title' >Highest Education level</div>
                    </div>
                    <div className='center'>
                    The Open University of Hong Kong<br/><br/>
                    Bachelor of Arts<br/><br/>
                    Major: Creative Writing and Film Arts<br/><br/>
                    CGPA: 2.69<br/>
                    </div>
                    <div className='bottom'>
                        <h3>September 2017-April 2021</h3>
                    </div>
                </div>
                <div className='card featured'>
                    <div className='top'>
                        <TranslateIcon className='left' />
                        <div className='title' >Language</div>
                    </div>
                    <div className='center'>
                    Cantonese: Native<br/><br/>
                    Putonghua: Proficient<br/><br/>
                    English: Proficient<br/>
                    </div>
                    <div className='bottom'>
                        <div/>
                    </div>
                </div>
                <div className='card'>
                    <div className='top'>
                        <ComputerIcon className='left' />
                        <div className='title' >Program Language</div>
                    </div>
                    <div className='center'>
                    JavaScript<br/><br/>
                    CSS, HTML<br/><br/>
                    React.js<br/>
                    </div>
                    <div className='bottom'>
                        <div/>
                    </div>
                </div>
            </div>
        </div>
    )
}
