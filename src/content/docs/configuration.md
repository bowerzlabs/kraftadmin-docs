---

title: Configuration
description: Configure KraftAdmin using Spring Boot configuration properties.
-----------------------------------------------------------------------------

# Configuration

KraftAdmin is configured using standard Spring Boot configuration properties.

You can configure KraftAdmin using either:

* `application.yml`
* `application.properties`

All KraftAdmin configuration properties use the `kraftadmin` prefix.

> **Note:** Telemetry and application monitoring are no longer part of KraftAdmin configuration. Telemetry has been moved to a separate project so that KraftAdmin can remain focused on administration functionality.

---

# Enable KraftAdmin

The minimum configuration required to enable KraftAdmin is:

## application.yml

```yaml
kraftadmin:
  enabled: true
```

## application.properties

```properties
kraftadmin.enabled=true
```

When enabled, KraftAdmin registers its administration panel and API endpoints.

The administration panel is currently available at:

```text
/admin
```

---

# Complete Configuration

The following examples show the available KraftAdmin configuration options.

## application.yml

```yaml
kraftadmin:
  # General Settings
  enabled: true
  base-path: /admin
  title: "KraftAdmin Dashboard"
  logo-url: "https://your-assets.com/logo.png"

  # Theme
  theme:
    primary-color: "#3b82f6"
    dark-mode: true

  # Storage
  storage:
    upload-dir: "uploads/admin"
    public-url-prefix: "/admin/files"

  # Security
  security:
    session-expiry-minutes: 120
    cookie-name: "KRAFTADMIN_SESSION"

    required-roles:
      - ROLE_ADMIN

    protected-routes:
      "/api/users/**":
        - ROLE_SUPERUSER
      "/api/settings/**":
        - ROLE_ADMIN

    basic-auth:
      username: "admin"
      password: "your-secure-password"

  # Pagination
  pagination:
    default-page-size: 20
    max-page-size: 100

  # Feature Toggles
  features:
    allow-delete: true
    show-timestamps: true
    read-only: false

  # Locale & Timezone
  locale-config:
    default-language: "en"
    timezone: "Africa/Nairobi"
```

---

## application.properties

```properties
# General Settings
kraftadmin.enabled=true
kraftadmin.base-path=/admin
kraftadmin.title=KraftAdmin Dashboard
kraftadmin.logo-url=https://your-assets.com/logo.png

# Theme
kraftadmin.theme.primary-color=#3b82f6
kraftadmin.theme.dark-mode=true

# Storage
kraftadmin.storage.upload-dir=uploads/admin
kraftadmin.storage.public-url-prefix=/admin/files

# Security
kraftadmin.security.session-expiry-minutes=120
kraftadmin.security.cookie-name=KRAFTADMIN_SESSION

# Required Roles
kraftadmin.security.required-roles[0]=ROLE_ADMIN

# Protected Routes
kraftadmin.security.protected-routes./api/users/**=ROLE_SUPERUSER
kraftadmin.security.protected-routes./api/settings/**=ROLE_ADMIN

# Basic Authentication Fallback
kraftadmin.security.basic-auth.username=admin
kraftadmin.security.basic-auth.password=your-secure-password

# Pagination
kraftadmin.pagination.default-page-size=20
kraftadmin.pagination.max-page-size=100

# Feature Toggles
kraftadmin.features.allow-delete=true
kraftadmin.features.show-timestamps=true
kraftadmin.features.read-only=false

# Locale & Timezone
kraftadmin.locale-config.default-language=en
kraftadmin.locale-config.timezone=Africa/Nairobi
```

> **Security note:** Avoid committing passwords directly to source control. Use environment variables or another secrets management solution for sensitive values.

---

# General Settings

General settings control the main administration panel.

```yaml
kraftadmin:
  enabled: true
  base-path: /admin
  title: "KraftAdmin Dashboard"
  logo-url: "https://your-assets.com/logo.png"
```

## enabled

Enables or disables KraftAdmin.

```yaml
kraftadmin:
  enabled: true
```

Set this to `false` to disable KraftAdmin without removing the dependency.

## base-path

Defines the base path used by KraftAdmin.

```yaml
kraftadmin:
  base-path: /admin
```

> **Current limitation:** `/admin` is currently the only supported administration path. The `base-path` property is reserved for future configurability.

## title

Defines the title displayed throughout the administration panel.

```yaml
kraftadmin:
  title: "My Application"
```

The title may be used in areas such as navigation and page metadata.

## logo-url

Defines the logo displayed in the administration interface.

```yaml
kraftadmin:
  logo-url: "/images/logo.svg"
```

---

# Theme

Theme settings are configured under `kraftadmin.theme`.

```yaml
kraftadmin:
  theme:
    primary-color: "#3b82f6"
    dark-mode: true
```

## primary-color

Defines the primary accent color used throughout the interface.

```yaml
kraftadmin:
  theme:
    primary-color: "#3b82f6"
```

The primary color may be used for:

* Buttons
* Links
* Active navigation
* Highlights
* Other primary interface elements

## dark-mode

Controls whether dark mode is enabled.

```yaml
kraftadmin:
  theme:
    dark-mode: true
```

---

# Storage

Storage settings control uploaded files.

```yaml
kraftadmin:
  storage:
    upload-dir: "uploads/admin"
    public-url-prefix: "/admin/files"
```

## upload-dir

Defines the directory where files are stored when using local storage.

```yaml
kraftadmin:
  storage:
    upload-dir: "uploads/admin"
```

## public-url-prefix

Defines the URL prefix used to access uploaded files.

```yaml
kraftadmin:
  storage:
    public-url-prefix: "/admin/files"
```

---

# Security

Security settings control authentication, sessions, and authorization.

```yaml
kraftadmin:
  security:
    session-expiry-minutes: 120
    cookie-name: "KRAFTADMIN_SESSION"
    required-roles:
      - ROLE_ADMIN
```

For more information, see the [Security](/docs/security) guide.

## session-expiry-minutes

Defines how long a KraftAdmin session remains valid.

```yaml
kraftadmin:
  security:
    session-expiry-minutes: 120
```

## cookie-name

Defines the name of the cookie used for KraftAdmin sessions.

```yaml
kraftadmin:
  security:
    cookie-name: "KRAFTADMIN_SESSION"
```

## required-roles

Restricts access to users with the specified roles.

```yaml
kraftadmin:
  security:
    required-roles:
      - ROLE_ADMIN
      - ROLE_SUPERUSER
```

A user must have one of the configured roles to access the administration panel.

## protected-routes

Allows individual routes to require specific roles.

```yaml
kraftadmin:
  security:
    protected-routes:
      "/api/users/**":
        - ROLE_SUPERUSER
      "/api/settings/**":
        - ROLE_ADMIN
```

This allows different parts of the administration API to have different access requirements.

## Basic Authentication

When Spring Security is not available, KraftAdmin can use its built-in Basic Authentication fallback.

```yaml
kraftadmin:
  security:
    basic-auth:
      username: "admin"
      password: "your-secure-password"
```

For production applications, store credentials outside your configuration files.

For example:

```yaml
kraftadmin:
  security:
    basic-auth:
      username: "${KRAFTADMIN_USERNAME}"
      password: "${KRAFTADMIN_PASSWORD}"
```

---

# Pagination

Pagination settings control how many records are displayed in tables.

```yaml
kraftadmin:
  pagination:
    default-page-size: 20
    max-page-size: 100
```

## default-page-size

Defines the default number of records displayed per page.

```yaml
kraftadmin:
  pagination:
    default-page-size: 20
```

## max-page-size

Defines the maximum number of records that can be requested on a single page.

```yaml
kraftadmin:
  pagination:
    max-page-size: 100
```

---

# Feature Toggles

Feature toggles control global functionality.

```yaml
kraftadmin:
  features:
    allow-delete: true
    show-timestamps: true
    read-only: false
```

## allow-delete

Controls whether delete operations are available.

```yaml
kraftadmin:
  features:
    allow-delete: false
```

Set this to `false` to disable delete operations globally.

## show-timestamps

Controls whether timestamp fields such as `createdAt` and `updatedAt` are displayed.

```yaml
kraftadmin:
  features:
    show-timestamps: true
```

## read-only

Makes the administration panel read-only.

```yaml
kraftadmin:
  features:
    read-only: true
```

When enabled, users can view data but cannot modify it.

---

# Locale and Timezone

Locale settings are configured under `locale-config`.

```yaml
kraftadmin:
  locale-config:
    default-language: "en"
    timezone: "Africa/Nairobi"
```

## default-language

Defines the default language used by the administration panel.

```yaml
kraftadmin:
  locale-config:
    default-language: "en"
```

## timezone

Defines the timezone used when displaying dates and times.

```yaml
kraftadmin:
  locale-config:
    timezone: "Africa/Nairobi"
```

---

# Environment Variables

Spring Boot allows configuration values to be supplied through environment variables.

For example:

```bash
export KRAFTADMIN_SECURITY_BASIC_AUTH_USERNAME=admin
export KRAFTADMIN_SECURITY_BASIC_AUTH_PASSWORD=secret
```

You can also reference environment variables from your configuration files:

```yaml
kraftadmin:
  security:
    basic-auth:
      username: "${KRAFTADMIN_USERNAME}"
      password: "${KRAFTADMIN_PASSWORD}"
```

This is recommended for passwords and other sensitive values.

---

# Configuration Overview

| Section    | Purpose                                    |
| ---------- | ------------------------------------------ |
| General    | Enable KraftAdmin and configure branding   |
| Theme      | Configure colors and dark mode             |
| Storage    | Configure uploaded file storage            |
| Security   | Configure authentication and authorization |
| Pagination | Configure table page sizes                 |
| Features   | Enable or disable global functionality     |
| Locale     | Configure language and timezone            |

