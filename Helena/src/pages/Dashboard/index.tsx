import React, { useState } from 'react';
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
  MainContent,
} from './styles';
import { Home, Users, Building, FileText, Settings, HelpCircle } from 'lucide-react';
import Kanban from '../../componentes/Kanban';
import SideBar from '../../componentes/SideBar';

// Dados do Kanban (simulando um banco de dados ou estado)
const initialData = {
  'to-do': [
    { id: '1', content: 'Tarefa 1' },
    { id: '2', content: 'Tarefa 2' },
  ],
  'in-progress': [
    { id: '3', content: 'Tarefa 3' },
  ],
  'done': [
    { id: '4', content: 'Tarefa 4' },
  ],
};

const Dashboard: React.FC = () => {
  const [kanbanData, setKanbanData] = useState(initialData);

  // Função para mover o item de uma coluna para outra
  const handleDrop = (e: React.DragEvent, column: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const taskContent = e.dataTransfer.getData('taskContent');
    
    // Verifica se o item existe
    if (!taskId || !taskContent) return;

    const newKanbanData = { ...kanbanData };

    // Remover o item da coluna original
    for (let col in newKanbanData) {
      const colIndex = newKanbanData[col].findIndex(item => item.id === taskId);
      if (colIndex > -1) {
        newKanbanData[col].splice(colIndex, 1);
        break;
      }
    }

    // Adicionar o item na nova coluna
    newKanbanData[column].push({ id: taskId, content: taskContent });
    setKanbanData(newKanbanData);
  };

  // Função para permitir o drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Função para armazenar dados do item sendo arrastado
  const handleDragStart = (e: React.DragEvent, id: string, content: string) => {
    e.dataTransfer.setData('taskId', id);
    e.dataTransfer.setData('taskContent', content);
  };

  // Função para criar uma nova coluna
  const handleAddColumn = () => {
    const newColumnName = prompt('Digite o nome da nova coluna:');
    if (newColumnName && !kanbanData[newColumnName]) {
      const newKanbanData = { ...kanbanData };
      newKanbanData[newColumnName] = [];
      setKanbanData(newKanbanData);
    } else {
      alert('Nome de coluna inválido ou já existe.');
    }
  };

  return (
    <Container>
     <SideBar/>

      <MainContent>
        <Kanban/>
      </MainContent>
    </Container>
  );
};

export default Dashboard;
