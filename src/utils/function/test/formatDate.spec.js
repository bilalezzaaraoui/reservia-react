const formatDate = require("../formatDate");

describe("Fonction permettant d'avoir une date complète au format compact anglais", () => {
  test("Si la date est transformée dans le bon format", () => {
    const date = formatDate(new Date("2022-09-02"));
    expect(date).toBe("2022-09-02");
  });

  test("Si la data à bien le format de type string", () => {
    const date = formatDate(new Date("2022-09-02"));
    expect(typeof date).toBe("string");
  });
});
