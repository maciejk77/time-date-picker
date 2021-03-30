const Label = ({ children }) => <h3 style={styles.label}>{children}</h3>;

// styled component needed here
const styles = {
  label: {
    marginBottom: 10,
    paddingLeft: 5,
  },
};
export default Label;
