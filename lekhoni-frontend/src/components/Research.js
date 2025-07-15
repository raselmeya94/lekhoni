import React, { useState } from 'react';

function ResearchSection() {
  const [showEnglish, setShowEnglish] = useState(false);

  return (
    <div
      style={{
        position: 'relative', // টগল বাটনের জন্য
        textAlign: 'left',
        maxWidth: '100%',
        margin: '9px auto',
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
          <strong>লেখনি</strong> একটি বিশেষ প্ল্যাটফর্ম, যার মূল লক্ষ্য হলো সবার অংশগ্রহণে বাংলা হাতের লেখা অক্ষরের একটি বড় এবং উন্নত মানের ডেটাসেট তৈরি করা। 
          এই ডেটাসেটটি বাংলা ভাষার জন্য অপটিক্যাল ক্যারেক্টার রিকগনিশন (OCR), হাতের লেখা সনাক্তকরণ এবং অন্যান্য কৃত্রিম বুদ্ধিমত্তা-ভিত্তিক প্রযুক্তি তৈরিতে অত্যন্ত গুরুত্বপূর্ণ ভূমিকা রাখবে।
        </p>
      
        <h3>লেখনি কেন প্রয়োজন?</h3>
        <p>
          বিশ্বজুড়ে কোটি কোটি মানুষ বাংলা ভাষা ব্যবহার করেন, কিন্তু হাতের লেখা বোঝার ক্ষেত্রে বর্তমান OCR প্রযুক্তিগুলো ততটা কার্যকর নয়। 
          এর প্রধান কারণ হলো, হাতের লেখা অক্ষর শনাক্ত করার জন্য নির্ভরযোগ্য এবং পর্যাপ্ত ডেটাসেটের অভাব; এমন ডেটা প্রায় নেই বললেই চলে।
        </p>
        <p>
          <strong>লেখনি</strong> এই অভাব পূরণের উদ্দেশ্যেই যাত্রা শুরু করেছে। এখানে যে কেউ খুব সহজে এবং আনন্দের সাথে হাতের লেখা অক্ষর এঁকে এই ডেটাসেটে অবদান রাখতে পারবেন। 
          আমাদের লক্ষ্য হলো অন্তত ২,০০,০০০টিরও বেশি লেবেলযুক্ত ছবি সংগ্রহ করা, যা স্বরবর্ণ, ব্যঞ্জনবর্ণ, যুক্তবর্ণ, কারচিহ্ন ও সংখ্যাসহ বাংলা লিপির প্রায় সব উপাদানকে অন্তর্ভুক্ত করবে।
        </p>
      
        <h3>প্রধান বৈশিষ্ট্য</h3>
        <ul>
          <li>🖌️ সহজ ড্রইং ক্যানভাস: এখানে আপনি মাউস বা স্পর্শ ব্যবহার করে সহজেই অক্ষর আঁকতে পারবেন।</li>
          <li>🔠 স্পষ্ট লেবেল নির্বাচন: বাংলার সব সাধারণ অক্ষর এবং তাদের বিভিন্ন রূপের জন্য পরিষ্কার লেবেল বেছে নেওয়ার ব্যবস্থা রয়েছে।</li>
          <li>
            📈 রিয়েলটাইম পরিসংখ্যান: বর্তমানে শুধু লেবেলভিত্তিক এবং মোট ছবি গননা live আপডেট হিসেবে প্রদর্শিত হচ্ছে। 
            শিগগিরই user login ফিচার যোগ করা হবে, যার মাধ্যমে প্রত্যেক ব্যবহারকারীর অবদান গননা এবং শীর্ষ অবদানকারীদের তালিকা প্রদর্শন করা সম্ভব হবে।
          </li>

          <li>☁️ শক্তিশালী ব্যাকএন্ড: আপনার আঁকা ছবি ও সংশ্লিষ্ট তথ্য নিরাপদে সংরক্ষণ করা হবে।</li>
          <li>📦 ওপেন সোর্স: এই ডেটাসেট এবং প্ল্যাটফর্মটি সবার জন্য উন্মুক্ত থাকবে, যাতে সবাই এটি ব্যবহার করতে এবং এর উন্নতিতে সাহায্য করতে পারে।</li>
        </ul>
      
        <h3>আমাদের লক্ষ্য ও প্রত্যাশিত প্রভাব</h3>
        <p>
          আমরা বিশ্বাস করি, সমাজের সক্রিয় অংশগ্রহণের মাধ্যমে <strong>লেখনি</strong> বাংলা হ্যান্ডরাইটিং OCR গবেষণাকে অনেক দূর এগিয়ে নিয়ে যাবে। 
          এটি শুধু গবেষণার জন্যই নয়, বরং বাংলা ভাষাভাষীদের জন্য ডিজিটাল সুযোগ বাড়াবে, প্রযুক্তি ব্যবহারের সুবিধা দেবে এবং বাংলা লিপিকে ভবিষ্যতের জন্য সুরক্ষিত রাখবে।
        </p>
        <p>
          আমাদের আশা, <strong>লেখনি</strong> একদিন বাংলা হাতের লেখার জন্য সবচেয়ে সমৃদ্ধ ও নির্ভরযোগ্য ডেটাসেট হবে — যা গবেষণা, বাণিজ্যিক সফ্টওয়্যার এবং ওপেন সোর্স প্রকল্পগুলোতে ব্যাপকভাবে ব্যবহৃত হবে। 
          এভাবেই বাংলা ভাষাকে কৃত্রিম বুদ্ধিমত্তার জগতে আরও এক ধাপ এগিয়ে নিয়ে যাওয়া সম্ভব হবে।
        </p>
      
        <h3>আপনি কীভাবে সাহায্য করতে পারেন?</h3>
        <p>
          খুব সহজ! আপনার নিজের হাতেই বাংলা অক্ষর এঁকে আমাদের প্ল্যাটফর্মে অবদান রাখুন। আপনার আঁকা প্রতিটি অক্ষরই আমাদের কাছে অত্যন্ত মূল্যবান। 
          আপনি যদি ছাত্র, শিক্ষক, প্রযুক্তিপ্রেমী অথবা কেবল বাংলা ভাষার প্রতি ভালোবাসা রাখেন — আপনার অংশগ্রহণ আমাদের এই প্রকল্পের জন্য অপরিহার্য।
        </p>
        <blockquote className="italic border-l-4 border-indigo-600 bg-indigo-100 p-4 my-4 rounded-md text-indigo-700">
        আমাদের প্ল্যাটফর্মটি অতি শীঘ্রই ওপেন সোর্স হিসেবে উন্মুক্ত করা হবে। এতে ব্যবহারকারীরা শুধু কোড দেখতে পারবেন না, 
        বরং নতুন ফিচার যুক্ত করতে, বাগ ফিক্স করতে এবং পুরো প্রকল্পকে আরও উন্নত করতে সাহায্য করতে পারবেন। 
        আপনার অংশগ্রহণ ও মতামত এই যাত্রাকে সফল করতে গুরুত্বপূর্ণ ভূমিকা রাখবে। 
        পাশাপাশি, বন্ধুদেরও এ উদ্যোগে অংশ নিতে উৎসাহিত করুন যাতে আমরা সবাই মিলে বাংলা ভাষার জন্য একটি শক্তিশালী ও বিশ্বস্ত ডেটাসেট গড়ে তুলতে পারি।
      </blockquote>

            
        <h3>লেখনির পক্ষ থেকে আন্তরিক ধন্যবাদ!</h3>
      </>
      
      ) : (
        <>
          <h2>📚 Research Purpose & Project Overview</h2>

          <p>
            <strong>Lekhoni</strong> is a unique platform aimed at building a large and high-quality dataset of handwritten Bangla characters through community participation. 
            This dataset will play a crucial role in developing Bangla Optical Character Recognition (OCR), handwriting detection, and other AI-based technologies.
          </p>

          <h3>Why is Lekhoni Needed?</h3>
          <p>
            Although millions worldwide use the Bangla language, current OCR technologies are not very effective at understanding handwritten Bangla. 
            The main reason is the lack of reliable and sufficient datasets for recognizing handwritten characters; such data is almost non-existent.
          </p>
          <p>
            <strong>Lekhoni</strong> was launched to fill this gap. Anyone can easily and enjoyably contribute handwritten characters to this dataset. 
            Our goal is to collect over 200,000 labeled images covering vowels, consonants, compound characters, modifiers, and digits — encompassing nearly all elements of the Bangla script.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li>🖌️ Easy drawing canvas: You can draw characters effortlessly using mouse or touch.</li>
            <li>🔠 Clear label selection: Organized labels for all common Bangla characters and their variants.</li>
            <li>
              📈 Real-time statistics: Currently, live updates show label-wise and total image counts. 
              User login features will be added soon to track individual contributions and highlight top contributors.
            </li>
            <li>☁️ Robust backend: Your drawings and related data will be securely stored.</li>
            <li>📦 Open source: This dataset and platform will be publicly available for everyone to use and contribute towards its improvement.</li>
          </ul>

          <h3>Our Goals and Expected Impact</h3>
          <p>
            We believe that through active community participation, <strong>Lekhoni</strong> will significantly advance Bangla handwriting OCR research. 
            It will not only support research but also enhance digital access and preserve the Bangla script for future generations.
          </p>
          <p>
            We hope <strong>Lekhoni</strong> will one day become the most comprehensive and trusted dataset for Bangla handwriting — widely used in research, commercial software, and open-source projects. 
            This will help elevate the Bangla language within the AI handwriting recognition landscape.
          </p>

          <h3>How Can You Help?</h3>
          <p>
            It’s simple! Contribute by drawing Bangla characters yourself on our platform. Every character you draw is valuable to us. 
            Whether you are a student, teacher, tech enthusiast, or simply a Bangla lover — your participation is essential for this project.
          </p>
          <blockquote className="italic border-l-4 border-indigo-600 bg-indigo-100 p-4 my-4 rounded-md text-indigo-700">
            Our platform will soon be open source. Users will not only be able to view the code, but also contribute new features, fix bugs, and help improve the entire project. 
            Your participation and feedback will play a vital role in making this journey successful. 
            Please encourage your friends to join this initiative so that together we can build a strong and reliable dataset for the Bangla language.
          </blockquote>

          <h3>Heartfelt thanks from the Lekhoni team!</h3>
          </>
          )}
    </div>
  );
}

export default ResearchSection;
