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
      </div>
    </header>
  )
}
