// import { useState, useEffect } from 'react';
// import Canvas from './components/Canvas';
// import LabelButtons from './components/LabelButtons';
// import Stats from './components/Stats';
// import LabelStats from './components/LabelStats';
// import Navbar from './components/Navbar'; 
// import Research from './components/Research'; 
// import './App.css';

// function App() {
//   const [selectedLabel, setSelectedLabel] = useState('');
//   const [submissionCount, setSubmissionCount] = useState(0);
//   const [labelStats, setLabelStats] = useState({});
//   const [currentTab, setCurrentTab] = useState('home'); // 🧭 tab manager

//   const fetchLabelStats = async () => {
//     try {
//       const res = await fetch('http://localhost:8000/stats');
//       if (res.ok) {
//         const data = await res.json();
//         setLabelStats(data);
//       }
//     } catch (err) {
//       console.error('Failed to fetch stats:', err);
//     }
//   };

//   useEffect(() => {
//     fetchLabelStats();
//   }, []);

//   const handleSave = async (blob) => {
//     if (!selectedLabel) {
//       alert('Please select a Bangla character first!');
//       return false;
//     }

//     const formData = new FormData();
//     formData.append('image', blob, `${selectedLabel}_${Date.now()}.png`);
//     formData.append('label', selectedLabel);

//     try {
//       const res = await fetch('http://localhost:8000/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (res.ok) {
//         setSubmissionCount((prev) => prev + 1);
//         alert('Character saved successfully!');
//         fetchLabelStats();
//         return true;
//       } else {
//         alert('Failed to save character.');
//         return false;
//       }
//     } catch (err) {
//       console.error('Error saving character:', err);
//       alert('Failed to save. Try again.');
//       return false;
//     }
//   };

//   return (
//     <div className="app">
//       <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

//       {/* 👇 Wrap all return content in a fragment */}
//       <>
//         {currentTab === 'home' && (
//           <div className="app-container">
//             <div className="left-panel">
//               <Canvas onSave={handleSave} />
//             </div>

//             <div className="controls">
//               <LabelButtons onSelect={setSelectedLabel} />
//               <Stats count={submissionCount} selectedLabel={selectedLabel} />
//             </div>

//             <div className="label-stats-container">
//               <LabelStats stats={labelStats} />
//             </div>
//           </div>
//         )}

       
//       {currentTab === 'research' && (
//         <Research />
//       )}
//     </>
//   </div>
// );
// }
// export default App;

import { useState, useEffect } from 'react';
import Canvas from './components/Canvas';
import LabelButtons from './components/LabelButtons';
import Stats from './components/Stats';
import LabelStats from './components/LabelStats';
import Navbar from './components/Navbar'; 
import Research from './components/Research'; 
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [selectedLabel, setSelectedLabel] = useState('');
  const [submissionCount, setSubmissionCount] = useState(0);
  const [labelStats, setLabelStats] = useState({});
  const [currentTab, setCurrentTab] = useState('home'); // 🧭 tab manager

  // Update document title on tab change
  useEffect(() => {
    if (currentTab === 'home') {
      document.title = 'Lekhoni - Home';
    } else if (currentTab === 'research') {
      document.title = 'Lekhoni - Research';
    } else {
      document.title = 'Lekhoni';
    }
  }, [currentTab]);

  const fetchLabelStats = async () => {
    try {
      const res = await fetch('http://localhost:8000/stats');
      if (res.ok) {
        const data = await res.json();
        setLabelStats(data);
      }
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    }
  };

  useEffect(() => {
    fetchLabelStats();
  }, []);

  const handleSave = async (blob) => {
    if (!selectedLabel) {
      alert('Please select a Bangla character first!');
      return false;
    }

    const formData = new FormData();
    formData.append('image', blob, `${selectedLabel}_${Date.now()}.png`);
    formData.append('label', selectedLabel);

    try {
      const res = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setSubmissionCount((prev) => prev + 1);
        alert('Character saved successfully!');
        fetchLabelStats();
        return true;
      } else {
        alert('Failed to save character.');
        return false;
      }
    } catch (err) {
      console.error('Error saving character:', err);
      alert('Failed to save. Try again.');
      return false;
    }
  };

  return (
    <div className="app">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* 👇 Wrap all return content in a fragment */}
      <>
        {currentTab === 'home' && (
          <div className="app-container">
            <div className="left-panel">
              <Canvas onSave={handleSave} />
            </div>

            <div className="controls">
              <LabelButtons onSelect={setSelectedLabel} />
              <Stats count={submissionCount} selectedLabel={selectedLabel} />
            </div>

            <div className="label-stats-container">
              <LabelStats stats={labelStats} />
            </div>
          </div>
        )}

        {currentTab === 'research' && (
          <Research />
        )}

      <Footer />
      </>
    </div>
  );
}

export default App;
