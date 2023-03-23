// ===================================================================== Imports
import clsx from 'clsx';
import Link from 'next/link';
import Button from '../button/button'
import EarthIcon from '../icons/earth-icon';

// ====================================================================== Params
/**
 * @param {boolean} isHomePage
 * @param {any} logo
 * @param {Object[]} navItems
 * @param {Object[]} breadcrumbs
 * @param {string} className
 */
// ====================================================================== Export
export default function Navigation({ 
  isHomePage = true, 
  logo = {}, 
  navItems = [],
  breadcrumbs = [],
  className 
}) {
  let links = []
  const breadcrumbMapping = {}
  breadcrumbs.forEach((item) => {
    breadcrumbMapping[item.key] = item.value
  })

  if (className === 'page-resources') {
    links = [
      {
        url: '/',
        text: breadcrumbMapping.index
      },
      {
        text: breadcrumbMapping.resources
      }
    ]
  }

  return (
    <header 
      id="site-header"
      className={clsx(className)}>
      <div className="grid-noBottom">

        <div className="col-12">
          <div className={clsx('header-content', className)}>

            { !isHomePage && (
              <Link href="/">
                <div className="nav-site-logo">
                  <div className="label-contents">
                    <span>FILEC</span>
                    <EarthIcon />
                    <span>IN</span>
                  </div>
                </div>
              </Link>
            )}

            <nav className="navigation">
              {navItems.map((item) => (
                <Button
                  key={item.button.text}
                  action={item.button.action}
                  url={item.button.url}
                  target={item.button.target}
                  variant={item.button.theme}
                  className="nav-item">

                  {item.button.text}

                </Button>
              ))}
            </nav>

          </div>
        </div>

        <div className="col-12">
          <div className="breadcrumbs">
            {links.map((link) => (
              <div 
                key={link.text} 
                className="breadcrumb-wrapper">
                {link.hasOwnProperty('url') ? (
                  <Link
                    href={link.url}
                    className="breadcrumb-link">
                    <div className="breadcrumb link">
                      {link.text}
                    </div>
                  </Link>
                ) : (
                  <div
                    className="breadcrumb text">
                    {link.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </header>
  )
}
