// ===================================================================== Imports
import Button from '../button/button'

// ====================================================================== Params
/**
 * @param {any} logo
 * @param {Object[]} navItems
 */
// ====================================================================== Export
export default function Navigation({ logo = {}, navItems = [] }) {
  return (
    <header id="site-header">
      <div className="grid">
        <div className="col">
          <div className="header-content">

            <div className="site-logo">
              <Button
                key={logo?.text}
                action={logo?.action}
                url={logo?.url}
                target={logo?.target}
                variant={logo?.theme}
                className={'site-logo-button'}>

                {logo.children ? logo.children : logo.text}

              </Button>
            </div>

            <nav className="navigation">
              {navItems.map((item) => (
                <Button
                  key={item.button.text}
                  action={item.button.action}
                  url={item.button.url}
                  target={item.button.target}
                  variant={item.button.theme}
                  className={'nav-item'}>

                  {item.button.text}

                </Button>
              ))}
            </nav>

          </div>
        </div>
      </div>
    </header>
  )
}
