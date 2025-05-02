import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from '../../componentes/SideBar';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Sidebar = styled.div`
  width: 30%;
  background: #f0f0f0;
  padding: 10px;
  overflow-y: auto;
  border-right: 1px solid #ccc;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
`;

const Tab = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-weight: bold;
  font-size: 14px;
  color: ${({ active }) => (active ? '#007bff' : '#555')};
  border-bottom: 2px solid ${({ active }) => (active ? '#007bff' : 'transparent')};
  padding: 5px 10px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: 1px solid #ccc;
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
`;
const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #ccc;
  background: #f8f8f8;
`;

const ChatUser = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const NamePhone = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button<{ color?: string }>`
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background-color: ${({ color }) => color || '#ddd'};
  color: white;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
`;


const IconButton = styled.button`
  background: none;
  border: none;
  margin-left: 8px;
  cursor: pointer;
  font-size: 16px;
`;

const UserCard = styled.div`
  background: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  cursor: pointer;
`;

const ChatArea = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Message = styled.div<{ fromUser?: boolean }>`
  display: flex;
  justify-content: ${({ fromUser }) => (fromUser ? 'flex-end' : 'flex-start')};
  margin: 5px 0;
`;

const Bubble = styled.div<{ fromUser?: boolean }>`
  background: ${({ fromUser }) => (fromUser ? '#007bff' : '#e4e6eb')};
  color: ${({ fromUser }) => (fromUser ? 'white' : 'black')};
  padding: 10px 14px;
  border-radius: 18px;
  border-bottom-right-radius: ${({ fromUser }) => (fromUser ? '0' : '18px')};
  border-bottom-left-radius: ${({ fromUser }) => (fromUser ? '18px' : '0')};
  max-width: 70%;
  white-space: pre-line;
  font-size: 14px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
`;

const InputArea = styled.form`
  padding: 10px 20px;
  border-top: 1px solid #ccc;
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 14px;
`;

const SendButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0 20px;
  margin-left: 10px;
  border-radius: 20px;
  cursor: pointer;
`;

const UserDetails = styled.div`
  width: 20%;
  background: #fafafa;
  padding: 20px;
`;

// Types
type MessageType = {
  text: string;
  fromUser: boolean;
};

type UserType = {
  id: number;
  name: string;
  status: 'ativos' | 'pendentes' | 'fechados';
};

const App = () => {
  const [activeTab, setActiveTab] = useState<'ativos' | 'pendentes' | 'fechados'>('ativos');
  const [searchText, setSearchText] = useState('');
  const [inputValue, setInputValue] = useState('');

  const users: UserType[] = [
    { id: 1, name: 'Anna Clivatto', status: 'ativos' },
    { id: 2, name: 'Janete Almeida', status: 'pendentes' },
    { id: 3, name: 'André Assis', status: 'fechados' },
    { id: 4, name: 'Jefferson Luis', status: 'ativos' },
  ];

  const filteredUsers = users
    .filter(user => user.status === activeTab)
    .filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()));

  const [messages, setMessages] = useState<MessageType[]>([
    { text: 'Oi... Preciso de uma ajuda', fromUser: true },
    { text: 'Olá Anna! Como posso te ajudar?', fromUser: false },
    { text: 'Digite uma opção:\n[1] Comprar\n[2] Pedidos\n[3] Financeiro', fromUser: false },
    { text: '3', fromUser: true }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    setMessages([...messages, { text: inputValue, fromUser: true }]);
    setInputValue('');
  };

  return (
    <Container>
      <SideBar/>
      <Sidebar>
        <FilterBar>
          <Tab active={activeTab === 'ativos'} onClick={() => setActiveTab('ativos')}>ATIVOS</Tab>
          <Tab active={activeTab === 'pendentes'} onClick={() => setActiveTab('pendentes')}>PENDENTES</Tab>
          <Tab active={activeTab === 'fechados'} onClick={() => setActiveTab('fechados')}>FECHADOS</Tab>
        </FilterBar>

        <SearchContainer>
          <SearchInput
            placeholder="Pesquisar..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <IconButton title="Filtrar">🔍</IconButton>
        </SearchContainer>

        {filteredUsers.map((user) => (
          <UserCard key={user.id}>
            <strong>{user.name}</strong>
            <p>Status: {user.status}</p>
          </UserCard>
        ))}
      </Sidebar>

      <ChatArea>
        <ChatHeader>
          <ChatUser>
            <Avatar src="https://i.pravatar.cc/40?img=5" alt="Anna Clivatto" />
            <NamePhone>
              <strong>Anna Clivatto</strong>
              <span>5511983894692</span>
            </NamePhone>
          </ChatUser>

          <ChatActions>
            <ActionButton color="#000"><span>📹</span></ActionButton>
            <ActionButton color="#28a745">DEPARTAMENTO</ActionButton>
            <ActionButton color="#007bff">TRANSFERIR</ActionButton>
            <ActionButton color="#dc3545">FECHAR</ActionButton>
          </ChatActions>
        </ChatHeader>

        <MessagesContainer>
          {messages.map((msg, idx) => (
            <Message key={idx} fromUser={msg.fromUser}>
              <Bubble fromUser={msg.fromUser}>{msg.text}</Bubble>
            </Message>
          ))}
        </MessagesContainer>

        <InputArea onSubmit={handleSend}>
          <Input
            type="text"
            placeholder="Digite sua mensagem..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <SendButton type="submit">Enviar</SendButton>
        </InputArea>
      </ChatArea>

      <UserDetails>
        <h3>Anna Clivatto</h3>
        <p>Telefone: (11) 98888-9999</p>
        <p>Status: Novo lead</p>
        <p>Tags: Origem Tráfego, Comercial</p>
      </UserDetails>
    </Container>
  );
};

export default App;
