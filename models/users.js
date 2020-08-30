const Users = require("../schemas/users");
let loginUser = async (request) => {
	const userinfo = await Users.find({email: request.email, password: request.password })
	return userinfo
}

let registerUser = async (params) => {
    let query = { name: params.name, displayname: params.displayname, email: params.email, password: params.password } 
    let addquery = new Users(query)
    let registerinfo = await addquery.save()
    return registerinfo
}

let userList = async () => {
	const userinfo = await Users.find()
	return userinfo

}
module.exports = {
	loginUser,
	registerUser,
	userList
};