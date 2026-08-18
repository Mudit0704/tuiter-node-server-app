# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

An Express.js REST API backend ("Tuiter", a Twitter clone). The two resources are implemented differently:

- **Tuits** (`controllers/tuits/`) are persisted in MongoDB via Mongoose (schema → model → DAO → controller layers).
- **Users** (`controllers/users/`) are still an in-memory array seeded from a hardcoded file, mutated directly by the controller — no persistence layer.

Note: `README.md` in this repo is leftover boilerplate from Create React App and does not describe this project — disregard it.

## Commands

- Run the server: `npm start` (runs `node app.js`, listens on `process.env.PORT || 4000`)
- Requires a running MongoDB instance for the tuits routes to work. Connection string comes from `process.env.DB_CONNECTION_STRING`, defaulting to `mongodb://127.0.0.1:27017/tuiter`.
- There is no test suite configured (`npm test` just exits with an error) and no lint/build step.

## Architecture

- `app.js` is the entry point: connects Mongoose to MongoDB, creates the Express app, wires up `cors()` and `express.json()` middleware, then registers each resource's controller by calling it with the app instance (e.g. `TuitsController(app)`).
- **Tuits** (Mongoose-backed), under `controllers/tuits/`:
  - `tuits-schema.js` — Mongoose schema (field definitions, `{collection: 'tuits'}`).
  - `tuits-model.js` — `mongoose.model('TuitModel', schema)`, default-exported.
  - `tuits-dao.js` — thin data-access functions (`findTuits`, `createTuit`, `deleteTuit`, `updateTuit`) that call the model directly; no business logic.
  - `tuits-controller.js` — default-exported `(app) => {...}` registering Express routes; handlers are `async`, call into the DAO, and layer in default fields (`likes: 0`, `liked: false`, etc.) on create before persisting.
  - `tuits.js` still exists as legacy seed data but is no longer imported/used now that tuits go through Mongoose.
- **Users** (in-memory), under `controllers/users/`:
  - `users.js` — the seed data (default-exported array).
  - `users-controller.js` — default-exported `(app) => {...}` that registers routes and mutates the module-level array directly (no DAO/model layer).
- When adding a new Mongoose-backed resource, follow the tuits pattern: `*-schema.js` → `*-model.js` → `*-dao.js` → `*-controller.js`, then import and call the controller from `app.js`.
- Users' IDs are generated as `(new Date()).getTime() + ''` (stringified timestamp) rather than a real ID scheme — collisions are possible if two creates happen in the same millisecond. Tuits get MongoDB `ObjectId`s automatically.
- This is an ES module project (`"type": "module"` in `package.json`) — use `import`/`export`, not `require`.

## Pushing

- The `push-review` skill (`.claude/skills/push-review/`) gates `git push` in this repo — it runs a `Code-Review-Sub-Agent` review before pushing and blocks the push if issues are found.
