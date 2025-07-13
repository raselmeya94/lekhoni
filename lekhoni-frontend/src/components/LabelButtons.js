import React, { useState } from 'react';

// const predefinedLabels = ['অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'এ', 'ঐ', 'ও', 'ঔ'];
const predefinedLabels = [
  // স্বরবর্ণ (Vowels)
  'অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ',

  // ব্যঞ্জনবর্ণ (Consonants)
  'ক', 'খ', 'গ', 'ঘ', 'ঙ',
  'চ', 'ছ', 'জ', 'ঝ', 'ঞ',
  'ট', 'ঠ', 'ড', 'ঢ', 'ণ',
  'ত', 'থ', 'দ', 'ধ', 'ন',
  'প', 'ফ', 'ব', 'ভ', 'ম',
  'য', 'র', 'ল', 'শ', 'ষ', 'স', 'হ',
  'ড়', 'ঢ়', 'য়',

  // কার (Vowel Signs / Matras)
  'া', 'ি', 'ী', 'ু', 'ূ', 'ৃ', 'ে', 'ৈ', 'ো', 'ৌ',

  // যুক্তবর্ণ (Common compound letters examples)
  'ক্ত', 'ক্ষ', 'জ্ঞ', 'ন্ত্র', 'চ্ছ', 'দ্র', 'ত্র', 'স্থ', 'জ্ঞ', 'ক্ষ্ম', 'স্ক', 'স্প', 'স্ত', 'শ্চ', 'স্থ্র',

  // সংখ্যা (Digits)
  '০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯',
];

// function LabelButtons({ onSelect }) {
//   const [customLabel, setCustomLabel] = useState('');

//   const handleCustomLabelChange = (e) => {
//     setCustomLabel(e.target.value);
//     onSelect(e.target.value);
//   };

//   const handlePredefinedClick = (char) => {
//     setCustomLabel(char);
//     onSelect(char);
//   };

//   return (
//     <div>
//       <h3>বাংলা অক্ষর নির্বাচন করুন বা লিখুন:</h3>

//       <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '1rem' }}>
//         {predefinedLabels.map((char) => (
//           <button
//             key={char}
//             onClick={() => handlePredefinedClick(char)}
//             style={{
//               padding: '8px 12px',
//               fontSize: '1.2rem',
//               backgroundColor: char === customLabel ? '#2ecc71' : '#ecf0f1',
//               color: char === customLabel ? 'white' : '#333',
//               border: '1px solid #bdc3c7',
//               borderRadius: '5px',
//               cursor: 'pointer',
//             }}
//           >
//             {char}
//           </button>
//         ))}
//       </div>

//       <div>
//         <input
//           type="text"
//           placeholder="অথবা নিজে লিখুন যেমন: ক্র"
//           value={customLabel}
//           onChange={handleCustomLabelChange}
//           style={{
//             padding: '10px',
//             fontSize: '1.1rem',
//             width: '100%',
//             maxWidth: '300px',
//             border: '1px solid #ccc',
//             borderRadius: '6px',
//             outlineColor: '#27ae60',
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default LabelButtons;

function LabelButtons({ onSelect }) {
  const [customLabel, setCustomLabel] = useState('');

  const handleCustomLabelChange = (e) => {
    setCustomLabel(e.target.value);
    onSelect(e.target.value);
  };

  const handlePredefinedClick = (char) => {
    setCustomLabel(char);
    onSelect(char);
  };

  return (
    <div>
      <h3 style={{ marginBottom: '0.5rem' }}>বাংলা অক্ষর নির্বাচন করুন বা লিখুন:</h3>

      {/* Scrollable button container */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          maxHeight: '250px',       // উচ্চতা সীমা
          overflowY: 'auto',        // উলম্ব স্ক্রল
          padding: '5px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          backgroundColor: '#fff',
        }}
      >
        {predefinedLabels.map((char) => (
          <button
            key={char}
            onClick={() => handlePredefinedClick(char)}
            style={{
              padding: '8px 12px',
              fontSize: '1.2rem',
              backgroundColor: char === customLabel ? '#2ecc71' : '#ecf0f1',
              color: char === customLabel ? 'white' : '#333',
              border: '1px solid #bdc3c7',
              borderRadius: '5px',
              cursor: 'pointer',
              flex: '0 0 auto',
            }}
          >
            {char}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <div style={{ marginTop: '0.5rem' }}>
        <input
          type="text"
          placeholder="অথবা নিজে লিখুন যেমন: ক্র"
          value={customLabel}
          onChange={handleCustomLabelChange}
          style={{
            padding: '10px',
            fontSize: '1.1rem',
            width: '100%',
            maxWidth: '300px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            outlineColor: '#27ae60',
          }}
        />
      </div>
    </div>
  );
}
export default LabelButtons;