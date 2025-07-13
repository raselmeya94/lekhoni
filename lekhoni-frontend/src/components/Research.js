import React, { useState } from 'react';

function ResearchSection() {
  const [showEnglish, setShowEnglish] = useState(false);

  return (
    <div
      style={{
        position: 'relative', // টগল বাটনের জন্য
        textAlign: 'left',
        maxWidth: '100%',
        margin: '0 auto',
        lineHeight: '1.6',
        fontSize: '1.1rem',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '12px',
        backgroundColor: '#fafafa',
        boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
      }}
    >
      {/* Toggle Button top-right corner */}
      <button
        onClick={() => setShowEnglish(!showEnglish)}
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          padding: '6px 12px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          backgroundColor: showEnglish ? '#2980b9' : '#eee',
          color: showEnglish ? 'white' : 'black',
          fontWeight: 'bold',
          cursor: 'pointer',
          userSelect: 'none',
          transition: 'all 0.3s ease',
          fontSize: '0.9rem',
          minWidth: '60px',
          textAlign: 'center',
        }}
        aria-label="Toggle language"
        title={showEnglish ? 'বাংলা দেখাও' : 'Show English'}
      >
        {showEnglish ? 'বাংলা' : 'English'}
      </button>

      {/* Content */}
      {!showEnglish ? (
        <>
          <h2>📚 গবেষণার উদ্দেশ্য ও প্রকল্পের বিবরণ</h2>

          <p>
            <strong>লেখনি</strong> একটি বিশেষ ক্রাউড-সোর্সড প্ল্যাটফর্ম, যা বৃহৎ ও মানসম্পন্ন বাংলা হাতের লেখা অক্ষরের ডেটাসেট তৈরি করার লক্ষ্যে তৈরি।
            এই ডেটাসেটটি বাংলা অপটিক্যাল ক্যারেক্টার রিকগনিশন (OCR), হ্যান্ডরাইটিং রিকগনিশন ও সংশ্লিষ্ট AI টুলগুলোর জন্য গুরুত্বপূর্ণ সম্পদ হবে।
          </p>

          <h3>লেখনি কেন জরুরি?</h3>
          <p>
            বাংলা ভাষার ব্যাপক ব্যবহারের পরও, বিদ্যমান OCR সিস্টেমগুলো বাংলা হাতের লেখার ক্ষেত্রে ভালো পারফর্ম করে না।
            কারণ মানসম্মত প্রশিক্ষণ ডেটাসেটের অভাব। অধিকাংশ OCR টুলের জন্য বাংলা হাতের লেখা ডেটাসেট খুবই সীমিত বা পাওয়া যায় না।
          </p>
          <p>
            লেখনি এই সমস্যা সমাধানে যাত্রা শুরু করেছে — যেকেউ সহজে ও মজাদার উপায়ে হাতের লেখা ক্যারেক্টার ড্র করে ডেটাসেটের জন্য অবদান রাখতে পারবে।
            আমাদের লক্ষ্য ২,০০,০০০+ লেবেলযুক্ত ছবি সংগ্রহ করা যা বাংলা স্বরবর্ণ, ব্যঞ্জনবর্ণ, যুক্তবর্ণ, কার, সংখ্যা সহ সব ধরনের ক্যারেক্টারকে কভার করবে।
          </p>

          <h3>প্রধান বৈশিষ্ট্যসমূহ</h3>
          <ul>
            <li>🖌️ ব্যবহারবান্ধব ড্রয়িং ক্যানভাস যেখানে মাউস বা টাচ দিয়ে ক্যারেক্টার আঁকা যায়।</li>
            <li>🔠 বাংলার সকল সাধারণ ক্যারেক্টার ও তাদের ভেরিয়েন্টের জন্য স্পষ্ট লেবেল সিলেকশন।</li>
            <li>📈 রিয়েলটাইমে লেবেলভিত্তিক অবদানের পরিসংখ্যান দেখা যায়।</li>
            <li>☁️ ব্যাকএন্ড সিস্টেম যা ছবি ও মেটাডেটা সুরক্ষিতভাবে সংরক্ষণ করে।</li>
            <li>📦 ডেটাসেট ও প্ল্যাটফর্ম উন্মুক্ত উৎস হিসেবে প্রকাশ করা হবে যাতে সবাই ব্যবহার ও উন্নয়ন করতে পারে।</li>
          </ul>

          <h3>আমাদের লক্ষ্য ও প্রভাব</h3>
          <p>
            কমিউনিটি অংশগ্রহণের শক্তিকে কাজে লাগিয়ে, লেখনি বাংলা হ্যান্ডরাইটিং OCR গবেষণা ও উন্নয়নে গতি দেবে।
            এটি ডিজিটাল সাক্ষরতা উন্নয়ন, অ্যাক্সেসিবিলিটি বাড়ানো এবং বাংলা লিপির সুরক্ষায় গুরুত্বপূর্ণ ভূমিকা পালন করবে।
          </p>
          <p>
            আমরা আশাবাদী যে <strong>লেখনি</strong> হবে একক মানের ডেটাসেট, যা একাডেমিক গবেষণা, বাণিজ্যিক OCR ইঞ্জিন, ও ওপেন সোর্স প্রকল্পে ব্যাপকভাবে ব্যবহৃত হবে — বাংলা ভাষাকে AI-তে উন্নত স্তরে তুলে ধরবে।
          </p>

          <h3>আপনি কীভাবে সাহায্য করতে পারেন?</h3>
          <p>
            আপনার হাতের লেখা ক্যারেক্টার ড্র করে আমাদের প্ল্যাটফর্মে অবদান রাখুন। প্রতিটি স্ট্রোক মূল্যবান!
            আপনি ছাত্র, গবেষক, ডেভেলপার অথবা বাংলার প্রতি ভালোবাসা রাখেন — আপনার অংশগ্রহণ আমাদের জন্য অপরিহার্য।
            একসাথে আমরা প্রযুক্তিকে আরও মানুষ বানাতে পারি যারা বাংলা ভাষাভাষী জনসাধারণের সেবা করবে।
          </p>
          <p>
            আমাদের প্ল্যাটফর্ম সম্পূর্ণ ওপেন সোর্স। কোড দেখুন, উন্নয়নের জন্য প্রস্তাব দিন, এবং বন্ধুদের জানান।
          </p>

          <h3>লেখনির জন্য ধন্যবাদ!</h3>
        </>
      ) : (
        <>
          <h2>📚 Research Purpose & Project Overview</h2>
          <p>
            <strong>Lekhoni</strong> is a unique crowd-sourced platform designed to build a massive, high-quality dataset of handwritten Bangla characters.
            This dataset will be a crucial resource for researchers and developers working on Bangla Optical Character Recognition (OCR), handwriting recognition, and related AI tools.
          </p>

          <h3>Why is Lekhoni important?</h3>
          <p>
            Despite the widespread use of Bangla language, existing OCR engines and handwriting recognition systems struggle due to lack of good training data.
            Popular OCR tools perform poorly on handwritten Bangla because publicly available datasets are limited, inconsistent, or non-existent.
          </p>
          <p>
            Lekhoni addresses this gap by enabling anyone to contribute handwritten samples easily through a simple and engaging web app.
            Our goal is to collect over <strong>200,000+ labeled images</strong> covering vowels, consonants, modifiers, compound characters, and digits — a scale unseen before for Bangla handwriting.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li>🖌️ User-friendly drawing canvas for contributors to draw characters using mouse or touch.</li>
            <li>🔠 Organized label selection with all common Bangla characters and variants.</li>
            <li>📈 Real-time label-wise contribution statistics to track progress.</li>
            <li>☁️ Backend support to save images and metadata securely.</li>
            <li>📦 Open-source release of dataset and platform for community use and research.</li>
          </ul>

          <h3>Our Vision & Impact</h3>
          <p>
            By harnessing the power of community participation, Lekhoni will accelerate research and development of Bangla handwriting OCR.
            This will unlock better digital literacy, improve accessibility, and preserve the rich Bengali script for future generations.
          </p>
          <p>
            We envision <strong>Lekhoni</strong> becoming the standard dataset used in academic papers, commercial OCR engines, and open-source projects — making Bangla a first-class citizen in AI handwriting recognition.
          </p>

          <h3>How can you help?</h3>
          <p>
            Join us by contributing your handwriting samples. Every stroke counts! Whether you're a student, researcher, developer, or simply passionate about Bangla, your participation matters.
            Together, we can empower technology to better understand and serve millions of Bengali speakers worldwide.
          </p>
          <p>
            The platform is open-source and welcoming. Feel free to explore the code, suggest improvements, or spread the word!
          </p>

          <h3>Thank you for supporting Lekhoni!</h3>
        </>
      )}
    </div>
  );
}

export default ResearchSection;
