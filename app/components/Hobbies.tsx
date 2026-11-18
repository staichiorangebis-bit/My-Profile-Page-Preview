import React, { useState, useMemo } from 'react'
import './Hobbies.css'
import SectionTitle from './SectionTitle'

const hobbiesData = [

  {
    id: 1,
    icon: '💻',
    name: 'プログラミング学習',
    description: '新しい技術に触れたり、簡単なツールを作ったり新しい知識を学ぶことが楽しいです。',
    bgImage: '/images/hobbies1.jpg'
  },
  {
    id: 2,
    icon: '🤖',
    name: '生成AIの学習',
    description: '生成AIのアルゴリズム学習しながら、求める結果に試行錯誤し探求するしています。',
    bgImage: '/images/hobbies2.jpg'
  },
  {
    id: 3,
    icon: '📚',
    name: '読書',
    description: '小説を読むのが好きです。気になる作品を見つけては読み想像力を膨らませています。',
    bgImage: '/images/hobbies3.jpg'
  },
  {
    id: 4,
    icon: '🎮',
    name: '友人とのゲーム',
    description: '刺激や新しい考えを求めて、ゲームを通じてコミュニケーションを楽しんでいます。',
    bgImage: '/images/hobbies4.jpg'
  }
]

const Hobbies = () => {
  const [activeId, setActiveId] = useState<number| null>(null);

  // アクティブな画像情報
  const activeBg = useMemo(() => {
    if (!activeId) return null;
    return hobbiesData.find(item => item.id === activeId);
  }, [activeId]);

  return (
    <section className="hobbies-section">
      {/* 背景レイヤー：フェード対応 */}
      <div className="bg-layer">
        {/* デフォルト背景：必要なら画像を指定 */}
        <div className="bg-image default"></div>
        
        {/* ホバー時の背景：複数重ねてフェード */}
        {hobbiesData.map(item => (
          <div
            key={item.id}
            className={`bg-image ${activeId === item.id ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.bgImage})` }}
          ></div>
        ))}
      </div>

      {/* コンテンツ本体 */}
      <div className="hobbies-content">
        <div className="hobbies-section-ajust"><SectionTitle title="趣味・関心" /></div>
        <div className="hobbies-grid">
          {hobbiesData.map(item => (
            <div
              key={item.id}
              className="hobby-card"
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className="hobby-icon">{item.icon}</div>
              <h3 className="hobby-name">{item.name}</h3>
              <p className="hobby-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;