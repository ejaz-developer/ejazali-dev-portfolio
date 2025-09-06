import { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Dashboard from '../components/dashboard/Dashboard';
import DashboardAbout from '../components/dashboard/DashboardAbout';
import DashboardSkills from '../components/dashboard/DashboardSkills';
import DashboardProjects from '../components/dashboard/DashboardProjects';
import DashboardContact from '../components/dashboard/DashboardContact';

const DashboardHome = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard onSectionChange={setActiveSection} />;
      case 'about':
        return <DashboardAbout />;
      case 'skills':
        return <DashboardSkills />;
      case 'projects':
        return <DashboardProjects />;
      case 'contact':
        return <DashboardContact />;
      default:
        return <Dashboard onSectionChange={setActiveSection} />;
    }
  };

  return (
    <DashboardLayout 
      activeSection={activeSection} 
      onSectionChange={setActiveSection}
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default DashboardHome;