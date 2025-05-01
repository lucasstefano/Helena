import React, { useState } from 'react';
import { Bell, ChevronDown, ChevronRight, Home, Users, Building, FileText, Settings, HelpCircle, User, BarChart2 } from 'lucide-react';
import {
  Container,
  Sidebar,
  LogoContainer,
  LogoSpinner,
  LogoText,
  Navigation,
  NavItem,
  NavItemIcon,
  NavItemText,
  UserProfile,
  UserAvatar,
  MainContent,
  Header,
  HeaderButton,
  DashboardContent,
  DateSelector,
  DateSelectorButton,
  DateDropdown,
  DateOption,
  GridContainer,
  CardContainer,
  CardTitle,
  ActivityItem,
  ActivityValue,
  ActivityLabel,
  ActivityItemWithArrow,
  HighlightsEmptyState,
  ConversionSection,
  ConversionTitle,
  ConversionTitleIcon,
  ConversionGrid,
  StatsCard,
  StatsLabel,
  StatsValue,
  StatsSubtext,
  StatsChart,
  StatsChartValue
} from './styles';

const Dashboard: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState('Maio, 2025');
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

  return (
    <Container>
      {/* Sidebar */}
      <Sidebar>
        <LogoContainer>
          <LogoSpinner />
          <LogoText>Helena</LogoText>
        </LogoContainer>
        
        <Navigation>
          <NavItem active>
            <NavItemIcon>
              <Home size={20} />
            </NavItemIcon>
            <NavItemText>Início</NavItemText>
          </NavItem>
          <NavItem>
            <NavItemIcon>
              <Users size={20} />
            </NavItemIcon>
            <NavItemText>Leads</NavItemText>
          </NavItem>
          <NavItem>
            <NavItemIcon>
              <Building size={20} />
            </NavItemIcon>
            <NavItemText>Proprietários</NavItemText>
          </NavItem>
          <NavItem>
            <NavItemIcon>
              <FileText size={20} />
            </NavItemIcon>
            <NavItemText>Relatório</NavItemText>
          </NavItem>
          <NavItem>
            <NavItemIcon>
              <Settings size={20} />
            </NavItemIcon>
            <NavItemText>Minha Helena</NavItemText>
          </NavItem>
          <NavItem>
            <NavItemIcon>
              <HelpCircle size={20} />
            </NavItemIcon>
            <NavItemText>Ajuda</NavItemText>
          </NavItem>
        </Navigation>
        
        <UserProfile>
          <UserAvatar>
            <User size={16} />
          </UserAvatar>
          <ChevronDown size={16} />
        </UserProfile>
      </Sidebar>
      
      {/* Main Content */}
      <MainContent>
        {/* Header */}
        <Header>
          <HeaderButton>
            <ChevronDown size={20} />
          </HeaderButton>
          <HeaderButton>
            <Bell size={20} />
          </HeaderButton>
        </Header>
        
        {/* Dashboard Content */}
        <DashboardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <HeaderButton>
              <ChevronDown size={20} />
            </HeaderButton>
            <DateSelector>
              <DateSelectorButton onClick={() => setShowMonthDropdown(!showMonthDropdown)}>
                {currentMonth}
                <ChevronDown size={16} style={{ marginLeft: '8px' }} />
              </DateSelectorButton>
              {showMonthDropdown && (
                <DateDropdown>
                  <DateOption 
                    onClick={() => {
                      setCurrentMonth('Abril, 2025');
                      setShowMonthDropdown(false);
                    }}
                  >
                    Abril, 2025
                  </DateOption>
                  <DateOption 
                    onClick={() => {
                      setCurrentMonth('Maio, 2025');
                      setShowMonthDropdown(false);
                    }}
                  >
                    Maio, 2025
                  </DateOption>
                  <DateOption 
                    onClick={() => {
                      setCurrentMonth('Junho, 2025');
                      setShowMonthDropdown(false);
                    }}
                  >
                    Junho, 2025
                  </DateOption>
                </DateDropdown>
              )}
            </DateSelector>
          </div>
          
          <GridContainer>
            {/* Left column */}
            <div style={{ gridColumn: '1 / 2' }}>
              <CardContainer>
                <CardTitle>Atividades</CardTitle>
                
                {/* Activity 1 */}
                <ActivityItem>
                  <ActivityValue>0,00%</ActivityValue>
                  <ActivityLabel>Consumo do plano</ActivityLabel>
                </ActivityItem>
                
                {/* Activity 2 */}
                <ActivityItemWithArrow>
                  <div>
                    <ActivityValue>0</ActivityValue>
                    <ActivityLabel>Cobranças de atendimento</ActivityLabel>
                  </div>
                  <ChevronRight size={20} />
                </ActivityItemWithArrow>
                
                {/* Activity 3 */}
                <ActivityItemWithArrow>
                  <div>
                    <ActivityValue>0</ActivityValue>
                    <ActivityLabel>Solicitações via Helena Visita</ActivityLabel>
                  </div>
                  <ChevronRight size={20} />
                </ActivityItemWithArrow>
              </CardContainer>
            </div>
            
            {/* Middle and right columns */}
            <div style={{ gridColumn: '2 / 4' }}>
              <CardContainer>
                <CardTitle>Destaques</CardTitle>
                <HighlightsEmptyState>
                  Nenhum destaque disponível
                </HighlightsEmptyState>
              </CardContainer>
            </div>
          </GridContainer>
          
          {/* Conversion section */}
          <ConversionSection>
            <ConversionTitle>
              <ConversionTitleIcon>
                <BarChart2 size={20} />
              </ConversionTitleIcon>
              Conversão
            </ConversionTitle>
            
            <ConversionGrid>
              {/* Unique clients */}
              <StatsCard>
                <StatsLabel>Clientes únicos</StatsLabel>
                <StatsValue>0</StatsValue>
                <StatsSubtext>pessoas chegaram pelos canais</StatsSubtext>
                <StatsChart>
                  <StatsChartValue>0%</StatsChartValue>
                </StatsChart>
              </StatsCard>
              
              {/* Attendances */}
              <StatsCard>
                <StatsLabel>Atendimentos</StatsLabel>
                <StatsValue>0</StatsValue>
                <StatsSubtext>clientes únicos atendidos pela Helena</StatsSubtext>
                <StatsChart>
                  <StatsChartValue>0.00</StatsChartValue>
                </StatsChart>
              </StatsCard>
              
              {/* Qualifications */}
              <StatsCard>
                <StatsLabel>Qualificações</StatsLabel>
                <StatsValue>0</StatsValue>
                <StatsSubtext>clientes únicos enviados ao CRM</StatsSubtext>
                <StatsChart>
                  <StatsChartValue>0.00</StatsChartValue>
                </StatsChart>
              </StatsCard>
            </ConversionGrid>
          </ConversionSection>
        </DashboardContent>
      </MainContent>
    </Container>
  );
};

export default Dashboard;