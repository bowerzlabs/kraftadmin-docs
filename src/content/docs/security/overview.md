---
title: Security
description: Secure the administration panel using your application's existing authentication system.
---

# Security

KraftAdmin is designed to integrate with your application's authentication rather than replace it.

Whether you're using Spring Security, JWT, OAuth2, LDAP, SAML, Keycloak, or a completely custom authentication system, KraftAdmin consumes the authenticated user and applies its own authorization rules for the administration panel.

The library never creates a second user database or requires separate administrator accounts.

---

# Security Architecture

Authentication is delegated through a provider chain.

```
                Incoming Request
                       │
                       ▼
             SecurityProviderResolver
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
 Custom Provider   Framework Adapter  Built-in Basic Auth
        │              │              │
        └──────────────┼──────────────┘
                       ▼
             AdminSecurityProvider
                       │
                       ▼
                 AdminUserDTO
                       │
                       ▼
             Authorization Checks
                       │
                       ▼
                 KraftAdmin UI
```

Each provider attempts to authenticate the request.

The first provider that successfully authenticates the request becomes the active identity.

---

# Authentication Philosophy

KraftAdmin intentionally avoids owning authentication.

Instead of asking:

> "How should users log in?"

it asks:

> "Who is already authenticated?"

This provides several advantages:

- No duplicate login implementation
- No additional user tables
- Existing sessions continue working
- Existing password policies remain unchanged
- Existing MFA continues working
- Existing OAuth providers continue working
- Existing security audits remain valid

If your application trusts the user, KraftAdmin trusts that authentication.

---

# Provider Resolution

Authentication providers are resolved automatically during startup.

Resolution order:

1. Custom Provider
2. Framework Adapter
3. Built-in Basic Authentication

```
AdminSecurityConfig
        │
        ▼
SecurityProviderResolver
        │
        ▼
SecurityProviderChain
```

This makes configuration almost automatic.

For example, if Spring Security is detected on the classpath, the Spring adapter is automatically enabled.

If no framework is detected, KraftAdmin falls back to its internal Basic Authentication provider.

---

# Framework Detection

Framework detection happens automatically by inspecting the application's classpath.

Currently supported integrations include:

- Spring Security
- Ktor Authentication
- Micronaut Security
- Quarkus Security

Adapter modules register themselves using:

```kotlin
AdminSecurityConfig(
    frameworkAdapterFactory = {
        SpringSecurityAdapter()
    }
)
```

Framework detection may also be overridden manually.

---

# Spring Security

For Spring applications, KraftAdmin reads the authenticated user directly from the Spring Security context.

```
Browser
    │
    ▼
Spring Security Filters
    │
    ▼
Authentication
(Session/JWT/OAuth2)
    │
    ▼
SecurityContextHolder
    │
    ▼
SpringSecurityAdapter
    │
    ▼
AdminUserDTO
```

The adapter understands common Spring authentication types including:

- UserDetails
- UsernamePasswordAuthenticationToken
- OAuth2User
- OidcUser
- JWT Authentication
- Custom Authentication implementations

No additional login flow is required.

---

# User Mapping

Applications usually expose large domain-specific user models.

Rather than exposing these objects directly, KraftAdmin converts them into a lightweight administration user.

```
Spring User
        │
        ▼
AdminPrincipalMapper
        │
        ▼
AdminUserDTO
```

The mapped user typically contains:

- Username
- Display name
- Initials
- Avatar
- Roles
- Bridge mode status

This keeps the administration UI completely independent from your application's domain model.

---

# Authorization

Authentication determines **who** the user is.

Authorization determines **what** the user may access.

KraftAdmin performs authorization after authentication succeeds.

```kotlin
AdminSecurityConfig(
    requiredRoles = setOf(
        "ROLE_ADMIN"
    )
)
```

If the authenticated user lacks one of the configured roles, KraftAdmin immediately returns:

```
403 Forbidden
```

---

# AdminSecurityContext

Every authenticated request receives an `AdminSecurityContext`.

It provides helper methods for role checks throughout the administration system.

```kotlin
context.requireRole("ROLE_ADMIN")
```

Multiple roles may also be required.

```kotlin
context.requireRoles(
    "ROLE_ADMIN",
    "ROLE_MANAGER"
)
```

If any required role is missing, an `AdminAccessDeniedException` is thrown and converted into a `403 Forbidden` response.

---

# Browser vs API Requests

KraftAdmin distinguishes between browser navigation and API calls.

## Browser Requests

```
GET /admin
        │
        ▼
Unauthenticated
        │
        ▼
Redirect
        │
        ▼
/admin
```

The frontend application displays the login experience.

---

## API Requests

API endpoints return JSON instead of redirects.

```http
HTTP/1.1 401 Unauthorized

{
    "error":"Unauthorized",
    "message":"Session expired or invalid"
}
```

This prevents browsers from displaying native HTTP Basic authentication dialogs.

---

# Session Authentication

KraftAdmin includes a session-based authentication provider.

The provider validates a session cookie and retrieves the corresponding administrator from the configured session store.

```
Cookie
    │
    ▼
SessionTokenProvider
    │
    ▼
AdminSessionStore
    │
    ▼
AdminUserDTO
```

This allows administrators to remain authenticated across requests without repeatedly providing credentials.

---

# Built-in Basic Authentication

When no security framework is detected, KraftAdmin automatically enables a standalone Basic Authentication provider.

```
Browser
    │
Authorization Header
    │
    ▼
BuiltinBasicAuthProvider
```

If no password is configured, KraftAdmin generates a secure random password during startup and prints it to the console.

```text
[KRAFT] No security framework detected.
[KRAFT] Username: admin
[KRAFT] Password: x7G9K1Lm...
```

This makes local development possible without requiring Spring Security or another authentication framework.

---

# Custom Providers

Any authentication mechanism can be integrated by implementing `AdminSecurityProvider`.

```kotlin
class JwtProvider : AdminSecurityProvider {

    override fun authenticate(
        request: AdminRequest
    ): AdminUserDTO? {

        // Validate request

        return AdminUserDTO(...)
    }

}
```

Custom providers have the highest priority in the provider chain.

This makes it easy to integrate:

- API Keys
- LDAP
- SAML
- Keycloak
- Firebase Authentication
- Supabase Auth
- Custom JWT implementations
- External Identity Providers

---

# Security Configuration

Security behavior is configured using `AdminSecurityConfig`.

```kotlin
AdminSecurityConfig(

    basicAuth = BasicAuthConfig(),

    customProvider = null,

    sessionConfig = SessionConfig(),

    requiredRoles = setOf(
        "ROLE_ADMIN"
    )

)
```

The configuration allows you to:

- Configure Basic Authentication
- Register custom providers
- Configure session handling
- Override framework detection
- Define required administrator roles

---

# Security Flow

A typical request follows this lifecycle.

```
Incoming Request
        │
        ▼
SecurityProviderResolver
        │
        ▼
SecurityProviderChain
        │
        ▼
Authenticate
        │
        ▼
AdminUserDTO
        │
        ▼
Role Validation
        │
        ▼
AdminSecurityContext
        │
        ▼
Controller
```

Authentication and authorization remain completely separate, allowing applications to plug into almost any existing security architecture.

---

# Next Steps

- Configure Spring Security integration
- Configure session authentication
- Implement a custom authentication provider
- Configure administrator roles
- Customize authorization policies