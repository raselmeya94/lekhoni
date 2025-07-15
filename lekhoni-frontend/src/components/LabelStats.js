// // src/components/LabelStats.js
// import React from 'react';

// function LabelStats({ stats }) {
//   const entries = Object.entries(stats); // { "অ": 13, "আ": 7, ... }

//   if (entries.length === 0) return null;

//   return (
//   <div>
//     <h4>📊 Label-wise Contributions</h4>
//     <table className="label-stats">
//       <thead>
//         <tr>
//           <th>Label</th>
//           <th>Count</th>
//         </tr>
//       </thead>
//       <tbody>
//         {entries.map(([label, count]) => (
//           <tr key={label}>
//             <td>{label}</td>
//             <td style={{ textAlign: 'right' }}>{count}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// }

// export default LabelStats;

// // src/components/LabelStats.js
// import React from 'react';

// function LabelStats({ stats }) {
//   const entries = Object.entries(stats);

//   if (entries.length === 0) return null;

//   return (
//     <div className="label-stats-container">
//       <h4>📊 Label-wise Contributions</h4>
//       <div className="label-cards">
//         {entries.map(([label, count]) => (
//           <div key={label} className="label-card">
//             <span className="label-char">{label}</span>
//             <span className="label-count">{count}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default LabelStats;


// // src/components/LabelStats.js
// import React, { useState } from 'react';
// function formatNumber(num) {
//   if (num >= 1000) {
//     const formatted = (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1);
//     return `${formatted}K`;
//   }
//   return num.toString();
// }
// function LabelStats({ stats }) {
//   const [showAll, setShowAll] = useState(false); // <-- এই লাইনটা দরকার
//   const entries = Object.entries(stats);

//   if (entries.length === 0) return null;

//   // ✅ Calculate total
//   const total = entries.reduce((sum, [, count]) => sum + count, 0);
//   const TOP_N = 17;
//   const sortedEntries = entries.sort((a, b) => b[1] - a[1]);
//   const topEntries = sortedEntries.slice(0, TOP_N);

//   return (
//     <>
//       <div className="label-stats-header">
//         <h4>📊 Label-wise Contributions</h4>
//         <div className="total-count">🧮 Total: {formatNumber(total)}</div>
//       </div>
//       <div className="label-cards">
//           {topEntries.map(([label, count]) => (
//             <div key={label} className="label-card">
//               <span className="label-char">{label}</span>
//               <span className="label-count">{formatNumber(count)}</span>
//             </div>
//           ))}
//           {entries.length > TOP_N && (
//             <button onClick={() => setShowAll(!showAll)}>
//               {showAll ? 'Show Less' : 'Show All'}
//             </button>
//           )}
//         </div>

//         {showAll && (
//           <div className="label-cards full-list">
//             {sortedEntries.map(([label, count]) => (
//               <div key={label} className="label-card">
//                 <span className="label-char">{label}</span>
//                 <span className="label-count">{formatNumber(count)}</span>
//               </div>
//             ))}
//           </div>
//         )}

//     </>
//   );
// }

// export default LabelStats;


import React, { useState } from 'react';

function formatNumber(num) {
  if (num >= 1000) {
    const formatted = (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1);
    return `${formatted}K`;
  }
  return num.toString();
}

function LabelStats({ stats }) {
  const [showAll, setShowAll] = useState(false);

  const entries = Object.entries(stats);
  if (entries.length === 0) return null;

  const total = entries.reduce((sum, [, count]) => sum + count, 0);
  const TOP_N = 17;
  const sortedEntries = entries.sort((a, b) => b[1] - a[1]);
  const entriesToDisplay = showAll ? sortedEntries : sortedEntries.slice(0, TOP_N);

  return (
    <>
      <div className="label-stats-header">
        <h4>📊 Label-wise Contributions</h4>
        <div className="total-count">🧮 Total: {formatNumber(total)}</div>
      </div>

      <div className="label-cards">
        {entriesToDisplay.map(([label, count]) => (
          <div key={label} className="label-card">
            <span className="label-char">{label}</span>
            <span className="label-count">{formatNumber(count)}</span>
          </div>
        ))}

        {entries.length > TOP_N && (
          <button onClick={() => setShowAll(!showAll)} className="toggle-button">
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        )}
      </div>
    </>
  );
}

export default LabelStats;
