import PropTypes from 'prop-types';

Title.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  onClick: PropTypes.func,
};

function Title({
  children,
  color,
  fontSize,
}) {
  return (
    <h1
      style={{
        color,
        fontSize,
        fontFamily: "sans-serif",
      }}
    >
      {children}
    </h1>
  )
}


export default Title;