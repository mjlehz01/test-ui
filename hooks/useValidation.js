import { useState, useEffect } from "react";

const useValidation = (stateInit, valid, fn) => {
	const [values, setValues] = useState(stateInit);
	const [errors, setErrors] = useState({});
	const [submitForm, setSubmitForm] = useState(false);

	useEffect(() => {
		if (submitForm) {
			const noErrors = Object.keys(errors).length === 0;

			if (noErrors) {
				fn();
			}
			setSubmitForm(false);
		}
	}, [errors]);

	useEffect(() => {
		return () => {
			setValues(stateInit);
		};
	}, []);

	//function execute typing inputs
	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	//function execute send form
	const handleSubmit = (e) => {
		e.preventDefault();
		const errorsValidation = valid(values);
		setErrors(errorsValidation);
		setSubmitForm(true);
	};

	//function execute event blur
	const handleBlur = () => {
		const errorsValidation = valid(values);
		setErrors(errorsValidation);
	};
	return {
		values,
		errors,
		handleChange,
		handleSubmit,
		handleBlur,
	};
};

export default useValidation;
