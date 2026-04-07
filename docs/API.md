# NovaStream API Reference

## Base URL

```
http://localhost:3001/api/v1
```

## Authentication

Most protected routes require a Bearer token in the `Authorization` header:

```
Authorization: Bearer <accessToken>
```

---

## Endpoints

### Health

#### `GET /health`
Returns API health status.

**Response:**
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "service": "novastream-api",
    "version": "1.0.0",
    "timestamp": "2024-12-10T12:00:00.000Z",
    "uptime": 3600
  }
}
```

---

### Authentication

#### `POST /auth/login`
Authenticate a user.

**Body:**
```json
{ "email": "user@example.com", "password": "password123" }
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": { "id": "...", "email": "...", "name": "...", "role": "subscriber" },
    "tokens": {
      "accessToken": "eyJ...",
      "refreshToken": "eyJ...",
      "expiresIn": 900
    }
  }
}
```

#### `POST /auth/register`
Register a new user account.

**Body:**
```json
{ "name": "John Doe", "email": "john@example.com", "password": "securepass123" }
```

#### `GET /auth/me` *(requires auth)*
Returns the current authenticated user.

#### `POST /auth/refresh`
Refresh access token.

**Body:**
```json
{ "refreshToken": "eyJ..." }
```

#### `POST /auth/logout` *(requires auth)*
Invalidate the current session.

---

### Channels

#### `GET /channels`
List all channels (paginated).

**Query params:** `page`, `limit`, `category`, `status`

#### `GET /channels/:slug`
Get channel details by slug.

#### `GET /channels/:slug/stream` *(requires auth)*
Get the signed HLS stream URL for a live channel.

**Response:**
```json
{
  "success": true,
  "data": {
    "streamUrl": "https://stream.novastream.tv/live/nova-sports-1/index.m3u8",
    "expiresAt": "2024-12-10T16:00:00.000Z"
  }
}
```

#### `GET /channels/catalog/content`
Browse the VOD content catalog.

---

### Subscriptions

#### `GET /subscriptions/plans`
Get all active subscription plans.

#### `POST /subscriptions`
Create or upgrade a subscription (stub — integrate payment processor).

---

### Analytics *(admin only)*

#### `GET /analytics/summary`
Platform summary KPIs.

#### `GET /analytics/viewers?days=7`
Daily viewer counts for N days.

#### `GET /analytics/revenue?months=6`
Monthly revenue for N months.

#### `GET /analytics/top-content`
Top 5 content items by views and watch time.

---

### Settings

#### `GET /settings`
Public platform configuration (maintenance mode, registration status).

#### `PATCH /settings` *(admin only)*
Update platform settings.

---

## Error Format

All errors follow this format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message."
  }
}
```

### Common error codes

| Code | HTTP | Description |
|------|------|-------------|
| `VALIDATION_ERROR` | 422 | Invalid request body |
| `UNAUTHORIZED` | 401 | Missing or invalid auth |
| `TOKEN_INVALID` | 401 | Expired or malformed token |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `DUPLICATE_EMAIL` | 409 | Email already registered |
| `INVALID_CREDENTIALS` | 401 | Wrong email or password |
| `INTERNAL_ERROR` | 500 | Unexpected server error |
