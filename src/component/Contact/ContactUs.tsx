import { 
  useState, 
  // useRef, 
  FormEvent 
} from "react";
import styles from "../../App.module.css";
import Map from "../../assets/map.png";
// import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [emailFocus, setEmailFocus] = useState<boolean>(false);
  const [nameFocus, setNameFocus] = useState<boolean>(false);
  const [messageFocus, setMessageFocus] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  console.log(email, name, message);

  const submitMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!email.length || !name.length || !message.length) {
      alert("All fields must be filled");
    } else {
      // emailjs
      //   .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
      //     publicKey: "YOUR_PUBLIC_KEY",
      //   })
      //   .then(
      //     () => {
      //       console.log("SUCCESS!");
      //     },
      //     (error) => {
      //       console.log("FAILED...", error.text);
      //     }
      //   );
      alert('We"ll get back to you within 24hrs 🚀');
    }
  };

  return (
    <form
      className="lg:h-[32rem] flex flex-col-reverse lg:flex-row"
      id="contact"
    >
      <div className="flex-1 lg:pl-[7rem] pl-4 pr-7 pb-5 lg:py-[2rem] py-4">
        <h2 style={{ fontFamily: styles.boldNunito }} className="text-4xl">
          Contact Us
        </h2>
        <div className="mt-4">
          <input
            type="text"
            style={{
              borderWidth: 3,
              borderStyle: "dashed",
              borderColor: nameFocus ? "green" : "#F28D31",
              outline: "none",
              paddingTop: 7,
              paddingBottom: 7,
              paddingLeft: 5,
              minWidth: "18rem",
              minHeight: "4rem",
            }}
            name="user_name"
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="lg:w-[50%] w-[100%]"
            placeholder="Your name"
          />
          <input
            type="text"
            style={{
              borderWidth: 3,
              borderStyle: "dashed",
              borderColor: emailFocus ? "green" : "#F28D31",
              outline: "none",
              paddingTop: 7,
              paddingBottom: 7,
              paddingLeft: 5,
              minWidth: "18rem",
              minHeight: "4rem",
            }}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            className="lg:w-[50%] w-[100%]"
            placeholder="Your email"
          />
        </div>
        <div className="">
          <textarea
            style={{
              borderWidth: 3,
              borderStyle: "dashed",
              borderColor: messageFocus ? "green" : "#F28D31",
              outline: "none",
              minHeight: "15rem",
              width: "100%",
              paddingTop: 7,
              paddingBottom: 7,
              paddingLeft: 5,
            }}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            onFocus={() => setMessageFocus(true)}
            onBlur={() => setMessageFocus(false)}
            placeholder="Your message"
          />
        </div>
        <button
          onClick={submitMessage}
          style={{ fontFamily: styles.poppinsBold }}
          className="bg-[#F28D31] w-full text-xl border-solid border-[3px] border-white hover:border-[#F28D31] font-semibold text-white mt-5 rounded-md hover:text-[#F28D31] hover:bg-white transition-all duration-500 ease-out py-4"
        >
          Book Now
        </button>
      </div>
      <div className="flex-1 bg-green-500 h-full">
        <img src={Map} className="w-full h-full object-cover" alt="Map" />
      </div>
    </form>
  );
};

export default ContactUs;
