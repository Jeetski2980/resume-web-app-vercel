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
                {/* Location */}
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Novi, MI</span>
                </div>

                {/* Email */}
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

                {/* GitHub */}
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.262.793-.577v-2.233C6.42 20.09 5.843 18.28 5.843 18.28c-.546-1.386-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
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

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V9a1 1 0 01-1 1H8a11 11 0 005 5v-1.293a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V6a1 1 0 011-1z"/>
                  </svg>
                  <a 
                    href="tel:+12488326929" 
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    +1 (248) 832-6929
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7 0-1 .7-1.7 1.7-1.7 1 0 1.7.7 1.7 1.7 0 1-.7 1.7-1.7 1.7zm13.5 11.3h-3v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.5.7-1.8 1.4-.1.3-.1.7-.1 1v5.4h-3v-10h3v1.3c.4-.7 1.2-1.7 2.9-1.7 2.1 0 3.7 1.4 3.7 4.4v6z"/>
                  </svg>
                  <a 
                    href="https://www.linkedin.com/in/jeet-anil-799a8037a/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    linkedin.com/in/jeet-anil-799a8037a
                  </a>
                </div>

                {/* PrepMind */}
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <a 
                    href="https://prepmind.org" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    prepmind.org
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
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
