'use client';
import { useEffect, useRef, useState } from 'react';
import TimelineData from './TimelineData';
import './Timeline.css';

type TimelineType = 'edu' | 'career' | 'part' | 'another';

interface TimelineItem {
  period?: string | null;
  type?: TimelineType | null;
  title?: string | null;
  description?: string | null;
  subItems?: Omit<TimelineItem, 'subItems'>[];
}

// 種別ごとの表示情報を返す
const getTypeInfo = (type: TimelineType | null | undefined) => {
  switch (type) {
    case 'edu':
      return { text: '学歴', color: 'var(--edu)' };
    case 'career':
      return { text: '職歴', color: 'var(--career)' };
    case 'part':
      return { text: 'アルバイト', color: 'var(--part)' };
    case 'another':
      return { text: 'その他', color: 'var(--another)' };
    default:
      return { text: '', color: 'transparent' };
  }
};

export default function Timeline() {
  const [visibleIds, setVisibleIds] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const items: TimelineItem[] = TimelineData();

  // 交差オブザーバー：表示領域に入ったらフェードイン
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute('data-index'));
          if (Number.isNaN(idx)) return;
          if (entry.isIntersecting) {
            setVisibleIds((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px 50px 0px' }
    );

    itemRefs.current = itemRefs.current.slice(0, items.length);
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items.length) {
    return <p className="timeline-empty">履歴がありません</p>;
  }

  return (
    <div className="timeline-adjust">
      <div className="timeline">
        {/* 中央の縦線 */}
        <div className="timeline-line" />

        {items.map((item, index) => {
          const { text: labelText, color: labelColor } = getTypeInfo(item.type);
          const isVisible = visibleIds.has(index);

          return (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              data-index={index}
              className={`timeline-item ${isVisible ? 'is-visible' : ''}`}
            >
              {/* 丸いマーカー */}
              <div
                className="timeline-marker"
                style={{ borderColor: labelColor }}
              />

              {/* カード本体 */}
              <div
                className="timeline-card"
                style={{ borderLeftColor: labelColor }}
              >
                {item.period && (
                  <div className="timeline-period">{item.period}</div>
                )}

                {labelText && (
                  <span
                  className="timeline-label"
                  style={{ background: labelColor }}
                  >
                    {labelText}
                  </span>
                )}

                {item.title && <h3 className="timeline-title">{item.title}</h3>}
                {item.description && <p className="timeline-desc">{item.description}</p>}

                {/* サブ項目 */}
                {item.subItems && item.subItems.length > 0 && (
                  <div className="timeline__sub-list">
                    {item.subItems.map((sub, subIdx) => {
                      const { text: subLabel, color: subColor } = getTypeInfo(sub.type)
                      return (
                        <div key={subIdx} className="timeline-sub-item">
                          {sub.period && (
                            <div className="timeline__sub-period">{sub.period}</div>
                          )}
                          {subLabel && (
                            <span
                              className="timeline-sub-label"
                              style={{ background: subColor }}
                            >
                              {subLabel}
                            </span>
                          )}
                          {sub.title && <h4 className="timeline-ub-title">{sub.title}</h4>}
                          {sub.description && <p className="timeline-sub-desc">{sub.description}</p>}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>

  );
}