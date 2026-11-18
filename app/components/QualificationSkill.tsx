import React from 'react';
import './QualificationSkill.css'; // スタイルを別ファイルで管理

// 資格データ
const QUALIFICATIONS = [
  { date: '2017年 3月', name: '技能士補 制御技術系' },
  { date: '2017年 12月', name: 'CGArts検定 WEBデザイナー' },
  { date: '2020年 3月', name: '普通自動車第一種運転免許' },

];

// スキルデータ（グループごとに管理）
const SKILL_GROUPS = [
    {
    title: 'プログラミングスキル',
    skills: [
      {
        name: 'JavaScript、HTML、CSS：　WEB制作、GAS等',
        level: '★★★★☆',
      },
      {
        name: 'JAVA、Kotlin：　Androidアプリ開発、運用保守',
        level: '★★★☆☆',
      },
      {
        name: 'C++、C＃：　Unity等におけるゲーム制作',
        level: '★★★☆☆',
      },
      {
        name: 'C言語 ：　Arduino等マイコンの組込みシステム',
        level: '★★★★☆',
      },
    ],
  },
  {
    title: 'PC業務スキル',
    skills: [
      {
        name: 'Excel：データ入力・集計・基本的な関数（SUM・AVERAGE等）',
        level: '★★★★☆',
      },
      {
        name: 'Word：文書作成・書式設定',
        level: '★★★☆☆',
      },
      {
        name: 'PowerPoint：資料作成・スライド編集',
        level: '★★★★☆',
      },
    ],
  },
  {
    title: 'その他業務スキル',
    skills: [
      {
        name: 'RPA当、業務改善ツール作成',
        level: '★★★★★'
      },
      {
        name: 'データ入力・帳簿整理・事務補助',
        level: '★★★★☆',
      },
      {
        name: '接客・レジ対応・在庫管理（コンビニ勤務経験より）',
        level: '★★★☆☆',
      },
    ],
  },
  // ↓ グループを追加するときはこの下に ↓
  // {
  //   title: '新しいカテゴリ',
  //   skills: [
  //     { name: 'スキル名', level: '★★★★★' },
  //   ],
  // },
];
// ==================== 🔽 編集エリアここまで ====================

const QualificationSkill: React.FC = () => {
  return (
    <div className="page-container">

      {/* 資格セクション：配列から自動描画 */}
      <div className="timeline-item">
        <div className="content-card">
          <h3 className="category-title qualification">資格</h3>
          <ul className="item-list">
            {QUALIFICATIONS.map((item, index) => (
              <li key={index}>
                <span className="date">{item.date}</span>
                <span className="name">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* スキルセクション：配列から自動描画 */}
      <div className="timeline-item">
        <div className="content-card">
          <h3 className="category-title skill">スキル</h3>

          {SKILL_GROUPS.map((group, gIndex) => (
            <div className="skill-group" key={gIndex}>
              <h4 className="group-heading">{group.title}</h4>
              <ul className="skill-list">
                {group.skills.map((skill, sIndex) => (
                  <li key={sIndex}>
                    {skill.name}
                    <span className="level">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QualificationSkill;