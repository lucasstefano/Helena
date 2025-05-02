import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from '../../componentes/SideBar';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #bcbcbc;
`;

const Title = styled.h1`
  color: white;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 12px;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#ffffff' : 'transparent')};
  color: ${({ active }) => (active ? '#1e1e1e' : '#ffffff')};
  border: 1px solid white;
  border-radius: 8px;
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

`;

const Card = styled.div`
  padding: 10px 10px;
  background-color: white;
  color: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

type FilterType = 'day' | 'week' | 'month';

const DashboardCRM: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('month');

  const totalLeads = 123;
  const leadsThisPeriod = 42;
  const activeUsers = 7;
  const pendingUsers = 3;

  return (
    <Wrapper>
      <SideBar/>
      <MainContent>

   
      <Title>Dashboard CRM</Title>

      <FilterBar>
        {(['day', 'week', 'month'] as FilterType[]).map((type) => (
          <FilterButton
            key={type}
            active={filter === type}
            onClick={() => setFilter(type)}
          >
            {type === 'day' ? 'Hoje' : type === 'week' ? 'Semana' : 'Mês'}
          </FilterButton>
        ))}
      </FilterBar>

      <CardContainer>
        <Card>
          <h3>Total de Leads</h3>
          <p>{totalLeads}</p>
        </Card>
        <Card>
          <h3>Leads ({filter === 'day' ? 'Hoje' : filter === 'week' ? 'Semana' : 'Mês'})</h3>
          <p>{leadsThisPeriod}</p>
        </Card>
        <Card>
          <h3>Usuários Ativos</h3>
          <p>{activeUsers}</p>
        </Card>
        <Card>
          <h3>Usuários Pendentes</h3>
          <p>{pendingUsers}</p>
        </Card>
      </CardContainer>
      </MainContent>
    </Wrapper>
  );
};

export default DashboardCRM;
