import PropTypes from "prop-types";

const Button = (props) => {
	const styles = {
		btn_dropdown: "w-full relative justify-center",
		btn_blue: "bg-blue-800 w-fit h-fit text-white font-bold rounded-full",
		btn_pay:"w-1/2 mx-auto bg-blue-800 h-full justify-center rounded"
	};
	const { type, onClick, label, className, styleBtn, icon, disabled, reverse } =
		props;
	return (
		<button
			className={`${icon ? "flex items-center" : "block"} ${
				styles[styleBtn]
			} ${className}`}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{reverse && <span className={`pi ${icon}`}> </span>}
			{label}
			{!reverse && (
				<span className={`${icon ? `pi ${icon}` : "hidden"}`}></span>
			)}
		</button>
	);
};

Button.defaultProps = {
	type: "button",
	icon: "",
	disabled: false,
	reverse: false,
};

Button.propTypes = {
	type: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	label: PropTypes.string,
	className: PropTypes.string,
	styleBtn: PropTypes.string,
	icon: PropTypes.string.isRequired,
	disabled: PropTypes.bool.isRequired,
	reverse: PropTypes.bool,
};

export default Button;
