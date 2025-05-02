import React, { useState } from 'react';
import { MainContent } from './styles';

interface Task {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  imageUrl: string;
}

const initialData: { [key: string]: Task[] } = {
  'to-do': [
    { id: '1', title: 'Tarefa 1', subtitle: 'Descrição 1', tags: ['Importante'], imageUrl: 'https://via.placeholder.com/50' },
    { id: '2', title: 'Tarefa 2', subtitle: 'Descrição 2', tags: ['Urgente'], imageUrl: 'https://via.placeholder.com/50' },
  ],
  'in-progress': [
    { id: '3', title: 'Tarefa 3', subtitle: 'Descrição 3', tags: ['Em andamento'], imageUrl: 'https://via.placeholder.com/50' },
  ],
  'done': [
    { id: '4', title: 'Tarefa 4', subtitle: 'Descrição 4', tags: ['Concluído'], imageUrl: 'https://via.placeholder.com/50' },
  ],
};

const getRandomPrimaryColor = () => {
  const colors = ['#FF0000', '#0000FF', '#FFFF00'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Kanban: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [kanbanData, setKanbanData] = useState<{ [key: string]: Task[] }>(initialData);
  const [columnColors, setColumnColors] = useState<{ [key: string]: string }>(
    Object.keys(initialData).reduce((acc, columnId) => {
      acc[columnId] = getRandomPrimaryColor();
      return acc;
    }, {} as { [key: string]: string })
  );

  const handleDrop = (e: React.DragEvent, targetColumn: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    if (!taskId) return;

    const newKanbanData = { ...kanbanData };
    let movedTask: Task | null = null;

    for (const col in newKanbanData) {
      const index = newKanbanData[col].findIndex(task => task.id === taskId);
      if (index !== -1) {
        movedTask = newKanbanData[col][index];
        newKanbanData[col].splice(index, 1);
        break;
      }
    }

    if (movedTask && !newKanbanData[targetColumn].some(task => task.id === taskId)) {
      newKanbanData[targetColumn].push(movedTask);
      setKanbanData(newKanbanData);
    }
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    e.dataTransfer.setData('taskId', taskId);
  };

  const handleAddColumn = () => {
    const newColumnName = prompt('Digite o nome da nova coluna:');
    if (newColumnName && !kanbanData[newColumnName]) {
      setKanbanData(prev => ({ ...prev, [newColumnName]: [] }));
      setColumnColors(prev => ({ ...prev, [newColumnName]: getRandomPrimaryColor() }));
    } else {
      alert('Nome de coluna inválido ou já existe.');
    }
  };

  const handleRemoveColumn = (columnName: string) => {
    const newKanbanData = { ...kanbanData };
    delete newKanbanData[columnName];
    setKanbanData(newKanbanData);

    const newColumnColors = { ...columnColors };
    delete newColumnColors[columnName];
    setColumnColors(newColumnColors);
  };

  const formatColumnName = (name: string) =>
    name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <MainContent>
      <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Buscar tarefas..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              width: '300px',
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
      </div>

      <div style={{ display: 'flex' }}>
        {Object.keys(kanbanData).map((columnId) => {
          const column = kanbanData[columnId];
          const borderColor = columnColors[columnId];
          return (
            <div
              key={columnId}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, columnId)}
              style={{
                margin: '0 10px',
                width: '300px',
                padding: '10px',
                backgroundColor: '#f1f1f1',
                borderRadius: '4px',
                borderTop: `4px solid ${borderColor}`,
              }}
            >
              <h3>{formatColumnName(columnId)}</h3>
              {column
                .filter((item) =>
                  item.title.toLowerCase().includes(searchText.toLowerCase()) ||
                  item.subtitle.toLowerCase().includes(searchText.toLowerCase())
                )
                .map((item) => (

                <div
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item.id)}
                  style={{
                    marginBottom: '10px',
                    padding: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={item.imageUrl}
                      alt="Avatar"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        marginRight: '10px',
                      }}
                    />
                    <div>
                      <h4 style={{ margin: 0 }}>{item.title}</h4>
                      <p style={{ margin: '5px 0' }}>{item.subtitle}</p>
                    </div>
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        style={{
                          padding: '5px 10px',
                          backgroundColor: '#ddd',
                          borderRadius: '20px',
                          marginRight: '5px',
                          fontSize: '12px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <button
                onClick={() => handleRemoveColumn(columnId)}
                style={{
                  marginTop: '10px',
                  padding: '5px 10px',
                  backgroundColor: '#e74c3c',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Remover Coluna
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleAddColumn}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Adicionar Coluna
      </button>
    </MainContent>
  );
};

export default Kanban;
