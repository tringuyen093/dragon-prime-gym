import React, { useState, useEffect, useMemo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  EQUIPMENT_ELEIKO_URL,
  EQUIPMENT_POWERLIFTING_BARS_URL,
  PRODUCT_COMBO_RACK_URL,
  TRAINING_GYM_URL,
  TRAINING_YOGA_URL,
  TRAINING_POWERLIFTING_URL,
  ABOUT_US_URL
} from '@/router/common'
import useResize from '@/hooks/useResize'
import styled from 'styled-components'
import logo from '@/assets/images/dragonprime-logo-white.png'

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;

  .menu-item {
    cursor: pointer;
    position: relative;
    text-transform: capitalize;
    transition: all 400ms ease;
    font-family: 'Montserrat Medium';
    font-size: var(--font-size-2sm);
  }
`

const HeaderDesktopWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 80px;
  transition: all 300ms ease;
  padding: var(--space-xs) var(--space-lg);
  background-color: var(--color-gray-850);

  .logo {
    display: flex;
    align-items: center;
    margin-right: var(--space-3xl);
    padding-left: var(--space-lg);

    a {
      display: flex;
      align-items: center;

      &:hover {
        opacity: 1;
      }
    }

    img {
      transition: all 300ms ease;
      width: 200px;
    }
  }

  .menu {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: var(--space-4xl);

    .menu-item {
      padding: var(--space-lg) var(--space-xl);

      a {
        color: var(--color-white);
      }

      .submenu {
        display: none;
        position: absolute;
        top: 60px;
        left: var(--space-xl);
        z-index: 1000;
        transition: all 400ms ease;

        .submenu-active {
          overflow: hidden;
          border-radius: var(--obj-radius-sm);

          .submenu-item {
            display: block;
            white-space: nowrap;
            padding: var(--space-sm);
            background: var(--color-black);
          }
        }

        .submenu-hidden {
          padding: var(--space-2sm);
        }
      }

      &:hover {
        .submenu {
          display: block;
        }
      }
    }
  }
`

const HeaderMobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all 300ms ease;
  min-height: 80px;
  padding: var(--space-2xs) 0;

  .logo {
    img {
      width: 200px;
    }
  }

  .menu-toggle {
    cursor: pointer;
    overflow: hidden;
    width: var(--space-lg);
    height: var(--space-lg);
    background: var(--color-white);
    position: absolute;
    right: var(--space-sm);
    top: var(--space-2xl);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .line-toggle {
    position: absolute;
    display: block;
    width: var(--space-lg);
    height: var(--obj-radius-xs);
    background: var(--color-gray-750);
    border-radius: var(--obj-radius-xs);
    transition: all 400ms;
  }

  .line-toggle:first-child {
    transform: translateY(-7px) translateX(4px);
    width: var(--space-sm);
    transition-delay: 0s;
  }

  .menu-toggle .line-toggle:nth-child(2) {
    transition-delay: 0.12s;
  }

  .line-toggle:last-child {
    transform: translateY(7px) translateX(7px);
    width: 10px;
    transition-delay: 0s;
  }

  .menu-toggle.expanded .line-toggle:first-child {
    background: var(--color-white);
    transform: translateY(0) translateX(0) rotate(45deg);
    width: var(--space-lg);
    height: var(--obj-radius-xs);
    transition-delay: 0.1s;
  }

  .menu-toggle.expanded .line-toggle:nth-child(2) {
    transform: translateX(110px);
    transition-delay: 0s;
  }

  .menu-toggle.expanded .line-toggle:last-child {
    background: var(--color-white);
    transform: translateY(0) translateX(0) rotate(314deg);
    width: var(--space-lg);
    height: var(--obj-radius-xs);
    transition-delay: 0.1s;
  }
`

const MenuMobileWrapper = styled.div<{ toggle: boolean | string }>`
  max-width: 400px;
  width: 100%;
  height: 100%;
  background: var(--color-gray-850);
  position: fixed;
  left: ${({ toggle }) => (toggle ? '0px' : '-1500px')};
  top: 0;
  transition: all 400ms ease;

  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: var(--space-lg);
    padding-left: var(--space-lg);

    .menu-item {
      display: flex;
      flex-direction: column;

      a {
        padding: var(--space-xs) var(--space-2sm);
        color: var(--color-white);
      }

      .submenu {
        display: none;
        flex-direction: column;
        margin-left: var(--space-2sm);
      }

      &:hover {
        .submenu {
          display: flex;
        }
      }
    }
  }

  .menu-toggle.expanded {
    position: absolute;
    background-color: transparent;
    right: var(--space-sm);
    top: var(--space-2xl);
  }
`

interface MenuMobile {
  toggle: boolean
  onToggleMenu: () => void
}

interface SubMenu {
  name: string
  url: string
}
interface Menu {
  name: string
  url: string
  children: SubMenu[]
}

const menus: Menu[] = [
  {
    name: 'Equipment',
    url: EQUIPMENT_ELEIKO_URL,
    children: [
      {
        name: 'Eleiko',
        url: EQUIPMENT_ELEIKO_URL,
      },
      {
        name: 'Powerlifting Bars',
        url: EQUIPMENT_POWERLIFTING_BARS_URL,
      },
    ],
  },
  {
    name: 'Product',
    url: PRODUCT_COMBO_RACK_URL,
    children: [
      {
        name: 'Combo Rack',
        url: PRODUCT_COMBO_RACK_URL,
      },
    ],
  },
  {
    name: 'Training',
    url: TRAINING_YOGA_URL,
    children: [
      {
        name: 'Gym',
        url: TRAINING_GYM_URL,
      },
      {
        name: 'Yoga',
        url: TRAINING_YOGA_URL,
      },
      {
        name: 'Powerlifting',
        url: TRAINING_POWERLIFTING_URL,
      },
    ],
  },
  {
    name: 'About Us',
    url: ABOUT_US_URL,
  },
]

const MenuMobile: React.FC<MenuMobile> = ({ toggle, onToggleMenu }) => {
  const { pathname } = useLocation()
  const mobileMenus: Menu[] = [
    { name: 'Home', url: '/', children: [] },
    ...menus,
  ]

  return (
    <MenuMobileWrapper toggle={toggle || ''}>
      <div className='menu-toggle expanded' onClick={onToggleMenu}>
        <span className='line-toggle' />
        <span className='line-toggle' />
        <span className='line-toggle' />
      </div>

      <div className='menu'>
        {mobileMenus.map(({ name, url, children }, idx) => {
          return (
            <div className='menu-item' key={idx} onClick={onToggleMenu}>
              <Link to={url}>{name}</Link>

              {children && (
                <div className='submenu'>
                  {children.map((subMenu: SubMenu, subIdx: number) => (
                    <Link
                      to={subMenu.url}
                      key={subIdx}
                      className={`submenu-item ${
                        pathname === subMenu.url ? 'active' : ''
                      }`}
                    >
                      {subMenu.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </MenuMobileWrapper>
  )
}

const HeaderMobile = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <HeaderMobileWrapper>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='thuc-logo' />
        </Link>
      </div>

      <div className='menu-toggle' onClick={() => setToggle(!toggle)}>
        <span className='line-toggle' />
        <span className='line-toggle' />
        <span className='line-toggle' />
      </div>

      <MenuMobile toggle={toggle} onToggleMenu={() => setToggle(!toggle)} />
    </HeaderMobileWrapper>
  )
}

const HeaderDesktop = () => {
  const { pathname } = useLocation()

  return (
    <HeaderDesktopWrapper>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='dragonprime-logo' />
        </Link>
      </div>

      <div className='menu'>
        {menus.map(({ name, url, children }, idx) => {
          return (
            <div className='menu-item' key={idx}>
              <Link to={url}>{name}</Link>

              {children && (
                <div className='submenu'>
                  <div className='submenu-hidden' />
                  <div className='submenu-active'>
                    {children.map((subMenu, subIdx) => (
                      <Link
                        to={subMenu.url}
                        key={subIdx}
                        className={`submenu-item ${
                          pathname === subMenu.url ? 'active' : ''
                        }`}
                      >
                        {subMenu.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </HeaderDesktopWrapper>
  )
}

const Header = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isScroll, setIsScroll] = useState(false)
  const { isMobile, isTable } = useResize()

  const isBelowDesktop = useMemo(() => isMobile || isTable, [isMobile, isTable])

  useEffect(() => {
    if (isMobile) return

    const handleScroll = () => {
      setScrollY(window.scrollY)
      if (scrollY > 150) setIsScroll(true)
      else setIsScroll(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollY, isMobile])

  return (
    <HeaderWrapper>
      <div className={isScroll ? 'scrolling' : ''}>
        {isBelowDesktop ? <HeaderMobile /> : <HeaderDesktop />}
      </div>
    </HeaderWrapper>
  )
}

export default Header
