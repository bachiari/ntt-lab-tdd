const request = require('supertest');

const app = require('../../src/app');
const { User } = require("../../src/app/models");

const truncate = require('../utils/truncate');

describe("Autenticacao", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("deve ser autenticado com informacoes validas", async () => {
    const user = await User.create({
      name: "Babi",
      email: "babi@ntt.com",
      password: "123123",
    });
    console.log("entrei aqui 1", user.email);
    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123123",
    });

    expect(response.status).toBe(200);
  });

  it('deve nao autenticar com informacoes invalidas', async() => {
    const user = await User.create({
      name: "Barbara",
      email: "babi@gmail.com",
      password: "123123",
    });

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123456",
    });

    expect(response.status).toBe(401);
  })
});
