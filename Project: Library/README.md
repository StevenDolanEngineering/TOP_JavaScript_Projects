
TOP Library Project

A dynamic, data-driven web application built as part of The Odin Project JavaScript curriculum. This project implements a fully functional personal book dashboard, allowing users to catalog books, track reading progress, and manage layout cards via pure vanilla programming.

🛠️ Skills & Concepts Applied


1. Object-Oriented JavaScript & Prototypes

• Constructor Functions: Implemented a blueprint structure (Book) to model unified datasets containing specific parameters like titles, authors, page counts, and state configurations.

• Prototypical Inheritance: Extended object instances using Book.prototype to safely toggle state parameters across memory addresses without rewriting structural code layers.

2. Advanced DOM Manipulation & Architecture

• Data-Driven Rendering: Structured a decoupled environment where the user display is a direct reflection of underlying data layers (myLibrary array), treating script data as the single source of truth.

• Event-Driven Traversal: Handled structural array mutations cleanly by implementing .findIndex() combined with cryptographic stable keys (crypto.randomUUID()) to reliably track and delete elements.

• Node Assembly: Utilized core web APIs (createElement, appendChild, and dataset) to build complex UI cards entirely inside loop environments.

3. Modern CSS Styling & Layout Design

• Two-Dimensional Grid Controls: Leveraged grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) on parent containers to auto-fit and scale structural layout cards flawlessly across multi-device formats.

• Responsive Resets: Integrated a custom modern CSS reset to wipe out legacy browser rendering anomalies, establishing total typography control and pristine baseline structural margins.

🚀 Features Inside

• Non-Duplicating Inputs: Form generation logic uses active layout tracking (querySelector) to guarantee multiple open input forms can never stack or flood the page column.

• Dynamic Dashboard Refreshes: The UI instantly loops, wipes, and reconstructs current configurations onto the parent list layout whenever a book is successfully saved, toggled, or deleted.

• Stable Entity IDs: Utilizes native cryptographic keys to assign unchanging identifiers (uuid) to individual book parameters, protecting state operations from index shifting bugs.
