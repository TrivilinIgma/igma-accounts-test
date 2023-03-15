const errorHandler = (error, req, res, next) => {
	let response = {}

	response["statusCode"] = error.status ?? 500;
	response["message"] = error.message || "Algo inesperado ocorreu, tente novamente mais tarde.";

	if (error instanceof Error && error.message instanceof Object) {
		response["statusCode"] = error.message.status
		response["message"] = error.message.message
	}

	if (error.data)
		response["data"] = error.data

	return res.status(response.statusCode).json(response)
}

module.exports = errorHandler;