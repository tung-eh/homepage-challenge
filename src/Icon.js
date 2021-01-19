import { ReactComponent as Code } from './icons/code.svg'
import { ReactComponent as Edit } from './icons/edit.svg'
import { ReactComponent as Instagram } from './icons/instagram.svg'
import { ReactComponent as Linkedin } from './icons/linkedin.svg'
import { ReactComponent as Storage } from './icons/storage.svg'
import { ReactComponent as Twitter } from './icons/twitter.svg'
const MAP = {
  code: Code,
  edit: Edit,
  instagram: Instagram,
  linkedin: Linkedin,
  storage: Storage,
  twitter: Twitter,
}
const Icon = ({ name, ...props }) => {
  const Component = MAP[name]
  if (!Component) return null
  return <Component {...props} />
}
export default Icon
