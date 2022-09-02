const parseDate = require("../parseDate");

describe("Fonction permettant de transformer une date anglaise en une date française prête à être comparé à une autre date", () => {
  test("Si la date est transformée dans le bon format", () => {
    const date = parseDate("2022-09-02").toLocaleDateString();
    expect(date).toBe("9/2/2022");
  });

  test("Si la data à bien le format de type object", () => {
    const date = parseDate("2022-09-02");
    expect(typeof date).toBe("object");
  });
});
