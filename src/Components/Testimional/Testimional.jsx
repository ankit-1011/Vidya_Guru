import React, { useRef } from 'react'
import './Testimional.css'
import next_icon from '../../Assets/next-icon.png'
import back_icon from '../../Assets/back-icon.png'
import user_1 from '../../Assets/user-1.png'
import user_2 from '../../Assets/user-2.png'
import user_3 from '../../Assets/user-3.png'
import user_4 from '../../Assets/user-4.png'

const Testimional = () => {
    const slider=useRef()
    let tx=0;

       const slideForward=()=>
       {
          if(tx>-50){
            tx-=25;
          }
          slider.current.style.transform=`translateX(${tx}%)`
       }

       const slideBackward=()=>
        {
            if(tx>0){
                tx+=25;
              }
              slider.current.style.transform=`translateX(${tx}%)`
        }


  return (
    <div className='testiminonals'>
       <img src={next_icon} className='next-btn' onClick={slideForward}/>
       <img src={back_icon} className='back-btn' onClick={slideBackward}/>
       <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1}/>
                        <div>
                            <h3>Kirti Singh</h3>
                            <span>Vidya-Guru,INDIA</span>
                        </div>
                      </div>
                      <p>The campus itself is vibrant and full of opportunities for growth, whether it's through joining student organizations, participating in research projects, or taking advantage of the state-of-the-art facilities. The university's commitment to diversity and inclusion ensures that everyone feels valued and respected.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2}/>
                        <div>
                            <h3>Ved Kumar</h3>
                            <span>Vidya-Guru,INDIA</span>
                        </div>
                    </div>
                    <p>The campus itself is vibrant and full of opportunities for growth, whether it's through joining student organizations, participating in research projects, or taking advantage of the state-of-the-art facilities. The university's commitment to diversity and inclusion ensures that everyone feels valued and respected.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3}/>
                        <div>
                            <h3>Aditi Parihar</h3>
                            <span>Vidya-Guru,INDIA</span>
                        </div>
                    </div>
                    <p>The campus itself is vibrant and full of opportunities for growth, whether it's through joining student organizations, participating in research projects, or taking advantage of the state-of-the-art facilities. The university's commitment to diversity and inclusion ensures that everyone feels valued and respected.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4}/>
                        <div>
                            <h3>Samarth Mishra</h3>
                            <span>Vidya-Guru,INDIA</span>
                        </div>
                    </div>
                    <p>The campus itself is vibrant and full of opportunities for growth, whether it's through joining student organizations, participating in research projects, or taking advantage of the state-of-the-art facilities. The university's commitment to diversity and inclusion ensures that everyone feels valued and respected.</p>
                </div>
            </li>
        </ul>
       </div>
    </div>
  )
}

export default Testimional