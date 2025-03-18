/* eslint-disable no-undef */
import { fireEvent, getAllByTestId, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { restroItemsMock } from "../../utils/mockData/mockData";
import RestroMenu from "../RestroMenu";
import { act } from "react";
import renderTestComponent from "./../../utils/mockData/restroItemsMock";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(restroItemsMock),
  })
);

it("should load restro menu components of KFC", async () => {
  await act(async () => renderTestComponent(RestroMenu));
  const restroName = screen.getByText("KFC");
  expect(restroName).toBeInTheDocument();

  const accordianHeader = screen.getByText("ROLLS(15)");
  expect(accordianHeader).toBeInTheDocument();
});

it("should load restro menu components and click on ROLLS(15)", async () => {
  await act(async () => renderTestComponent(RestroMenu));
  const accordianHeader = screen.getByText("ROLLS(15)");
  expect(accordianHeader).toBeInTheDocument();
  fireEvent.click(accordianHeader);
  const foodItems = getAllByTestId("food-items");
  expect(foodItems.length).toBe(15);
});