import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">AdminPanel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>DashBoard</span>
          </li>   
           <p className="title">LISTS</p>     
          <li>
            <PersonOutlineOutlinedIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <Inventory2Icon className="icon"/>
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
           <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon"/>
            <span>Notifications</span>
          </li>
           <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>
           <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}

export default Sidebar;
