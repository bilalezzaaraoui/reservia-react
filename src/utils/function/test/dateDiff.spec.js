const dateDiff = require("../dateDiff");

describe("Fonction permettant d'avoir le nombre de nuit entre deux dates", () => {
  test("Si la date est complète", () => {
    const date = dateDiff(new Date("2022-09-02"), new Date("2022-09-10"));
    expect(date).toBe(8);
  });

  test("Si la data à bien le format de type number", () => {
    const date = dateDiff(new Date("2022-09-02"), new Date("2022-09-10"));
    expect(typeof date).toBe("number");
  });
});
