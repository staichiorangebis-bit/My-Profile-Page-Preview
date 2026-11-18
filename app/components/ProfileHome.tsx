import './ProfileHome.css';
import SectionTitle from './SectionTitle';

const homeData = {
  profile: {
    name: '佐藤 太一',
    catch: 'フロントエンド・WEBエンジニア希望',
    intro: [
      'ユーザー視点を大切に快適な動作を目指し、',
      'トライ＆エラーを恐れず成長し続け、心に届くモノを届けます。'
    ],
    avatarPath: '/images/profileImage.jpg',
    avatarAlt: 'プロフィール写真'
  },
  strengths: [
    {
      title: '幅広い分野への興味',
      description: '機械制御・IoT から始まり、AI・ウェブデザインなど幅広く学んでいます。'
    },
    {
      title: '挑戦へ、努力を惜しまず',
      description: '興味ある分野へ挑戦と努力を続けています。'
    },
    {
      title: '失敗から学び行動',
      description: 'トライ＆エラーを重ね、失敗の探求が好きで、学び行動し続けます。'
    }
  ]
};

const ProfileHome = () => {
  const { profile, strengths } = homeData;

  return (
    <main className="home-main">
      {/* メインビジュアル：中央配置 */}
      
      <h1 className="home-name">{profile.name}</h1>
      
      <p className="home-catch">{profile.catch}</p>
      <img
        src={profile.avatarPath}
        alt={profile.avatarAlt}
        className="home-avatar"
      />

      <p className="home-intro">
        {profile.intro.map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </p>
      

      {/* 強みセクション：全体中央 */}
      <SectionTitle title="私の強み"></SectionTitle>
      <div className="home-cards">
        {strengths.map((item, index) => (
          <div key={index} className="home-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProfileHome;