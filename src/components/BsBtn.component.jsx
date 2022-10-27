const bsBtnOptions = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  success: "btn-success",
  danger: "btn-danger",
  warning: "btn-warning",
  info: "btn-info",
  light: "btn-light",
  dark: "btn-dark",
  link: "btn-link",
};

const BsBtnComponent = ({ children, color, extraClasses, ...rest }) => {
  return (
    <button
      className={`btn ${color || bsBtnOptions.primary} ${extraClasses || ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export { bsBtnOptions };

export default BsBtnComponent;
