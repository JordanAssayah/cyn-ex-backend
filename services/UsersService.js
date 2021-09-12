/* eslint-disable no-unused-vars */
const Service = require('./Service');

const CREATION_MANDATORY_FIELDS = [
  'name',
  'address'
]

/**
* Create new
* Create a new user
*
* userCreateRequest UserCreateRequest  (optional)
* returns UserResponse
* */
const createNewUser = ({ body }) => new Promise(
  async (resolve, reject) => {
    try {
      const formFields = Object.keys(body)
      const formValues = Object.values(body)

      // Check if the user filled all the mandatory fields
      for (const formField of formFields) {
        if (CREATION_MANDATORY_FIELDS.includes(formField) === false) {
          reject(Service.rejectResponse(`${formField} is missing in body`, 400))
          return
        }
      }
      resolve(Service.successResponse({
        userCreateRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all
* Get the list of all users
*
* returns List
* */
const getAllUsers = () => new Promise(
  async (resolve, reject) => {
    try {
      const resOrders = await seqDB.sequelize.query(`SELECT * FROM \`${config.database}\`.order`, { type: QueryTypes.SELECT });

      for (let i = 0; i < resOrders.length; i++) {
        resOrders[i].items = resOrderItems.filter(item => item.order_id === resOrders[i].id)
      }

      resolve(Service.successResponse(resOrders))
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get by id
* Get user by id
*
* id String Id of the user
* returns UserResponse
* */
const getUserById = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
};
