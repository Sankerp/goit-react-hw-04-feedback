import { StyledSection } from './Sections.styled';
import PropTypes from 'prop-types';

const Sections = ({ children, title }) => {
  return (
    <StyledSection>
      {title && (
        <div>
          <h2 className="h2">{title}</h2>
        </div>
      )}
      <div className="thumb">{children}</div>
    </StyledSection>
  );
};

Sections.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Sections;
