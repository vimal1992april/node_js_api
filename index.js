const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

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

app.get('/api/users/:id', (req, res) => {
	const id = Number(req.params.id);
	const user = users.find((user) => user.id === id);
	return res.json(user); 
})

//edit the user
app.post('/api/users', (req,res) => {
	return res.json({ status: "peniding"});
})

//edit the user
app.patch('/api/users/:id', (req,res) => {
	return res.json({ status: "peniding"});
})

//edit the user
app.delete('/api/users/:id', (req,res) => {
	return res.json({ status: "peniding"});
})

app.listen(PORT, () => console.log("server startedd at port "+PORT))