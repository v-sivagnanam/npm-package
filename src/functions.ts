import { sayThanksProps } from "./types";

export function sayThanks({
    firstName,
    lastName,
    age,
}:sayThanksProps

) {
    console.log(`Thank you ${firstName} ${lastName} for purchasing ${age} tickets`);
    console.log("Thank you for your purchase!");
}