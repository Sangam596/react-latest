import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import RestaurantCard from "../RestaurantCard";
import { mockData } from "../../utils/mockData/mockData";

it("should render restraurant cards", () => {
    render(<RestaurantCard restData={mockData[0].info} />);

    const restaurantCard = screen.getByText(mockData[0].info.name);
    expect(restaurantCard).toBeInTheDocument();

})