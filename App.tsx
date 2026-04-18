import React, { useState, useEffect } from 'react';
import { AuctionProvider, useAuction } from './store/AuctionContext';
import { AudioProvider } from './store/AudioContext';
import { TopBar } from './components/layout/TopBar';
import { EntryScreen } from './components/layout/EntryScreen';
import { SetupView } from './views/SetupView';
import { PlayersView } from './views/PlayersView';
import { HousesView } from './views/HousesView';
import { AuctionView } from './views/AuctionView';
import { RostersView } from './views/RostersView';

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('setup');
  const [entered, setEntered] = useState(false);
  const { seedDemo } = useAuction();

  useEffect(() => {
    // Seed demo data with the artifacts created earlier
    const pfps = {
      fremen: 'file:///C:/Users/mitta/.gemini/antigravity/brain/9def5324-e3b6-41a9-930f-f1c518b54415/fremen_pfp_1776510475131.png',
      sardaukar: 'file:///C:/Users/mitta/.gemini/antigravity/brain/9def5324-e3b6-41a9-930f-f1c518b54415/sardaukar_pfp_1776510500568.png',
      noble: 'file:///C:/Users/mitta/.gemini/antigravity/brain/9def5324-e3b6-41a9-930f-f1c518b54415/noble_pfp_1776510516521.png',
    };
    seedDemo(pfps);
  }, []);

  return (
    <>
      <EntryScreen onEnter={() => setEntered(true)} />
      
      {entered && (
        <div id="app">
          <TopBar activeTab={activeTab} onTabChange={setActiveTab} />
          
          <main>
            {activeTab === 'setup' && <SetupView onStart={() => setActiveTab('auction')} />}
            {activeTab === 'players' && <PlayersView />}
            {activeTab === 'houses' && <HousesView />}
            {activeTab === 'auction' && <AuctionView />}
            {activeTab === 'rosters' && <RostersView />}
          </main>
        </div>
      )}
    </>
  );
};

export default function App() {
  return (
    <AudioProvider>
      <AuctionProvider>
        <AppContent />
      </AuctionProvider>
    </AudioProvider>
  );
}
