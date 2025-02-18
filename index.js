const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }))
//routes here
app.get('/users', (req, res) => {
	const html = `
		<ul>
			${users.map((user) => `<li>${user.first_name}</li>`).join("")}
		</ul>
	`
})

app.get('/api/users', (req, res) => {
	return res.json(users);
})

app.route("/api/users/:id")
.get((req,res) => {
	const id = Number(req.params.id);
	const user = users.find((user) => user.id === id);
	return res.json(user); 
})
.post((req,res) => {
	const body = req.body;
	users.push({ ...body, id: users.length + 1 });
	fs.writeFile("./MOCK_DATA.json",JSON.stringify(users), (err, data) => {
		return res.json({ status: users.last});
	})
	
})
.patch((req,res) => {
	return res.json({ status: "peniding"});
})
.delete((req,res) => {
	return res.json({ status: "peniding"});
})


app.listen(PORT, () => console.log("server startedd at port "+PORT))