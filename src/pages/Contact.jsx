import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="contact" className="bg-darkBg  my-8 py-12 px-6  max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Get In Touch</h2>
        <p className="text-darkText text-lg mb-8 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out if you have a project in mind, a question, or just want to connect!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="mailto:dev.iammunees@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-block border border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/iammuneeswaran/" target="_blank" rel="noopener noreferrer" className="inline-block border border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            LinkedIn
          </a>
          <a href="https://github.com/iamMunees" target="_blank" rel="noopener noreferrer" className="inline-block border border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            GitHub
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact;