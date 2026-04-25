// import React from 'react'
// import { useState, useEffect , form } from 'react';
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// export const ContactForm = () =>{

//   let web3AccessKey = "f41c92f5-1195-4f84-a969-781692d6be5c"
//   const [buttonTitle,setButtonTitle] = useState('Send Message')
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: handle form submission (API, email service, etc.)
//     alert(e.target.name.value);
//   };

//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     setButtonTitle('Sending....')
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", web3AccessKey);

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//       toast.success("I have received your message. Will be in touch soon")
//       setButtonTitle('Send Message')
//       setFormData({ name: "", email: "", message: "" });
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//       toast.error(data.message)
//       setButtonTitle('Re Try')
//     }
//   };

//   return (
//     <div id='Contact' className="max-w-2xl mx-auto p-6  shadow-l mb-8 rounded-lg mt-16 w-full bg-white shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//         Contact Us
//       </h2>

//       <form onSubmit={onSubmit} className="space-y-6 w-full">
//         {/* Name + Email */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
//           <div>
//             <label className="block text-black font-light mb-2 text-start">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full  bg-gray-100 px-4 py-2  rounded-lg font-light focus:outline-none focus:ring-2 focus:ring-linden"
//               placeholder="Enter your name"
//             />
//           </div>

//           <div>
//             <label className="text-start block text-black font-light mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2  rounded-lg  font-light focus:outline-none focus:ring-2 focus:ring-linden  bg-gray-100"
//               placeholder="Enter your email"
//             />
//           </div>
//         </div>

//         {/* Message */}
//         <div>
//           <label className="text-start block text-black font-light mb-2">Message</label>
//           <textarea
//             name="message"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2  rounded-lg font-light focus:outline-none focus:ring-2 focus:ring-linden  bg-gray-100 "
//             placeholder="Write your message..."
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className=" bg-black w-full bg-linden text-white py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
//         >
//           {buttonTitle}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
  const [buttonTitle, setButtonTitle] = useState("Send Message");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const onSubmit = async (event) => {
  event.preventDefault();
  setButtonTitle("Sending...");

  try {
    const response = await fetch("http://127.0.0.1:8000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setButtonTitle("Send Message");
    } else {
      toast.error(data.error || "Something went wrong");
      setButtonTitle("Re Try");
    }
  } catch (error) {
    toast.error("Server error");
    setButtonTitle("Re Try");
  }
};

  return (
    <div className="max-w-2xl mx-auto p-6 mb-8 rounded-lg mt-16 w-full bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h2>

      <form onSubmit={onSubmit} className="space-y-6 w-full">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-black font-light mb-2 text-start">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-100 px-4 py-2 rounded-lg font-light focus:outline-none focus:ring-2 focus:ring-linden"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-start block text-black font-light mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg font-light focus:outline-none focus:ring-2 focus:ring-linden bg-gray-100"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-start block text-black font-light mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg font-light focus:outline-none focus:ring-2 focus:ring-linden bg-gray-100"
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-linden text-white w-full py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
        >
          {buttonTitle}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
