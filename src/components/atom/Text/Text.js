import "./Text.css";

const Text = ({ type, children, className, style }) => (
  <span className={`${type ?? 'span'} ${className ? className : ""}`} style={style}>
    {children}
  </span>
);

export default Text;
