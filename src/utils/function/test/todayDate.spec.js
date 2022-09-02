const todayDate = require("../todayDate");

describe("Fonction permettant d'avoir la date d'aujourd'hui", () => {
  test("Si la date est complète", () => {
    const date = todayDate().split("-");
    expect(date.length).toBe(3);
  });

  test("Si la data à bien le format de type string", () => {
    const date = todayDate();
    expect(typeof date).toBe("string");
  });
});
