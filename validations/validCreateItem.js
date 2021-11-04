const validEditOrder = (values) => {
	let errors = {};

	//valid name
	if (!values.sku) {
		errors.sku = "Es obligatorio el sku";
		return errors;
	} else if (values.sku.length < 3) {
		errors.sku = "Debes ingresar al menos 4 caracteres";
		return errors;
	}

	if (!values.name) {
		errors.name = "Es obligatorio el nombre";
		return errors;
	} else if (values.name.length < 3) {
		errors.name = "Debes ingresar al menos 4 digitos";
		return errors;
	}

	if (!values.quantity) {
		errors.quantity = "Es obligatorio ingresar una cantidad";
		return errors;
	} else if (!/^[0-9]+$/.test(values.quantity)) {
		errors.quantity = "Debes ingresar solo numeros";
		return errors;
	}
	if (!values.price) {
		errors.price = "Es obligatorio ingresar un precio";
		return errors;
	} else if (!/^[0-9-.]+$/.test(values.price)) {
		errors.price =
			"Debes ingresar solo numeros y recuerda agregar centavos 10.00";
		return errors;
	}
	return errors;
};

export default validEditOrder;
