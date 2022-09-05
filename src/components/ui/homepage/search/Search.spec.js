import { screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "./Search";
const renderUi = require("../../../../utils/test/render");

test("Si la modal de résultat apparait pendant une recherche", async () => {
  renderUi(<Search />);

  const input = screen.getByTestId("search-element");

  fireEvent.change(input, { target: { value: "am" } });

  const response = screen.getByTestId("search-response");
  expect(input.value).toBe("am");
  expect(response).toHaveTextContent(/ resultat trouvé/i);
});
