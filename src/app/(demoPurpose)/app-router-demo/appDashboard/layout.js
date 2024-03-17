import DashboardNavLink from '../../../../component/dashboardNavLink';
import dashboardLayoutStyles from '../../../../styles/appDashboardStyles.module.css'
const DashboardLayout = ({ children }) => {
  return (
    <div className={dashboardLayoutStyles.dashboardLayoutContainer}>
      <aside className={dashboardLayoutStyles.navStyles}>
        <nav>
          <div className={dashboardLayoutStyles.listStyles}>
            <li className={dashboardLayoutStyles.listItemStyles}>
              <DashboardNavLink href="/app-router-demo/appDashboard/analytics">
                App Router
              </DashboardNavLink>
            </li>
            <li className={dashboardLayoutStyles.listItemStyles}>
              <DashboardNavLink href="/app-router-demo/appDashboard/account">
                Rendering
              </DashboardNavLink>
            </li>
            <li className={dashboardLayoutStyles.listItemStyles}>
              <DashboardNavLink href="/app-router-demo/appDashboard/settings">
                Server Components
              </DashboardNavLink>
            </li>
         
          </div>
        </nav>
      </aside>
      <div className={dashboardLayoutStyles.mainContainer}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;