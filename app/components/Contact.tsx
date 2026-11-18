import React from 'react';
import './Contact.css';

// 連絡先データ
const contactData = {
  items: [
    {
      type: 'email',
      icon: '✉️',
      label: 'メール',
      value: 'xxxxxxxxxxxxxxxx@xxxxx.com',
      link: 'xxxxxxxxxxxxxxxx@xxxxx.com'
    },
    {
      type: 'github',
      icon: '💻',
      label: 'GitHub',
      value: 'xxxxxxxxxxx',
      link: 'https://github.com/xxxxxxxxxxx'
    },
    {
      type: 'linkedin',
      icon: '🔗',
      label: 'LinkedIn',
      value: 'Name Name',
      link: 'https://www.linkedin.com/in/xxxxxxxxxxx/'
    },
    {
      type: 'location',
      icon: '🗺️',
      label: '活動拠点',
      value: 'XXXXXXXXXXXXX',
      link: '' // 空の場合はtargetを付与しない
    }
  ],
};

const Contact = () => {
  const { items } = contactData;
  return (
    <section className="contact-section">
      <div className="contact-grid">
        {items.map((item, index) => {
          // linkが存在するかどうかで判定
          const hasLink = !!item.link;
          return (
            <a
              key={index}
              href={hasLink ? item.link : undefined}
              target={hasLink && item.link.startsWith('http') ? '_blank' : undefined}
              rel={hasLink && item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-card"
              style={{ textDecoration: hasLink ? 'none' : 'none', cursor: hasLink ? 'pointer' : 'default' }}
            >
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-label">{item.label}</div>
              <div className="contact-value">{item.value}</div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;