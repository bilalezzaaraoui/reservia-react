const addOneAnotherDay = require("../addOneAnotherDay");

describe("Fonction permettant d'ajouter des jours dans la date", () => {
  test("Ajout d'un jour dans la date", () => {
    const orginalDate = addOneAnotherDay("2022-09-02", 1).toLocaleString(
      "en-US"
    );

    expect(orginalDate).toBe("9/3/2022, 2:00:00 AM");
  });

  test("Ajout de 5 jours dans la date", () => {
    const orginalDate = addOneAnotherDay("2022-09-02", 7).toLocaleString(
      "en-US"
    );

    expect(orginalDate).toBe("9/9/2022, 2:00:00 AM");
  });

  test("Passage au mois suivant", () => {
    const orginalDate = addOneAnotherDay("2022-09-30", 1).toLocaleString(
      "en-US"
    );

    expect(orginalDate).toBe("10/1/2022, 2:00:00 AM");
  });
});
