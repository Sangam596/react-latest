import { faker } from "@faker-js/faker";

// Function to generate a random name, avatar, and message
const generateRandomChat = () => {
    const name = faker.person.firstName() + " " + faker.person.lastName();
    const message = faker.lorem.sentence();
    const avatar = `https://robohash.org/${encodeURIComponent(name)}.png`;

    return { name, message, avatar };
};
export default generateRandomChat;