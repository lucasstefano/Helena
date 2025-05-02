
import {
  Sidebar,
  LogoContainer,
  LogoSpinner,
  LogoText,
  Navigation,
  NavItem,
  NavItemIcon,
  NavItemText,
} from './styles';
import { Home, Users, FileText, Settings, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SideBar(){
  const navigator = useNavigate();
    return(
        <Sidebar>
                <LogoContainer>
                  <LogoSpinner />
                  <LogoText>Helena</LogoText>
                </LogoContainer>
        
                <Navigation>
                  <NavItem active onClick={()=>{navigator("/CRM")}}>
                    <NavItemIcon>
                      <Home size={20} />
                    </NavItemIcon>
                    <NavItemText>Início</NavItemText>
                  </NavItem>
                  <NavItem onClick={()=>{navigator("/Mensagens")}}>
                    <NavItemIcon>
                      <Users size={20} />
                    </NavItemIcon>
                    <NavItemText>Leads</NavItemText>
                  </NavItem>
                  <NavItem onClick={()=>{navigator("/")}}>
                    <NavItemIcon>
                      <FileText size={20} />
                    </NavItemIcon>
                    <NavItemText>Kanban</NavItemText>
                  </NavItem>
                  <NavItem>
                    <NavItemIcon>
                      <Settings size={20} />
                    </NavItemIcon>
                    <NavItemText>Configurações</NavItemText>
                  </NavItem>
                  <NavItem>
                    <NavItemIcon>
                      <HelpCircle size={20} />
                    </NavItemIcon>
                    <NavItemText>Ajuda</NavItemText>
                  </NavItem>
                </Navigation>
              </Sidebar>
        
    )
}