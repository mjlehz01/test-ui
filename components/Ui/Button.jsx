import PropTypes from "prop-types";

const Button = (props) => {
	const styles = {
		btn_dropdown: "w-full relative justify-center",
		btn_blue: "bg-blue-800 w-fit h-fit text-white font-bold rounded-full",
		btn_delete: "text-2xl bg-red-600 text-white rounded px-4 py-1 rounded-full",
		btn_add: "text-white",
		btn_tag: "text-white w-fit h-fit border border-blue-700 rounded-full px-2",
		btn_tag_delete:
			"text-white border border-red-600 bg-red-600 rounded-full px-2",
		btn_next:
			"border border-white bg-blue-700 rounded-full w-9 h-9 text-white flex items-center justify-center",
		btn_prev: "text-white text-lg",
		btn_link: "text-gray-200",
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
