const errorHandler = (error, req, res, next) => {
	let response = {}

	response["error"] = error.status ?? 500;
	response["message"] = "Um erro inesperado aconteceu.";
	if(error.errorData) response["errorData"] = error.errorData;

	return res.status(response.error).json(response)
}

module.exports = errorHandler;