/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import Body from "../Body";
import { mockData } from "../../utils/mockData/mockData";
import renderTestComponent from "./../../utils/renderTestComponent";
import { act } from "react";
import Header from "./../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../utils/store";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  })
);

it("should load body component and saerch cards for pizza input", async () => {
  await act(async () => render(renderTestComponent(Body)));

  const cardsBeforeSearch = screen.getAllByTestId("res-card");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "kfc" } });
  fireEvent.click(searchBtn);

  // screen
  // should load count of search inputs
  const cardsAfterSearch = screen.getAllByTestId("res-card");
  expect(cardsAfterSearch.length).toBe(1);
});

it("should filter top rated restraunts", async () => {
  await act(async () => render(renderTestComponent(Body)));

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  expect(topRatedBtn).toBeInTheDocument();
  fireEvent.click(topRatedBtn);
  const topRatedRestros = screen.getAllByTestId("res-card");
  expect(topRatedRestros.length).toBe(20);
});

it("should change loggedinuser on input change", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />;
          <Body />
        </Provider>
      </BrowserRouter>
    )
  );
  const loggedInInput = screen.getByTestId("loggedIn-user-input");
  fireEvent.input(loggedInInput, { target: { name: "Nikita" } });
  const loggedInUser = screen.getByTestId("loggedInUser", {
    name: "Sangam",
  });
  expect(loggedInUser).toBeInTheDocument();
});
