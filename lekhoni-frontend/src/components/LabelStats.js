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
// src/components/LabelStats.js
import React from 'react';

function LabelStats({ stats }) {
  const entries = Object.entries(stats);

  if (entries.length === 0) return null;

  // ✅ Calculate total
  const total = entries.reduce((sum, [, count]) => sum + count, 0);

  return (
    <div className="label-stats-container">
      {/* Header with total count in right corner */}
      <div className="label-stats-header">
        <h4>📊 Label-wise Contributions</h4>
        <div className="total-count">🧮 Total: {total}</div>
      </div>

      <div className="label-cards">
        {entries.map(([label, count]) => (
          <div key={label} className="label-card">
            <span className="label-char">{label}</span>
            <span className="label-count">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabelStats;
