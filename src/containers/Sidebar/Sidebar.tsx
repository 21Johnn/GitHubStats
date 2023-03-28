import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { ButtonTheme, Description, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Title fontSize={20}>John</Title>
      <Paragraph tipo="secondary" fontSize={16}>
        21Johnn
      </Paragraph>
      <Description tipo="main" fontSize={14}>
        Dev. Front end
      </Description>
      <ButtonTheme onClick={props.changeTheme}>Trocar tema</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
