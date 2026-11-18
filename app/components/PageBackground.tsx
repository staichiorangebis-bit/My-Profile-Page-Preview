'use client';
import { useState, useEffect } from 'react';
import styles from './PageBackground.module.css';

// 型定義
type SectionConfig = {
  id: string;
  bgImage: string;
};

type Props = {
  sectionConfig: SectionConfig[];
};

export default function PageBackground({ sectionConfig }: Props) {
  const [activeBg, setActiveBg] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.4;

      const sectionPositions = sectionConfig.map((sec) => {
        const el = document.getElementById(sec.id);
        const top = el?.getBoundingClientRect().top ?? 9999;
        return { bgImage: sec.bgImage, top };
      });

      let currentBg = '';
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (sectionPositions[i].top < threshold) {
          currentBg = sectionPositions[i].bgImage;
          break;
        }
      }
      setActiveBg(currentBg);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 初回実行
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionConfig]);

  return (
    <>
      {sectionConfig.map((sec) => (
        <div
          key={sec.id}
          className={`${styles.bgLayer} ${activeBg === sec.bgImage ? styles.active : ''}`}
          style={{
            backgroundImage: sec.bgImage ? `url(${sec.bgImage})` : 'none',
          }}
        />
      ))}
    </>
  );
}