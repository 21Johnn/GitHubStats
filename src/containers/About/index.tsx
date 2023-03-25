import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GitHubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph tipo="main">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi
      quaerat deleniti, veritatis consectetur iure perspiciatis itaque cum
      recusandae! Eaque perspiciatis dolore autem itaque architecto dolor totam
      odit nesciunt doloremque?
    </Paragraph>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=21Johnn&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=21Johnn&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSection>
  </section>
)

export default About
