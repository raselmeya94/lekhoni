// // src/components/Navbar.js
// import React from 'react';

// function Navbar({ currentTab, setCurrentTab }) {
//   return (
//     <nav className="navbar">
//        <div className="navbar-brand">
//         <img
//           src={`${process.env.PUBLIC_URL}/logo.png`}
//           alt="Lekhoni Logo"
//           style={{ height: '32px', marginRight: '10px', verticalAlign: 'middle' }}
//         />
//         <span style={{ verticalAlign: 'middle' }}>লেখনি</span>
//       </div>
//       <ul className="navbar-links">
//         <li
//           className={currentTab === 'home' ? 'active' : ''}
//           onClick={() => setCurrentTab('home')}
//         >
//           Home
//         </li>
//         <li
//           className={currentTab === 'research' ? 'active' : ''}
//           onClick={() => setCurrentTab('research')}
//         >
//           Research Purpose
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

// import React from 'react';

// function Navbar({ currentTab, setCurrentTab }) {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <img
//           src={`${process.env.PUBLIC_URL}/logo.png`}
//           alt="Lekhoni Logo"
//           style={{ height: '32px', marginRight: '10px', verticalAlign: 'middle' }}
//         />
//         <span style={{ verticalAlign: 'middle' }}>লেখনি</span>
//       </div>

//       <ul className="navbar-links">
//         <li
//           className={currentTab === 'home' ? 'active' : ''}
//           onClick={() => setCurrentTab('home')}
//         >
//           Home
//         </li>
//         <li
//           className={currentTab === 'research' ? 'active' : ''}
//           onClick={() => setCurrentTab('research')}
//         >
//           Research Purpose
//         </li>
//         <li>
//         <a
//           href="http://localhost:8000/download-dataset"
//           className="download-button"
//           style={{
//             marginLeft: '20px',
//             padding: '6px 12px',
//             backgroundColor: '#4f46e5',
//             color: '#fff',
//             borderRadius: '5px',
//             textDecoration: 'none',
//             fontSize: '14px'
//           }}
//         >
//           📥 Download Dataset
//         </a>
//             📥 Download Dataset
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';

function Navbar({ currentTab, setCurrentTab }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src={`${process.env.PUBLIC_URL}/logo_pen.png`}
          alt="Lekhoni Logo"
          style={{
            height: '32px',
            marginRight: '10px',
            verticalAlign: 'middle'
          }}
        />
        <span style={{ verticalAlign: 'middle' }}>লেখনি</span>
      </div>

      <ul className="navbar-links">
        <li
          className={currentTab === 'home' ? 'active' : ''}
          onClick={() => setCurrentTab('home')}
        >
          Home
        </li>
        <li
          className={currentTab === 'research' ? 'active' : ''}
          onClick={() => setCurrentTab('research')}
        >
          Research Purpose
        </li>
        {/* <li>
          <a
            href="http://localhost:8000/download-dataset"
            className="download-button"
            style={{
              marginLeft: '20px',
              padding: '6px 12px',
              backgroundColor: '#4f46e5',
              color: '#fff',
              borderRadius: '5px',
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            📥 Download Dataset
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
