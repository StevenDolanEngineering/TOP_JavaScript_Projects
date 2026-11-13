# Tic Tac Toe

A browser-based Tic Tac Toe game built with vanilla JavaScript, HTML, and CSS as part of [The Odin Project's](https://www.theodinproject.com/) Full Stack JavaScript curriculum.

## Overview

This project focuses on organizing JavaScript code using **Factory Functions** and the **Module Pattern (IIFEs)** to keep global scope clean and separate game logic from DOM manipulation.

## Features

* **Two-Player Gameplay:** Alternating turns between Player 1 (`X`) and Player 2 (`O`).
* **Move Validation:** Prevents players from overwriting squares that have already been claimed.
* **Win & Tie Detection:** Automatically checks all 8 winning combinations (rows, columns, and diagonals) as well as full-board tie conditions.
* **Game Reset:** Allows players to clear the board and start a fresh match at any time.

## Architecture & Skills Practiced

* **Module Pattern (IIFEs) & Closures:** Encapsulated private state and exposed clean public APIs across three dedicated modules:
  * `gameBoard`: Manages the 9-cell array state, marker placement, and board resets.
  * `gameController`: Enforces turn switching, win/tie evaluation, and game-over states.
  * `displayController`: Handles DOM rendering, grid generation, and click event listeners.
* **Factory Functions:** Used `createPlayer` to instantiate player objects with private `name` and `marker` getters.
* **Separation of Concerns:** Decoupled core game rules from UI rendering so the game engine operates independently of the DOM.
* **CSS Grid & Flexbox:** Built a responsive, centered game layout with clean grid styling and a modern CSS reset.

## How to Run Locally

1. Clone this repository to your local machine:
   ```bash
   git clone <your-repository-url>
   ```
2. Navigate into the project directory and open `index.html` in your web browser.
3. Click **Start** to generate the board and begin playing.
