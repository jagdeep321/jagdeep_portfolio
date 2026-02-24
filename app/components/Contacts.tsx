// "use client"
import emailjs from '@emailjs/browser';
import { useRef, useState, FormEvent } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  num: string;
  msg: string;
}



//serviceId = service_xf063wi
//public key = RaqX0lXQ_Kf2cTFLp
// template id = template_wt3iu08

const Contacts: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    num: "",
    msg: "",
  });


  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.name && !form.email && !form.num && !form.msg) {
    return toast.error("Enter all details!");
  }

  // ✅ Name
  if (!form.name.trim()) {
    return toast.error("Name is Required!");
  }

  // ✅ Email
  if (!form.email.trim()) {
    return toast.error("Email is Required!");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(form.email)) {
    return toast.error("Enter a valid Email!");
  }

  // ✅ Phone
  if (!form.num.trim()) {
    return toast.error("Phone Number is Required!");
  }

  // Optional: 10 digit validation
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(form.num)) {
    return toast.error("Enter valid 10 digit Phone Number!");
  }

  // ✅ Message
  if (!form.msg.trim()) {
    return toast.error("Message is Required!");
  }

  if (!formRef.current) return;
  
    emailjs.sendForm(
      'service_xf063wi',
      'template_wt3iu08',
      formRef.current,
      'RaqX0lXQ_Kf2cTFLp'
    )
    .then((result) => {
             toast.success("Your Message Send Successfully 🎉");
                setForm({ name: "", email: "", num: "", msg: "" });
    }, (error) => {
        alert("Failed to send message");
    });
  };



    return(

    <div id="contact">
         <Toaster position="top-center" />
      <div id="hire">
        <h1 className="lets">🤝 Let's Work Together</h1>
      </div>
      <div className="workbottom">
        <div className="contactcart1">
          <div className="contactchild">
            <h1 className="connect">connect with me</h1>

            <p className="connectbio1">Ready to bring your project to life? I'm available for freelance projects and
              full-time opportunities.</p>
            <p className="connectbio2">Whether you need a custom web application, mobile app, or enterprise solution - let's
              discuss how I can help.</p>
            <div className="maindetail">
              <div className="personaldetail">
                <i className="phone fa fa-phone"><FaPhoneAlt /></i>
                <a className="num" href="tel:+91 9463182321" target="_blank"     rel="noopener noreferrer">+91 9463182321</a>
              </div>
              <div className="personaldetail">
                <i className="envelop fa fa-envelope"> <FaEnvelope /></i>
                <a className="gmail" href="mailto:jagdeepsilky@gmail.com" target="_blank"    rel="noopener noreferrer">jagdeepsilky@gmail.com</a>
              </div>
              <div className="personaldetail">
                <i className="envelop fa fa-envelope"><FaEnvelope /></i>
                <a className="gmail" href="mailto:jindaljagdee007@gmail.com" target="_blank"     rel="noopener noreferrer">jindaljagdee007@gmail.com</a>
              </div>

            </div>
            <div className="icons">
              <a href="https://www.instagram.com/i_jagdeep007?utm_source=qr&igsh=M2FtcTBqNjllMmll" target="_blank"     rel="noopener noreferrer"><i
                  className="insta fa-brands fa-instagram"> <FaInstagram /></i></a>
              <a href="https://www.linkedin.com/in/jagdeep-jindal-2900a0376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"     rel="noopener noreferrer"><i className="insta fa-brands fa-linkedin"> <FaLinkedin /></i></a>
              <a href="https://wa.me/+919463182321" target="_blank"     rel="noopener noreferrer"><i className="insta fa-brands fa-whatsapp"> <FaWhatsapp /></i></a>
            </div>
          </div>

        </div>


        <div className="contactcart2">
          <div className="contactchild">
            <h1 className="connect">Start a Project</h1>
            <form ref={formRef} onSubmit={sendEmail} >
              <input className="name" name="user_name"   placeholder="Your Name" type="text"  value={form.name}
                                    onChange={(e) =>
                                        setForm((prev) => ({ ...prev, name: e.target.value }))
                                    } />
              <input className="name"  placeholder="Your Email" name="user_email" type="email"  value={form.email}
                                    onChange={(e) =>
                                        setForm((prev) => ({ ...prev, email: e.target.value }))
                                    } />
              <input className="name" name="user_phone"   placeholder="Your Phone" type="text"  value={form.num}
                                    onChange={(e) =>
                                        setForm((prev) => ({ ...prev, num: e.target.value }))
                                    } />
              <textarea className="textarea"  name="message" placeholder="Tell me about your project requirements" cols={40}
                rows={4} value={form.msg}
                                    onChange={(e) =>
                                        setForm((prev) => ({ ...prev, msg: e.target.value }))}></textarea>
              <button  type="submit"  className="collab">Let's Collaborate</button>
            </form>

            
          </div>
        </div>

      </div>
    </div>

    )
}
export default Contacts