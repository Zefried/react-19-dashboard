import React from 'react';
import './Styles/TornEdgeDivider.css';

interface TornEdgeDividerProps {
  fillColor?: string;
  className?: string;
}

export const TornEdgeDivider: React.FC<TornEdgeDividerProps> = ({
  fillColor = '#F5EDE1',
  className = '',
}) => {
  return (
    <div className={`ted1 ${className}`}>
      {/* Organic Torn Paper Edge SVG */}
      <svg
        className="ted2"
        viewBox="0 0 1440 85"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 45 C45 35, 95 50, 145 42 C195 34, 240 48, 290 40 C340 32, 385 45, 435 38 C490 30, 540 46, 590 39 C645 32, 695 48, 745 40 C800 32, 850 47, 900 38 C955 29, 1005 45, 1055 36 C1110 27, 1160 44, 1210 35 C1265 26, 1315 42, 1365 34 C1405 28, 1430 35, 1440 33 V85 H0 Z"
          fill="#E7DCCE"
          opacity="0.6"
        />
        <path
          d="M0 48 C42 38, 92 52, 140 44 C190 36, 238 51, 285 43 C338 35, 382 48, 432 41 C485 33, 535 49, 585 42 C640 35, 690 51, 740 43 C795 35, 845 50, 895 41 C950 32, 1000 48, 1050 39 C1105 30, 1155 47, 1205 38 C1260 29, 1310 45, 1360 37 C1400 31, 1428 38, 1440 36 V85 H0 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
