const Label = ({ children }) => <h3 style={styles.label}>{children}</h3>;

const styles = {
  label: {
    marginBottom: 10,
  },
};
export default Label;

// Here more sophisticated Label,
// e.g.styled components styling can be implemented
