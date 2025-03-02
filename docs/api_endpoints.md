# API Endpoints

This document describes the API endpoints available in the Songsterr Clone.

## User Authentication

*   `POST /api/register` - Registers a new user.
*   `POST /api/login` - Logs in an existing user.

## Tabs

*   `GET /api/tabs` - Retrieves all tabs.
*   `GET /api/tabs/:id` - Retrieves a specific tab by ID.
*   `POST /api/tabs` - Creates a new tab.
*   `PUT /api/tabs/:id` - Updates an existing tab.
*   `DELETE /api/tabs/:id` - Deletes a tab.

## Search

*   `GET /api/search?q=query` - Searches for tabs matching the given query.
