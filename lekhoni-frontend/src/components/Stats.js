import React from 'react';

// function Stats({ count }) {
//   return (
//     <div style={{ marginTop: '10px' }}>
//       <strong>Submitted Characters:</strong> {count}
//     </div>
//   );
// }

// export default Stats;


function Stats({ count, selectedLabel }) {
  return (
    <div className="stats-container">
      <div className="stats-column">
        <strong>Selected:</strong>{' '}
        <span className="bangla-char">{selectedLabel || 'None'}</span>
      </div>
      <div className="stats-column">
        <strong>Submitted:</strong> {count}
      </div>
    </div>
  );
}

export default Stats;