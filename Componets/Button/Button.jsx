const Button = ({ btn_name, className = "", ...props }) => {
  return (
    <>
      <button className={`btn-componet ${className}`} {...props}>
        {btn_name}
      </button>
    </>
  );
};

export default Button;
