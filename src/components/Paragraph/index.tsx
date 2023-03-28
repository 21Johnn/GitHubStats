import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'main' | 'secondary'
  fontSize?: number
}

const Paragraph = ({ children, tipo = 'main', fontSize }: Props) => (
  <P tipo={tipo} fontSize={fontSize}>
    {children}
  </P>
)

export default Paragraph
