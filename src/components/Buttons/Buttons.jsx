import PropTypes from 'prop-types';
import { StyledBtn } from './Buttons.styled';
import Sections from 'components/Sections/Sections';

const Buttons = ({ clickFeedback, options }) => {
  return (
    <Sections title="Please leave feedback">
      {options.map(option => {
        return (
          <StyledBtn
            key={option}
            type="button"
            name={option}
            onClick={clickFeedback}
          >
            {option}
          </StyledBtn>
        );
      })}
    </Sections>
  );
};

Buttons.propTypes = {
  clickFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Buttons;
