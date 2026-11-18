import React, { useState, useRef, useEffect } from 'react'
import './HoverSidebar.css'

// ===== 型定義を追加 =====
type MenuChild = {
  label: string
  scrollId: string
}

type MenuItem = {
  icon: string
  label: string
  scrollId: string
  children: MenuChild[] | null  // 配列またはnull
}
// ========================

// メニューデータ
const menuData: MenuItem[] = [  // ← 型を指定
  { 
    icon: '🏠', 
    label: 'ホーム', 
    scrollId: 'section-home',
    children: null 
  },
  {
    icon: '📂',
    label: '経歴・活動履歴',
    scrollId: 'section-profile',
    children: null
  },
  {
    icon: '📊',
    label: '資格・スキル',
    scrollId: 'section-skills',
    children: null
  },
  {
    icon: '🎨',
    label: '趣味・関心',
    scrollId: 'section-hobbies',
    children: null
  },
  { 
    icon: '📞', 
    label: 'お問い合わせ', 
    scrollId: 'section-contact',
    children: null 
  }
]

type Props = {
  children?: React.ReactNode
}

const HoverSidebar = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    const rect = element.getBoundingClientRect()
    const offset = 20
    const targetY = rect.top + window.scrollY - offset
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    })
  }

  const handleParentEnter = (idx: number, hasChildren: boolean) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    if (hasChildren) setActiveSubmenu(idx)
  }

  const handleParentOrSubmenuLeave = () => {
    closeTimer.current = setTimeout(() => setActiveSubmenu(null), 10)
  }

  const handleSubmenuEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const handleSidebarEnter = () => {
    setIsSidebarOpen(true)
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const handleSidebarLeave = () => {
    closeTimer.current = setTimeout(() => {
      setIsSidebarOpen(false)
      setActiveSubmenu(null)
    }, 300)
  }

  return (
    <div className="app-wrap">
      <aside
        className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
        onMouseEnter={handleSidebarEnter}
        onMouseLeave={handleSidebarLeave}
      >
        <nav>
          <ul className="parent-list">
            {menuData.map((item, idx) => (
              <li key={idx} className="parent-item">
                <div
                  className="parent-link"
                  onClick={() => item.scrollId && scrollToSection(item.scrollId)}
                  onMouseEnter={() => handleParentEnter(idx, !!item.children)}
                  onMouseLeave={handleParentOrSubmenuLeave}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.label}</span>
                  {item.children && (
                    <span className="arrow">{activeSubmenu === idx ? '▲' : '▼'}</span>
                  )}
                </div>

                {item.children && (
                  <ul
                    className={`submenu ${activeSubmenu === idx ? 'show' : ''}`}
                    onMouseEnter={handleSubmenuEnter}
                    onMouseLeave={handleParentOrSubmenuLeave}
                  >
                    {/* 型推論が正しく動作するように */}
                    {item.children.map((child, cIdx) => (
                      <li key={cIdx} className="sub-item">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            child.scrollId && scrollToSection(child.scrollId)
                          }}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {children ?? null}
    </div>
  )
}

export default HoverSidebar