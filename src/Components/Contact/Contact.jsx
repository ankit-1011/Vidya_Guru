import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
import white_arrow from '../../Assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa60d529-d0d4-4a49-8088-fff2fcb607d7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



return (
    <div className='contact'>
         <div className="conatct-col">
           <h3>Send us a message<img src={msg_icon}className='img1'/></h3><br/>
           <p>Feel free to reach out to us anytime! We're here to help and <br/>answer any questions you may have. Whether you need support,<br/> have inquiries, or just want to chat, don't hesitate to contact us.<br/> Your satisfaction and connection with us matter! 🌟</p>
           <ul>
            <li><img src={mail_icon} className='li-img'/>contact@VidyaGuru.Collg</li>
            <li><img src={phone_icon} className='li-img'/>987-654-3210</li>
            <li><img src={location_icon} className='li-img'/>New Jhunsi ,Prayagraj ,Uttar-Prades-211019</li>
           </ul>
         </div>
         <div className="conatct-col">
            <form onSubmit={onSubmit}>
                <label>Your Name :</label>
                <input type='text' name='name' placeholder='Enter Your Name' required/>
                <label>Phone Number :</label>
                <input type='tel' name='phone' placeholder='Enter Ypur Mobile Number ' required/>
                <label>Write your message here :</label>
                <textarea name='message' placeholder='Enter your message here' required rows='6'></textarea>
                <button type='subm
                ' className='btn dark-btn'>Submit Now<img src={white_arrow}/></button>
            </form>
            <span className='span' style={{ color: result ? "green" : "transparent" }}>{result}</span>

        </div>
    </div>
  )
}

export default Contact