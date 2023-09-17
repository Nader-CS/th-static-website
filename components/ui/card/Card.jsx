const Card = ({ children, className }) => {
  return (
    <div className={` rounded-t-[22px] rounded-b-[22px] my-5 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
