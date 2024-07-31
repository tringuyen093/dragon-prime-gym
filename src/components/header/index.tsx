import React, { useState, useEffect, useMemo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import mediaQuery from '@/utils/units/mediaQuery'
import useResize from '@/hooks/useResize'
import styled from 'styled-components'
import logo from '@/assets/images/dragonprime-logo-white.png'

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;

  .container {
    display: flex;
    align-items: center;
    width: 100%;
    padding: var(--space-xs) var(--space-lg);
    transition: all 300ms ease;
    min-height: 80px;
    background-color: var(--color-gray-800);
  }

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
      cursor: pointer;
      position: relative;
      text-transform: capitalize;
      transition: all 400ms ease;
      font-family: 'Montserrat Medium';
      font-size: var(--font-size-2sm);
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

  .scrolling {
    .container {
      min-height: 70px;
    }

    .logo {
      img {
        width: 80px;
      }
    }
  }

  ${mediaQuery['belowBiggerDesktop']} {
    .menu {
      margin-left: 0px;
    }
  }

  ${mediaQuery['belowDesktop']} {
    .container {
      width: calc(100% - 40px);
      margin: 0 var(--space-2sm);
    }
  }

  ${mediaQuery['belowTablet']} {
    .logo {
      img {
        width: 200px;
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
  margin: 0 auto;

  .logo {
    margin-right: 0;

    img {
      padding: var(--space-3xs) 0;
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
    top: var(--space-lg);
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
    background: var(--color-gray-750);
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
    background: var(--color-gray-750);
    transform: translateY(0) translateX(0) rotate(314deg);
    width: var(--space-lg);
    height: var(--obj-radius-xs);
    transition-delay: 0.1s;
  }
`

const MenuMobileWrapper = styled.div<{ toggle: boolean | string }>`
  width: 100%;
  height: 100%;
  background: var(--color-white);
  position: fixed;
  left: ${({ toggle }) => (toggle ? '0px' : '-1500px')};
  top: 0;
  transition: all 400ms ease;

  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: var(--space-xl);
    padding-left: var(--space-lg);

    .menu-item {
      padding: var(--space-xs) var(--space-2sm);

      a {
        color: var(--color-black);
      }
    }
  }

  .menu-toggle.expanded {
    position: absolute;
    right: var(--space-sm);
    top: var(--space-lg);
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
    name: 'Equipments',
    url: '/equipments/eleiko',
    children: [
      {
        name: 'Eleiko',
        url: '/equipments/eleiko',
      },
      {
        name: 'Powerlifting Bars',
        url: '/equipments/powerlifting-bars',
      },
    ],
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

      <div
        className={`menu-toggle ${toggle ? 'expanded' : ''}`}
        onClick={() => setToggle(!toggle)}
      >
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
    <div className='container'>
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
    </div>
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
