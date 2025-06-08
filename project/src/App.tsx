import React from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <SearchSection />
      <Footer />
    </div>
  );
}

export default App;