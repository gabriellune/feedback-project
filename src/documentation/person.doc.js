/**
 * @api {post} /api/v1/person Create person
 * @apiName Create Person
 * @apiGroup Person
 * @apiVersion 0.0.1
 * @apiParam {String} name Name of the person
 * @apiParam {String} cpf Cpf of the person
 * @apiParam {Number} cityCode Code of the city
 * @apiDescription Creates a new person in the database and return and returns the calculation of the multiplication between the last two digits of the cpf and the city code
 * @apiExample Example usage:
 *  <<base_url>>/api/v1/person
 * @apiSuccessExample Success-Request:
 * {
 *	"name": "string",
 *	"cpf": "11181376980",
 *	"cityCode": 4106902
 * }
 * @apiSuccessExample Success-Response:
 *{
 *   "status": "SUCCESS",
 *   "errors": null,
 *   "data": {
 *       "id": "peVv4Vw5EE9CLpn4sZKm",
 *       "name": "string",
 *       "cpf": "11181376980",
 *       "cityCode": 4106902,
 *       "calculations": [
 *           "Curitiba",
 *           4106902,
 *           "Os dois ultimos digitos do cpf multiplicado pelo código da cidade 328552160"
 *       ]
 *   },
 *   "timestamp": 1600661296636
 *}
 **/