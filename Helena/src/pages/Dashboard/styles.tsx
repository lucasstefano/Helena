import styled, { keyframes } from 'styled-components';

// Animations
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Container
export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;
`;

// Sidebar
export const Sidebar = styled.div`
  width: 240px;
  background-color: white;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
`;

export const LogoSpinner = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #7c3aed;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '';
    width: 16px;
    height: 16px;
    border: 2px solid white;
    border-top-color: transparent;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
`;

export const LogoText = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-left: 8px;
  color: #4c1d95;
`;

export const Navigation = styled.nav`
  margin-top: 24px;
  padding: 0 16px;
`;

interface NavItemProps {
  active?: boolean;
}

export const NavItem = styled.div<NavItemProps>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 4px;
  cursor: pointer;
  color: ${props => props.active ? '#7c3aed' : '#4b5563'};
  background-color: ${props => props.active ? '#f3e8ff' : 'transparent'};
  
  &:hover {
    background-color: ${props => props.active ? '#f3e8ff' : '#f9fafb'};
  }
`;

export const NavItemIcon = styled.div`
  margin-right: 12px;
`;

export const NavItemText = styled.span`
  font-weight: 500;
`;

export const UserProfile = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e5e7eb;
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: #e5e7eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Main Content
export const MainContent = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: transparent;
  color: #6b7280;
  cursor: pointer;
  
  &:hover {
    background-color: #f9fafb;
  }
`;

export const DashboardContent = styled.div`
  padding: 24px;
`;

export const DateSelector = styled.div`
  position: relative;
`;

export const DateSelectorButton = styled.button`
  padding: 8px 16px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
`;

export const DateDropdown = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 4px;
  width: 192px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 20;
`;

export const DateOption = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 8px 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  
  &:hover {
    background-color: #f9fafb;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
  margin-bottom: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const ActivityItem = styled.div`
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const ActivityValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #1f2937;
`;

export const ActivityLabel = styled.div`
  font-size: 14px;
  color: #6b7280;
`;

export const ActivityItemWithArrow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
  
  svg {
    color: #9ca3af;
  }
`;

export const HighlightsEmptyState = styled.div`
  height: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
`;

export const ConversionSection = styled.div`
  margin-top: 24px;
`;

export const ConversionTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const ConversionTitleIcon = styled.div`
  margin-right: 8px;
  color: #374151;
`;

export const ConversionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StatsCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
`;

export const StatsLabel = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
`;

export const StatsValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #1f2937;
`;

export const StatsSubtext = styled.div`
  font-size: 12px;
  color: #9ca3af;
  margin-top: 4px;
`;

export const StatsChart = styled.div`
  margin-top: 16px;
  height: 96px;
  background-color: #7c3aed;
  border-radius: 6px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const StatsChartValue = styled.div`
  color: white;
  font-weight: 500;
  margin-bottom: 8px;
`;