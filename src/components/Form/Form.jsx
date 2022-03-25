import './Form.scss';
const Form = ({ children, onSubmit }) => {
	return (
		<form className="form-wrapper" onSubmit={onSubmit}>
			{children}
		</form>
	);
};

export default Form;
