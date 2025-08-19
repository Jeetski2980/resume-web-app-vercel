import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12 text-gray-900 dark:text-white animate-fade-in">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-in-left">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                I'm a full-stack developer passionate about educational equity and building AI-powered tools for students. 
                Founder of multiple 501(c)(3) nonprofits and creator of trading systems and learning platforms.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Novi, MI</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a 
                    href="mailto:jeetanil28@gmail.com" 
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    jeetanil28@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <a 
                    href="https://github.com/Jeetski2980" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    github.com/Jeetski2980
                  </a>
                </div>
              </div>
            </div>
            
            {/* Profile Image Placeholder */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-72 h-72 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
