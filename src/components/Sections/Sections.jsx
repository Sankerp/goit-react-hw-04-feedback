import { StyledSection } from "./Sections.styled"
import PropTypes from 'prop-types';

const Sections = ({children, title}) => {
  return (
    <StyledSection>
      {title && <h2 className = "h2">{title}</h2>}
      {children}
    </StyledSection>
  )
}

Sections.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

export default Sections