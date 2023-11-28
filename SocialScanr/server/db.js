// const mongoose = require("mongoose");

// module.exports = () => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(process.env.DB, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };

const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.MONGODB_URI, connectionParams); // Use MONGODB_URI
        console.log("Connected to the database successfully");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to the database!");
    }
};
