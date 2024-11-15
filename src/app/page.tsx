"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    about: "About Me",
    work: "My Work",
    initiatives: "My Initiatives",
    contact: "Contact Us",
    heroTitle: "Official Website of Nagendra Lodhi",
    heroSubTitle: "Your voice, your vision, your leader",
    learnMore: "Learn More",
    aboutTitle: "About Nagendra Lodhi",
    aboutContent: "Nagendra Lodhi is an inspiration for the youth of Vidisha district. He is the Vice President of Bharatiya Janata Party Youth Wing, founder of Matrabhumi Yuva Parishad, and secretary of the Canara Cricket Club. His goal is to promote education, development, and unity in society.",
    workTitle: "My Work",
    work1Title: "Cleanliness Drive",
    work1Content: "Nagendra played a key role in organizing campaigns to maintain cleanliness in Vidisha district.",
    work2Title: "Education Awareness",
    work2Content: "Conducted awareness campaigns in schools and rural areas to promote the importance of education.",
    work3Title: "Youth Empowerment",
    work3Content: "Organized workshops to provide job opportunities and skill development for the youth.",
    initiativesTitle: "My Initiatives",
    initiative1Title: "Women Empowerment",
    initiative1Content: "Organized training and awareness programs to help women become self-reliant.",
    initiative2Title: "Health Camps",
    initiative2Content: "Organized health camps in villages to provide free medical services to the rural community.",
    initiative3Title: "Agricultural Development",
    initiative3Content: "Conducted workshops to educate farmers about the latest agricultural techniques.",
    achievementsTitle: "My Achievements",
    achievementsContent: "Nagendra Lodhi has achieved significant milestones in the fields of education, cleanliness, and social welfare. He has effectively mobilized the youth of Vidisha district towards social reform, resulting in increased awareness towards education and improved access to healthcare services.",
    contactTitle: "Contact Us",
    contactContent: "For questions, suggestions, or collaboration, contact us:",
    email: "Email: contact@nagendralodhi.com",
    phone: "Phone: +91-XXXXXXXXXX",
  },
  hi: {
    about: "मेरे बारे में",
    work: "मेरा काम",
    initiatives: "मेरी पहलकदमियाँ",
    contact: "संपर्क करें",
    heroTitle: "नागेंद्र लोधी की आधिकारिक वेबसाइट",
    heroSubTitle: "आपकी आवाज़, आपका विजन, आपका नेता",
    learnMore: "और जानें",
    aboutTitle: "नागेंद्र लोधी के बारे में",
    aboutContent: "नागेंद्र लोधी, विदिशा जिले के युवाओं के लिए प्रेरणास्त्रोत हैं। वे भारतीय जनता पार्टी के युवा मोर्चा के उपाध्यक्ष, मातृभूमि युवा परिषद के संस्थापक, और कैनरा क्रिकेट क्लब के सचिव हैं। उनका उद्देश्य समाज में शिक्षा, विकास, और एकता को बढ़ावा देना है।",
    workTitle: "मेरा काम",
    work1Title: "स्वच्छता अभियान",
    work1Content: "विदिशा जिले में स्वच्छता बनाए रखने के लिए चलाए गए अभियानों में नागेंद्र ने महत्वपूर्ण भूमिका निभाई।",
    work2Title: "शिक्षा जागरूकता",
    work2Content: "शिक्षा के महत्व को बढ़ावा देने के लिए विभिन्न विद्यालयों और ग्रामीण क्षेत्रों में जागरूकता अभियान चलाए।",
    work3Title: "युवा सशक्तिकरण",
    work3Content: "युवाओं को रोजगार और कौशल विकास के अवसर प्रदान करने के लिए कार्यशालाओं का आयोजन किया।",
    initiativesTitle: "मेरी पहलकदमियाँ",
    initiative1Title: "महिला सशक्तिकरण",
    initiative1Content: "महिलाओं के आत्मनिर्भर बनने के लिए प्रशिक्षण और जागरूकता कार्यक्रमों का आयोजन किया।",
    initiative2Title: "स्वास्थ्य शिविर",
    initiative2Content: "गाँवों में स्वास्थ्य शिविरों का आयोजन कर ग्रामीण समुदाय को मुफ्त चिकित्सा सेवाएँ उपलब्ध करवाईं।",
    initiative3Title: "कृषि विकास",
    initiative3Content: "किसानों को नवीनतम कृषि तकनीकों की जानकारी देने के लिए कार्यशालाओं का आयोजन किया।",
    achievementsTitle: "मेरी उपलब्धियाँ",
    achievementsContent: "नागेंद्र लोधी ने शिक्षा, स्वच्छता, और सामाजिक कल्याण के क्षेत्रों में कई महत्वपूर्ण उपलब्धियाँ हासिल की हैं। उन्होंने विदिशा जिले में युवाओं को संगठित कर सामाजिक सुधार की दिशा में प्रभावी कदम उठाए हैं। उनकी पहल के कारण शिक्षा के प्रति जागरूकता में वृद्धि हुई है और स्वास्थ्य सेवाओं की पहुँच में सुधार हुआ है।",
    contactTitle: "संपर्क करें",
    contactContent: "प्रश्न, सुझाव या सहयोग के लिए संपर्क करें:",
    email: "ईमेल: contact@nagendralodhi.com",
    phone: "फोन: +91-XXXXXXXXXX",
  }
};

const Page = () => {
  const [language, setLanguage] = useState('hi');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'hi' ? 'en' : 'hi'));
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const scrollDepth = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const scrollbar = document.getElementById("scrollbar");
      scrollbar.style.width = `${scrollDepth * 100}%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 animate-gradient-move relative">
      {/* Custom Scroll Bar */}
      <div id="scrollbar" className="h-2 fixed top-0 left-0 bg-gradient-to-r from-orange-500 via-white to-green-500 z-50"></div>

      {/* Language Toggle Button */}
      <button onClick={toggleLanguage} className="fixed top-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-full">
        {language === 'hi' ? 'English' : 'हिन्दी'}
      </button>

      {/* Header Section */}
      <motion.header 
        className="p-6 flex flex-col items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
        </div>
        <nav className="flex space-x-8">
          <a href="#about" className="text-blue-900 font-semibold mx-4">{t.about}</a>
          <a href="#work" className="text-blue-900 font-semibold mx-4">{t.work}</a>
          <a href="#initiatives" className="text-blue-900 font-semibold mx-4">{t.initiatives}</a>
          <a href="#contact" className="text-blue-900 font-semibold mx-4">{t.contact}</a>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="flex flex-col md:flex-row items-center h-screen p-5 md:p-10 gap-5 md:gap-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">{t.heroTitle}</h2>
          <p className="text-lg md:text-xl font-light text-blue-900">{t.heroSubTitle}</p>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition duration-200"
          >
            {t.learnMore}
          </motion.button>
        </div>
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img
            src="/IMG_3891.JPG"
            alt="स्वागत छवि"
            className="w-full h-60 md:h-80 rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="flex flex-col md:flex-row items-center p-5 md:p-10 bg-white rounded-lg shadow-md gap-5 md:gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex-1 w-full">
          <img src="/IMG_3891.JPG" alt={t.aboutTitle} className="w-full h-60 md:h-80 rounded-lg shadow-lg object-cover" />
        </div>
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">{t.aboutTitle}</h2>
          <p className="text-base md:text-lg text-blue-900 font-serif">
            {t.aboutContent}
          </p>
        </div>
      </motion.section>

      {/* My Work Section */}
      <motion.section 
        id="work" 
        className="flex flex-col p-5 md:p-10 bg-gray-50 rounded-lg shadow-md gap-5 md:gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 text-center mb-6">{t.workTitle}</h2>
        <div className="overflow-x-auto flex gap-6 pb-4">
          <motion.div 
            className="min-w-[250px] md:min-w-[300px] p-6 bg-white shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl md:text-2xl font-medium text-blue-900">{t.work1Title}</h3>
            <p className="text-blue-900 text-sm md:text-base">{t.work1Content}</p>
          </motion.div>
          <motion.div 
            className="min-w-[250px] md:min-w-[300px] p-6 bg-white shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl md:text-2xl font-medium text-blue-900">{t.work2Title}</h3>
            <p className="text-blue-900 text-sm md:text-base">{t.work2Content}</p>
          </motion.div>
          <motion.div 
            className="min-w-[250px] md:min-w-[300px] p-6 bg-white shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl md:text-2xl font-medium text-blue-900">{t.work3Title}</h3>
            <p className="text-blue-900 text-sm md:text-base">{t.work3Content}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* My Initiatives Section */}
      <motion.section 
        id="initiatives" 
        className="flex flex-col p-5 md:p-10 bg-white rounded-lg shadow-md gap-5 md:gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 text-center mb-6">{t.initiativesTitle}</h2>
        <div className="overflow-x-auto flex gap-6 pb-4">
          <motion.div 
            className="min-w-[250px] md:min-w-[300px] p-6 bg-gray-50 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl md:text-2xl font-medium text-blue-900">{t.initiative1Title}</h3>
                        <p className="text-blue-900 text-sm md:text-base">{t.initiative1Content}</p>
          </motion.div>
          <motion.div 
            className="min-w-[250px] md:min-w-[300px] p-6 bg-gray-50 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl md:text-2xl font-medium text-blue-900">{t.initiative2Title}</h3>
            <p className="text-blue-900 text-sm md:text-base">{t.initiative2Content}</p>
          </motion.div>
          <motion.div 
            className="min-w-[250px] md:min-w-[300px] p-6 bg-gray-50 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl md:text-2xl font-medium text-blue-900">{t.initiative3Title}</h3>
            <p className="text-blue-900 text-sm md:text-base">{t.initiative3Content}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* My Achievements Section */}
      <motion.section
        id="achievements"
        className="p-5 md:p-10 bg-gray-50 rounded-lg shadow-md text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-6">{t.achievementsTitle}</h2>
        <p className="text-base md:text-lg text-blue-900">{t.achievementsContent}</p>
      </motion.section>

      {/* Contact Us Section */}
      <motion.section
        id="contact"
        className="p-5 md:p-10 bg-white rounded-lg shadow-md text-center space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">{t.contactTitle}</h2>
        <p className="text-base md:text-lg text-blue-900">{t.contactContent}</p>
        <p className="text-blue-900">{t.email}</p>
        <p className="text-blue-900">{t.phone}</p>
      </motion.section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-6 text-center">
        <p>© 2024 नागेंद्र लोधी</p>
      </footer>
    </div>
  );
};

export default Page;

