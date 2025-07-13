// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-6 mt-10">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//         <p className="text-sm text-center md:text-left">
//           © {new Date().getFullYear()} <strong>Lekhoni</strong>. All rights reserved.
//         </p>
//         <div className="flex space-x-4 mt-4 md:mt-0">
//           <a
//             href="https://github.com/lekhoni"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-400 transition-colors"
//           >
//             GitHub
//           </a>
//           <a
//             href="/privacy"
//             className="hover:text-blue-400 transition-colors"
//           >
//             Privacy
//           </a>
//           <a
//             href="/terms"
//             className="hover:text-blue-400 transition-colors"
//           >
//             Terms
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "../App.css"; // CSS import করা হচ্ছে

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} <strong>Lekhoni</strong>. All rights reserved.
        </p>
        <p className="footer-text">
          Made with <span style={{ color: "red" }}>❤️</span> by{" "}
          <a
            href="https://github.com/raselmeya94"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rasel Meya
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
