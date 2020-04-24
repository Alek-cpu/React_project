import React from "react";
import './sidebar.css';
import userPhoto from './assets/image 2.png';


const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-container">
                <UserNav />
                <SettingItem />
                <ToggleSidebar />
            </div>
        </aside>
    );
}

const UserNav = () => {
    return (
        <div className="profile-container">
            <MiniInfo />
            <Navigation />
        </div>
    );
}

const MiniInfo = () => {
    return (
        <div className="profile">
            <div className="profile-info">
                <div className="profile_photo">
                    <img className="profile-photo__mini" src={userPhoto}/>
                </div>
                <div className="profile-block">
                    <div className="profile__name profileTxtElem">Sierra Ferguson</div>
                    <div className="profile__email profileTxtElem">s.ferguson@gmail.com</div>
                </div>
            </div>
        </div>
    );
}

const Navigation = () => {
   return (
       <nav className="mnu">
           <DashboardItem />
           <TaskItem />
           <EmailItem />
           <ContactItem />
           <ChatItem />
           <DealsItem />
       </nav>
   );
}

const DashboardItem = () => {
    return (
        <a href="#">
            <div className="mnu-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="mnu-item__svg"
                          d="M1.5 8.13333C1.33431 8.13333 1.2 7.99902 1.2 7.83333V1.5C1.2 1.33431 1.33431 1.2 1.5 1.2H6.16667C6.33235 1.2 6.46667 1.33431 6.46667 1.5V7.83333C6.46667 7.99902 6.33235 8.13333 6.16667 8.13333H1.5ZM1.5 14.8C1.33431 14.8 1.2 14.6657 1.2 14.5V11.5C1.2 11.3343 1.33431 11.2 1.5 11.2H6.16667C6.33235 11.2 6.46667 11.3343 6.46667 11.5V14.5C6.46667 14.6657 6.33235 14.8 6.16667 14.8H1.5ZM9.83333 14.8C9.66765 14.8 9.53333 14.6657 9.53333 14.5V8.16667C9.53333 8.00098 9.66765 7.86667 9.83333 7.86667H14.5C14.6657 7.86667 14.8 8.00098 14.8 8.16667V14.5C14.8 14.6657 14.6657 14.8 14.5 14.8H9.83333ZM9.53333 1.5C9.53333 1.33431 9.66765 1.2 9.83333 1.2H14.5C14.6657 1.2 14.8 1.33431 14.8 1.5V4.5C14.8 4.66569 14.6657 4.8 14.5 4.8H9.83333C9.66765 4.8 9.53333 4.66569 9.53333 4.5V1.5Z"
                          stroke="#C2CFE0" stroke-width="1.4"/>
                </svg>
                <div className="mnu-item__name">Dashboard</div>
            </div>
        </a>
    );
}

const TaskItem = () => {
    return (
        <a href="#">
            <div className="mnu-item">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="mnu-item__svg"
                          d="M1.49996 1.2H15.6666C15.7384 1.2 15.8 1.2616 15.8 1.33333V6.33333C15.8 6.40507 15.7384 6.46667 15.6666 6.46667H1.49996C1.42823 6.46667 1.36663 6.40507 1.36663 6.33333V1.33333C1.36663 1.2616 1.42823 1.2 1.49996 1.2ZM1.49996 9.53333H15.6666C15.7384 9.53333 15.8 9.59493 15.8 9.66667V14.6667C15.8 14.7384 15.7384 14.8 15.6666 14.8H1.49996C1.42823 14.8 1.36663 14.7384 1.36663 14.6667V9.66667C1.36663 9.59493 1.42823 9.53333 1.49996 9.53333Z"
                          stroke="#C2CFE0" stroke-width="1.4"/>
                </svg>
                <div className="mnu-item__name">Tasks</div>
            </div>
        </a>
    );
}

const EmailItem = () => {
    return (
        <a href="#">
            <div className="mnu-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="mnu-item__svg"
                          d="M2.37496 5.0005V4.99992C2.37496 4.46528 2.80778 4.03325 3.33329 4.03325H16.6666C17.1967 4.03325 17.6333 4.46985 17.6333 4.99992V14.9999C17.6333 15.53 17.1967 15.9666 16.6666 15.9666H3.33329C2.80331 15.9666 2.36677 15.5301 2.36663 15.0002C2.36663 15.0001 2.36663 15 2.36663 14.9999L2.37496 5.0005Z"
                          stroke="#C2CFE0" stroke-width="1.4"/>
                    <path className="mnu-item__svg" d="M2.5 5L10 10L17.5 5" stroke="#C2CFE0"
                          stroke-width="1.4"/>
                </svg>
                <div className="mnu-item__name">Email</div>
            </div>
        </a>
    );
}

const ContactItem = () => {
    return (
        <a href="#">
            <div className="mnu-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="mnu-item__svg"
                          d="M4.81118 4.11106C4.81118 2.34905 6.23806 0.922168 8.00007 0.922168C9.76208 0.922168 11.189 2.34904 11.189 4.11106C11.189 5.87307 9.76208 7.29995 8.00007 7.29995C6.23806 7.29995 4.81118 5.87307 4.81118 4.11106ZM0.92229 12.8611C0.92229 12.4716 1.11181 12.0787 1.54729 11.6768C1.98752 11.2705 2.63079 10.904 3.39805 10.5966C4.9337 9.98144 6.78966 9.67217 8.00007 9.67217C9.21048 9.67217 11.0664 9.98144 12.6021 10.5966C13.3693 10.904 14.0126 11.2705 14.4528 11.6768C14.8883 12.0787 15.0778 12.4716 15.0778 12.8611V15.0777H0.92229V12.8611Z"
                          stroke="#C2CFE0" stroke-width="1.4"/>
                </svg>
                <div className="mnu-item__name">Contacts</div>
            </div>
        </a>
    );
}

const ChatItem = () => {
    return (
        <a href="#">
            <div className="mnu-item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="mnu-item__svg"
                          d="M3.99996 13.3001H3.71001L3.50499 13.5051L1.36663 15.6435V2.33342C1.36663 1.80335 1.80323 1.36675 2.33329 1.36675H15.6666C16.1967 1.36675 16.6333 1.80335 16.6333 2.33342V12.3334C16.6333 12.8635 16.1967 13.3001 15.6666 13.3001H3.99996Z"
                          stroke="#C2CFE0" stroke-width="1.4"/>
                </svg>
                <div className="mnu-item__name">Chat</div>
            </div>
        </a>
    );
}

const DealsItem = () => {
    return (
        <a href="#">
            <div className="mnu-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="mnu-item__svg"
                          d="M2.49996 4.03325H17.5C17.5717 4.03325 17.6333 4.09485 17.6333 4.16659V15.8333C17.6333 15.905 17.5717 15.9666 17.5 15.9666H2.49996C2.42823 15.9666 2.36663 15.905 2.36663 15.8333V4.16659C2.36663 4.09485 2.42823 4.03325 2.49996 4.03325Z"
                          stroke="#C2CFE0" stroke-width="1.4"/>
                    <rect className="mnu-item__svg" x="6.5" y="3.33325" width="1.16667" height="13.3333"
                          fill="#C2CFE0"/>
                    <rect className="mnu-item__svg" x="12.3334" y="3.33325" width="1.16667"
                          height="13.3333" fill="#C2CFE0"/>
                </svg>
                <div className="mnu-item__name">Deals</div>
            </div>
        </a>
    );
}

const SettingItem = () => {
    return (
        <div className="setting-wrap setItem">
            <div className="setting mnu-item">
                <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fil__svg"
                          d="M2.00004 0.333252C1.08337 0.333252 0.333374 1.08325 0.333374 1.99992C0.333374 2.91658 1.08337 3.66658 2.00004 3.66658C2.91671 3.66658 3.66671 2.91658 3.66671 1.99992C3.66671 1.08325 2.91671 0.333252 2.00004 0.333252ZM12 0.333252C11.0834 0.333252 10.3334 1.08325 10.3334 1.99992C10.3334 2.91658 11.0834 3.66658 12 3.66658C12.9167 3.66658 13.6667 2.91658 13.6667 1.99992C13.6667 1.08325 12.9167 0.333252 12 0.333252ZM7.00004 0.333252C6.08337 0.333252 5.33337 1.08325 5.33337 1.99992C5.33337 2.91658 6.08337 3.66658 7.00004 3.66658C7.91671 3.66658 8.66671 2.91658 8.66671 1.99992C8.66671 1.08325 7.91671 0.333252 7.00004 0.333252Z"
                          fill="#C2CFE0"/>
                </svg>
                <div className="mnu-item__name">Settings</div>
            </div>
        </div>
    );
}

const ToggleSidebar = () => {
    return (
        <div className="toggle-wrap setItem">
            <div className="toggle mnu-item">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fil__svg" fill-rule="evenodd" clip-rule="evenodd"
                          d="M2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H12C13.1046 14 14 13.1046 14 12V2C14 0.895431 13.1046 0 12 0H2ZM5 2C4.44772 2 4 2.44772 4 3V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11V3C6 2.44772 5.55228 2 5 2Z"
                          fill="#C2CFE0"/>
                </svg>
                <div className="mnu-item__name">Toggle sidebar</div>
            </div>
        </div>
    );
}

export default Sidebar;
