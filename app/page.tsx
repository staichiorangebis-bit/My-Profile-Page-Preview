'use client';
import { useState } from 'react'; // useEffectは不要に
import PageBackground from'./components/PageBackground';
import HoverSidebar from './components/HoverSidebar';
import ProfileHome from './components/ProfileHome';
import Timeline from './components/Timeline';
import QualificationSkill from './components/QualificationSkill';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import BackgroundWrapper from './components/BackgroundWrapper';
import SectionTitle from './components/SectionTitle';

// 設定データはここに残す
const sectionConfig = [
  { id: 'section-home', bgImage: '' },
  { id: 'section-profile', bgImage: '/images/bg1.jpg' },
  { id: 'section-skills', bgImage: '/images/bg2.jpg' },
  { id: 'section-hobbies', bgImage: '/images/bg3.jpg' },
  { id: 'section-contact', bgImage: '/images/bg4.jpg' },
];

export default function App() {
  return (
    <div style={{ 
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <PageBackground sectionConfig={sectionConfig} />

      <div style={{ display: 'flex', flex: 1, width: '100%' }}>
        <HoverSidebar />
        <main style={{ flex: 1, padding: 0, display: 'flex', flexDirection: 'column' }}>
          
          <div id="section-home">
            <ProfileHome />
          </div>
          <div id="section-profile">
            <BackgroundWrapper>
              <SectionTitle title="経歴・活動履歴" />
              <Timeline />
            </BackgroundWrapper>
          </div>
          <div id="section-skills">
            <BackgroundWrapper>
              <SectionTitle title="資格・スキル" />
              <QualificationSkill />
            </BackgroundWrapper>
          </div>
          <div id="section-hobbies">
            <Hobbies />
          </div>
          <div id="section-contact" style={{ marginTop: 'auto' }}>
            <BackgroundWrapper>
              <SectionTitle title="お問い合わせ" />
              <Contact />
            </BackgroundWrapper>
          </div>
        </main>
      </div>
      <BackToTop />
    </div>
  );
}