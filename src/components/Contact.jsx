import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6wxx7fb', 'template_p4ly9an', e.target, 'LwAf1YqzNG05gapRT')
      .then((result) => {
          setResponseMessage('Message sent successfully!');
      }, (error) => {
          setResponseMessage('Failed to send message, please try again later.');
      });

    setName('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="contact-container bg-[#4C3594] py-10 px-5 md:px-10 lg:px-20">
      <div className="contact">
      <h1 className="text-4xl font-bold text-center p-8 tracking-wider hover:scale-110 transition-transform duration-300 md:hover:scale-150 md:text-5xl">
            <span className="text-[#ffffff]">Contact </span>
            <span className="text-[#fcff46]"> Me</span>
          </h1>
        <p className="text-center text-lg italic text-[#36ebff] mb-8">Drop a Note!</p>
        <div className="contact-form">
          <form id="form" onSubmit={sendEmail} className="space-y-4">
            <div className="field">
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name here"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject:</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter your message subject here"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message here"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <input
              type="submit"
              id="button"
              value="Send Message"
              className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer"
            />
          </form>
          {responseMessage && <div className="message mt-4 text-center text-green-500">{responseMessage}</div>}
        </div>
      </div>
    </section>
  );
};

export default Contact;

