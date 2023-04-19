# Instructions

## Installation

1. Install node.js if you have not already got it (https://nodejs.org/en)
1. Install git if you have not already got it (https://git-scm.com/)
1. Open a command line somewhere you want the project (e.g `C:/code`, `C:/users/person/documents`)
1. Clone the repository with the following command: `git clone https://github.com/alonghurst/card-layout`
1. Move into the cloned repository with the following command: `cd card-layout`
1. Install npm packages: `npm i`

## Running

1. Start a new command line inside the project root (e.g `C:/code/card-layout'). If you are following on from Installation then you should already have one open.
1. Run the project: `npm run start`

It should compile the code and then run in a new browser window. You can also navigate to `http://localhost:3000`.

If you make code changes while the `npm run start` command is still running then the project will automatically recompile and you should see your changes reflected in the browser window. Try refreshing the window if you don't see changes.

## Changing Cards

You can make changes to the cards by modifying the array in `src/Blobs.ts`. Use a text editor (recommend VS Code) and make changes.

Each card has a `type`, a `name` and a `description`.

You can add an entry using the `card(type, name, description)` function:

`card("Beer drink", "Event", "Everyone has to drink a beer"),`

Entries with `challenge`, `secretPower` etc are helper functions to create a card by only specifying the `name` and `description`:

`challenge("Beer drink", "You have to drink a beer"),`

Things to remember:

1. Each entry must have a comma (`,`) after it
1. Card text must be wrapped in double quotes (`"`)
1. You can omit cards by prefixing the line with double slashes (`//`). If you are using a text editor with syntax highlighting (such as VS Code) it will go green
