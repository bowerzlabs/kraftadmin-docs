---
title: Configuration
description: Configure KraftAdmin using a single centralized configuration object.
---

# Configuration

KraftAdmin is configured through a single configuration interface.

Rather than scattering settings across multiple builders or annotations, every global option lives under `KraftAdminPropertiesConfig`.

This makes it easy to configure branding, storage, security, pagination, localization, and platform features from one place.

---

# Configuration Structure

```text
KraftAdminPropertiesConfig
├── General
├── Theme
├── Storage
├── Security
├── Pagination
├── Features
├── Localization
└── Telemetry
```

Each section controls a different aspect of the administration panel.

---

# Basic Configuration

A typical implementation looks like:

```kotlin
class MyAdminConfiguration : KraftAdminPropertiesConfig {

    override val enabled = true

    override val basePath = "/admin"

    override val title = "KraftAdmin"

    override val version = "1.0.0"

    override val logoUrl = "/images/logo.svg"

    override val theme = MyThemeConfig()

    override val storage = MyStorageConfig()

    override val security = MySecurityConfig()

    override val pagination = MyPaginationConfig()

    override val features = MyFeatureConfig()

    override val localeConfig = MyLocaleConfig()

    override val telemetryConfig = MyTelemetryConfig()
}
```

---

# General Settings

These properties define the overall administration panel.

## enabled

Globally enables or disables KraftAdmin.

```kotlin
override val enabled = true
```

If disabled, the administration panel is unavailable.

---

## basePath

The URL where the administration panel is served.

```kotlin
override val basePath = "/admin"
```

Examples:

```
/admin
```

```
/dashboard
```

```
/management
```

---

## title

Application title displayed throughout the interface.

```kotlin
override val title = "KraftAdmin"
```

Typically appears in:

- Sidebar
- Login page
- Browser title
- Navigation

---

## version

Displays the application version.

```kotlin
override val version = "2.1.0"
```

Useful for identifying deployments.

---

## logoUrl

Optional logo displayed throughout the administration panel.

```kotlin
override val logoUrl = "/images/logo.svg"
```

If omitted, the default branding is used.

---

# Theme Configuration

Theme customization is handled by `ThemeConfig`.

```kotlin
interface ThemeConfig {

    val primaryColor: String

    val darkMode: Boolean

}
```

---

## primaryColor

Primary accent color.

```kotlin
override val primaryColor = "#2563eb"
```

This color is used for:

- Buttons
- Links
- Active navigation
- Progress indicators
- Highlights

---

## darkMode

Controls the application's default theme.

```kotlin
override val darkMode = true
```

Applications may choose to:

- Always use dark mode
- Always use light mode
- Respect the user's preference (future support)

---

# Storage Configuration

Storage settings define where uploaded files are stored.

```kotlin
interface StorageConfig {

    val uploadDir: String

    val publicUrlPrefix: String

}
```

Example:

```kotlin
override val uploadDir = "uploads/admin"

override val publicUrlPrefix = "/admin/files"
```

These settings are primarily used by the Local Storage provider.

Cloud providers such as Cloudinary and Amazon S3 ignore these values.

---

# Security Configuration

Security settings control authentication and authorization.

```kotlin
interface SecurityConfig {

    val cookieName: String

    val sessionExpiryMinutes: Long

    val requiredRoles: Set<String>

    val protectedRoutes: Map<String, Set<String>>

    val basicAuth: BasicAuthConfig

}
```

---

## cookieName

Session cookie used by KraftAdmin.

```kotlin
override val cookieName = "admin_session"
```

---

## sessionExpiryMinutes

Determines how long authenticated sessions remain valid.

```kotlin
override val sessionExpiryMinutes = 60
```

---

## requiredRoles

Defines which authenticated users may access the administration panel.

```kotlin
override val requiredRoles = setOf(
    "ROLE_ADMIN",
    "ROLE_SUPER_ADMIN"
)
```

Only users possessing one of these roles may access the dashboard.

---

## protectedRoutes

Allows finer-grained authorization.

Example:

```kotlin
override val protectedRoutes = mapOf(

    "/api/resources/User" to setOf("ROLE_SUPER_ADMIN"),

    "/api/resources/AuditLog" to setOf("ROLE_AUDITOR")

)
```

Different administration resources can therefore require different roles.

---

## basicAuth

Configuration for KraftAdmin's built-in Basic Authentication provider.

```kotlin
override val basicAuth = BasicAuthConfig(
    username = "admin",
    password = "secret"
)
```

This is primarily used when no external security framework is available.

---

# Pagination

Pagination controls how many records appear in tables.

```kotlin
interface PaginationConfig {

    val defaultPageSize: Int

    val maxPageSize: Int

}
```

Example:

```kotlin
override val defaultPageSize = 20

override val maxPageSize = 100
```

---

# Feature Toggles

Feature flags enable or disable functionality globally.

```kotlin
interface FeatureConfig {

    val allowDelete: Boolean

    val showTimestamps: Boolean

    val readOnly: Boolean

}
```

---

## allowDelete

Globally enables or disables delete operations.

```kotlin
override val allowDelete = false
```

Useful in production environments.

---

## showTimestamps

Displays common audit fields.

```kotlin
override val showTimestamps = true
```

This affects fields such as:

- createdAt
- updatedAt

---

## readOnly

Turns the administration panel into a read-only interface.

```kotlin
override val readOnly = true
```

Administrators may browse data but cannot modify it.

---

# Localization

Localization controls language and timezone.

```kotlin
interface LocaleConfig {

    val defaultLanguage: String

    val timezone: String

}
```

Example:

```kotlin
override val defaultLanguage = "en"

override val timezone = "Africa/Nairobi"
```

Future versions will use these settings for:

- Date formatting
- Number formatting
- Localization
- Regional preferences

---

# Telemetry

Telemetry enables diagnostics and optional cloud integrations.

```kotlin
interface TelemetryConfig {

    var enabled: Boolean

    var cloudUrl: String

    var path: String?

    var provider: TelemetryProvider

    val apiKey: String?

    val secretKey: String?

}
```

---

## enabled

Enables telemetry.

```kotlin
enabled = true
```

---

## provider

Selects the telemetry backend.

```kotlin
provider = TelemetryProvider.LOCAL
```

Available providers:

- LOCAL
- CLOUD

---

## cloudUrl

Endpoint used when cloud telemetry is enabled.

```kotlin
cloudUrl = "https://telemetry.example.com"
```

---

## apiKey

Authentication key used by cloud providers.

```kotlin
apiKey = "..."
```

---

## secretKey

Optional secret used to authenticate telemetry requests.

```kotlin
secretKey = "..."
```

---

# Configuration Overview

| Section | Purpose |
|---------|---------|
| General | Application metadata and routing |
| Theme | Branding and appearance |
| Storage | Local upload configuration |
| Security | Authentication and authorization |
| Pagination | Table pagination defaults |
| Features | Global feature toggles |
| Localization | Language and timezone |
| Telemetry | Monitoring and cloud services |

---

# Best Practices

For production deployments, consider the following recommendations:

- Use descriptive application titles.
- Configure a custom logo to match your organization's branding.
- Restrict access using `requiredRoles`.
- Disable delete operations if accidental data loss is a concern.
- Use read-only mode for reporting environments.
- Store sensitive credentials such as API keys and secrets in environment variables rather than source code.
- Configure telemetry only if monitoring or cloud services are required.

---

# Next Steps

- Configure Security
- Configure File Storage
- Customize Themes
- Define Admin Resources
- Explore Feature Toggles