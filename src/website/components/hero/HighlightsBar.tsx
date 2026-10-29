import React from 'react';
import './Styles/HighlightsBar.css';

export const HighlightsBar: React.FC = () => {
  const highlights = [
    {
      id: 'family-home',
      title: 'A HISTORIC\nFAMILY HOME',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 26C6 26 10 17 26 6C26 6 26 22 15 25C11 26 6 26 6 26Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M6 26C11 21 16 16 23 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 20C14 17 17 16 17 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M16 16C19 14 21 12 21 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'architecture',
      title: 'TRADITIONAL\nARCHITECTURE',
      icon: (
        <svg className="w-9 h-8" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 3L4 14H32L18 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M18 3V14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M12 9H24" stroke="currentColor" strokeWidth="1.3" />
          <rect x="7" y="14" width="22" height="15" rx="1" stroke="currentColor" strokeWidth="1.6" />
          <path d="M15 29V21C15 19.3431 16.3431 18 18 18C19.6569 18 21 19.3431 21 21V29" stroke="currentColor" strokeWidth="1.4" />
          <rect x="9.5" y="18" width="3.5" height="4.5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
          <rect x="23" y="18" width="3.5" height="4.5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
          <line x1="3" y1="29" x2="33" y2="29" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'garden',
      title: 'MEDICINAL\nGARDEN',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 28V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M16 5C14 2 18 2 16 5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M16 11C21 8 24 13 16 15" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M16 15C11 12 8 17 16 19" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M16 20C22 17 25 23 16 25" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'hospitality',
      title: 'AUTHENTIC\nASSAMESE HOSPITALITY',
      icon: (
        <svg className="w-9 h-8" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 13H27V19C27 23.4183 23.4183 27 19 27H17C12.5817 27 9 23.4183 9 19V13Z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M27 15H29.5C31.433 15 33 16.567 33 18.5C33 20.433 31.433 22 29.5 22H26.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 28C8 30 28 30 31 28" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M14 9C14 7 15 6 15 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M18 10C18 7.5 19 6.5 19 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M22 9C22 7 23 6 23 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="hlb1">
      <div className="hlb2">
        <div className="hlb3">
          {highlights.map((item) => (
            <div key={item.id} className="hlb4">
              <div className="hlb5">{item.icon}</div>
              <div className="hlb6">
                <span className="hlb7">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
