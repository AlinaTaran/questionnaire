const ArrowLeftIcon = ({ size = 24, color = '#333333', className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M7.5 12L15 4.5L16.05 5.55L9.6 12L16.05 18.45L15 19.5L7.5 12Z" />
    </svg>
  );
};

export default ArrowLeftIcon;
