import {React, useState} from 'react'
import './works.scss';



export default function Works() {

    const [currentSlide, setCurrentSlide]=useState(0);


    const data=[
        {
            id:'1',
            icon:'assets/photograph.png',
            title:'Video',
            desc:"I am also a director and photographer.Here is my some vidoe projects.",
            img:'assets/videoPfPage.png',

        },
        {
            id:'2',
            icon:'assets/writer.png',
            title:'Writing',
            desc:'I have a page for film criticism.',
            img:'assets/movieReview.png',
        },
        {
            id:'3',
            icon:'assets/blog.png',
            title:'Blogger',
            desc:'I have a blog to share my life!',
            img:'assets/blogWebsite.png',
        },
    ]

    const handleClick = (way)=>{
        way === 'left' 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className='works' id='works'>
            <div className='slider' style={{ transform: `translateX(-${currentSlide * 100}vw)` }} >
            
                {data.map(d=>(
                    <div className='container'>
                    <div className='item'>
                        <div className='left'>
                            <div className='leftContainer'>
                                <div className='imgContainer'>
                                    <img src={d.icon} alt=''></img>
                                </div>
                                <h2>{data.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className='right'>
                            <img src={d.img} alt=''/>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
            <img src='assets/godown.png' className='arrow left' alt=''  onClick={()=>handleClick('left')}  />
            <img src='assets/godown.png' className='arrow right' alt='' onClick={()=>handleClick('')}/>
        </div>
    )
}
