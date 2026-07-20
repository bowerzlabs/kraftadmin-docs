---

title: Security
description: Configure authentication and access control for your KraftAdmin administration panel.
--------------------------------------------------------------------------------------------------

# Security

KraftAdmin supports two ways to secure the administration panel:

1. **Spring Security** — used when your application already uses Spring Security.
2. **Built-in Basic Authentication** — available when Spring Security is not being used.

KraftAdmin does not require a separate user database when your application already has an authentication system.

---

## Spring Security

If your application uses Spring Security, KraftAdmin uses the authenticated user provided by Spring Security.

Your existing:

* Login flow
* Users
* Sessions
* Password policies
* JWT authentication
* OAuth2 configuration

continue to work as they already do.

KraftAdmin uses the authenticated user to determine whether they can access the administration panel.

---

## Basic Authentication

If Spring Security is not available, KraftAdmin can use its built-in Basic Authentication.

Configure it in `application.yml`:

```yaml
kraftadmin:
  security:
    basic-auth:
      username: admin
      password: change-this-password
```

For example:

```yaml
kraftadmin:
  security:
    basic-auth:
      username: admin@example.com
      password: your-secure-password
```

> Do not commit production passwords directly to your configuration files. Use environment variables or your application's secret management system.

---

## Session Expiry

KraftAdmin can control how long an authenticated administration session remains valid.

```yaml
kraftadmin:
  security:
    session-expiry-minutes: 120
```

The default session expiry is configured in minutes.

---

## Required Roles

You can restrict access to the administration panel based on user roles.

```yaml
kraftadmin:
  security:
    required-roles:
      - ROLE_ADMIN
      - ROLE_SUPERUSER
```

Only authenticated users with one of the configured roles can access KraftAdmin.

For example:

```yaml
kraftadmin:
  security:
    required-roles:
      - ROLE_ADMIN
```

Users without the required role will be denied access.

---

## Protected Routes

KraftAdmin can also protect application routes based on roles.

```yaml
kraftadmin:
  security:
    protected-routes:
      "/api/users/**":
        - ROLE_SUPERUSER

      "/api/settings/**":
        - ROLE_ADMIN
```

This allows different parts of an application to require different roles.

---

## Session Cookie

The name of the authentication cookie can be customized.

```yaml
kraftadmin:
  security:
    cookie-name: MY_ADMIN_SESSION
```

For example:

```yaml
kraftadmin:
  security:
    cookie-name: EVRY_ADMIN_SESSION
```

This can be useful when running multiple applications or administration panels on the same domain.

---

## Complete Security Configuration

```yaml
kraftadmin:
  security:
    session-expiry-minutes: 120

    required-roles:
      - ROLE_ADMIN
      - ROLE_SUPERUSER

    protected-routes:
      "/api/users/**":
        - ROLE_SUPERUSER

      "/api/settings/**":
        - ROLE_ADMIN

    cookie-name: KRAFTADMIN_SESSION

    basic-auth:
      username: admin@example.com
      password: change-this-password
```

---

## Security Model

KraftAdmin follows a simple approach:

* If your application uses **Spring Security**, KraftAdmin uses the existing authentication system.
* If Spring Security is not available, **Basic Authentication** can be used.
* Access can be restricted using **required roles**.
* Specific application routes can be protected using **route-specific roles**.
* Session duration and the authentication cookie name can be configured.

KraftAdmin secures the administration experience without requiring a separate user system when your application already has one.
