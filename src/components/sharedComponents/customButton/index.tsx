'use client';

type CustomButtonPropsType = {
  title: string;
  marginTop?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  onClick?: () => void;
};

function CustomButton({
  title,
  marginTop,
  width,
  height,
  borderRadius,
  onClick,
}: CustomButtonPropsType) {
  const buttonStyles: React.CSSProperties = {
    backgroundColor: '#25a0db',
    textTransform: 'none',
    fontSize: '16px',
    color: 'white',
    cursor: 'pointer',
    padding: '10px',
    marginTop,
    width,
    height,
    borderRadius,
    border: 'none',
    transition: 'all 0.3s ease',
  };

  const hoverStyles: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: '2px solid #25a0db',
    color: '#25a0db',
  };

  return (
    <button
      style={buttonStyles}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyles);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, buttonStyles);
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
