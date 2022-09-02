const euroDate = require("../euroDate");

describe("Fonction permettant d'avoir une date anglaise au format français", () => {
  test("Si la date est transformée dans le bon format", () => {
    const date = euroDate("2022-09-02");
    expect(date).toBe("02/09/2022");
  });

  test("Si la data à bien le format de type string", () => {
    const date = euroDate("2022-09-02");
    expect(typeof date).toBe("string");
  });
});
