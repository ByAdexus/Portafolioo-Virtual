import React from 'react';

const Hamburger = ({ color = "#333", onClick }) => (
  <div className="menu-icon"> {/* Agrega la clase menu-icon aquí */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="24"
      viewBox="0 0 32 24"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="24"
          height="3"
          rx="1.5"
          transform="translate(310 52)" // Ajustar la posición horizontal
          fill={color}
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="24"
          height="3"
          rx="1.5"
          transform="translate(310 62)" // Ajustar la posición horizontal
          fill={color}
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="32"
          height="3"
          rx="1.5"
          transform="translate(308 57)" // Ajustar la posición horizontal
          fill={color}
        />
      </g>
    </svg>
  </div>
);

export default Hamburger;
