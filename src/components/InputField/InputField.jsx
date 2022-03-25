import { useState } from 'react';
import './InputField.scss';
const InputField = props => {
	const [focused, setFocused] = useState(false);
	const { label, errorMessage, onChange, id, ...inputProps } = props;

	const handleFocus = e => {
		if (e.target.value) {
			setFocused(true);
		}
	};
	return (
		<div className="input-field-wrapper">
			<label htmlFor={id}>{label}</label>
			<input
				{...inputProps}
				id={id}
				onChange={onChange}
				onBlur={handleFocus}
				onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
				focused={focused.toString()}
			/>
			<span>{errorMessage}</span>
		</div>
	);
};

InputField.defaultProps = {
	type: 'text',
};

export default InputField;
