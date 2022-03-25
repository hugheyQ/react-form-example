import './Button.scss';
const Button = ({ variant, label }) => {
	return (
		<button type="submit" className={variant ? `btn ${variant}` : 'btn'}>
			{label}
		</button>
	);
};

export default Button;
