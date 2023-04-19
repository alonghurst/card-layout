export type Card = {
    type: string,
    title: string,
    description: string
}

export function card(type: string, title: string, description: string): Card {

    if (!description.endsWith(".")) {
        description = description + ".";
    }

    return {
        type, title, description
    }
}

export function curse(title: string, description: string) {
    return card("Curse", title, description);
}

export function challenge(title: string, description: string) {
    return card("Challenge", title, description);
}

export function secretChallenge(title: string, description: string) {
    return card("Secret Challenge", title, description);
}

export function power(title: string, description: string) {
    return card("Power", title, description);
}

export function secretPower(title: string, description: string) {
    return card("Secret Power", title, description);
}