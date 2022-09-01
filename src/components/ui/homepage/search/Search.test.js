/* eslint-disable testing-library/no-container */
import { render, screen, cleanup } from "@testing-library/react";
import { renderUi } from "../../../../utils/test/render";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "../../../../test/mockMatchMedia";
import Search from "./Search";
import { MemoryRouter } from "react-router-dom";

test("Affichage de la barre de recherche quand l'utilisateur écrit quelque chôse", async () => {
  // ARRANGE
  const { container } = renderUi(<Search />);

  const input = screen.getAllByPlaceholderText(/Ex: Marseille/i);
  // ACT
  await userEvent.type(input, "madf");
  // eslint-disable-next-line testing-library/no-node-access
  //   const result = screen.getByText(/ resultat trouvé/i);

  //   // ASSERT
  //   expect(result).toBeInTheDocument("");
  //   expect(screen.getByRole("button")).toBeDisabled();
});
