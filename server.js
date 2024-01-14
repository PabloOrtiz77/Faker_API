const express = require("express");

const faker = require("faker");

app = express();

app.use(express.json());

class Usuario {
  constructor() {
    this.id = faker.random.uuid();
    this.name = faker.name.firstName();
    this.apellido = faker.name.lastName();
    this.numero = faker.phone.phoneNumber();
    this.email = faker.internet.email(this.name);
    this.contra = faker.internet.password();
  }
}

class Empresa {
  constructor() {
    this.id = faker.random.uuid();
    this.name = faker.company.companyName();
    this.direccion = {
      calle: faker.address.streetAddress(),
      ciudad: faker.address.city(),
      estado: faker.address.state(),
      codigo_postal: faker.address.zipCode(),
      pais: faker.address.country(),
    };
  }
}

app.post("/api/users/new", (req, res) => {
  res.json(new Usuario());
});

app.post("/api/companies/new", (req, res) => {
  res.json(new Empresa());
});

app.post("/api/user/company", (req, res) => {
  const usuario = new Usuario();
  const empresa = new Empresa();
  const responseObj = {
    usuario: usuario,
    empresa: empresa,
  };
  res.json(responseObj);
});

app.listen(3000);
console.log("Server run on port 3000");
