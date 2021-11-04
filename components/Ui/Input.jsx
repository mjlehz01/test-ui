import PropTypes from "prop-types";
import styles from "/styles/Input.module.css";

const Input = (props) => {
	const { className, error, type, name, placeholder, onChange, onBlur, value } =
		props;
	return (
		<div
			className={`${
				styles.floating_input
			} ${className} mb-5 relative transition duration-300 ${
				error ? "border-red-500" : "border-blue-500"
			} rounded-full border h-8`}
		>
			<input
				type={type}
				id={name}
				name={name}
				className="w-full text-white h-full pl-4 rounded-full focus:outline-none z-50 bg-transparent"
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
			/>
			<label
				htmlFor={name}
				className="flex text-white items-center absolute top-0 left-0 pl-4 w-full h-full transform duration-300 z-0"
			>
				{placeholder}
			</label>
		</div>
	);
};

Input.defaultProps = {
	type: "text",
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Input;
