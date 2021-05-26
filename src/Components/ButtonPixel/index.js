const ButtonPixel = ({ title, className, ...rest }) => {
  return (
    <>
      <button className={`button-pixel ${className}`} {...rest}>
        {title}
      </button>
    </>
  );
};

export default ButtonPixel;
