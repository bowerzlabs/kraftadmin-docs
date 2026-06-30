---
title: Introduction
description: An overview of KraftAdmin and how it fits into your Spring Boot application.
---

# Introduction

KraftAdmin is a metadata-driven administration framework for Spring Boot.

Instead of manually creating CRUD controllers, HTML templates, REST endpoints, tables, forms, filters, pagination, and validation, KraftAdmin generates an administration interface directly from your application's model.

With a few annotations, your existing entities become fully manageable through a modern web interface.

---

# Why KraftAdmin?

Building administration dashboards is repetitive.

Almost every application eventually requires interfaces for managing:

- Users
- Products
- Orders
- Categories
- Files
- Roles
- Settings
- Reports

Despite each project having different business logic, these administrative interfaces are remarkably similar.

KraftAdmin automates this repetitive work so you can focus on your application's domain.

---

# How It Works

KraftAdmin scans your application for annotated resources.

```kotlin
@KraftAdminResource
data class User(

    @Id
    val id: Long,

    val name: String,

    val email: String
)
```

From this single class, KraftAdmin generates:

- Resource listing
- Data tables
- Search
- Pagination
- Sorting
- Create forms
- Edit forms
- Detail pages
- Validation
- File handling (when applicable)

No frontend development is required.

---

# Annotation Driven

Everything begins with annotations.

Annotations describe how your model should appear inside the administration interface.

For example:

```kotlin
@KraftAdminField(
    label = "Email Address",
    required = true
)
val email: String
```

The framework uses this metadata to determine:

- labels
- validation rules
- field components
- table visibility
- sorting
- grouping
- placeholders
- read-only fields

Most of the time, KraftAdmin can infer sensible defaults automatically.

---

# Core Annotations

KraftAdmin is driven almost entirely by annotations.

Rather than configuring resources through XML or external configuration files, you describe your administration interface directly alongside your application's domain model.

The framework scans these annotations during startup and automatically generates the appropriate administration experience.

## @KraftAdminResource

Every manageable resource begins with `@KraftAdminResource`.

```kotlin
@KraftAdminResource(
    group = "Security",
    icon = "👤"
)
@Entity
class User(

    @Id
    val id: UUID?,

    val name: String,

    val email: String
)
```

This annotation tells KraftAdmin to expose the class as a manageable resource.

From a single annotated class, KraftAdmin generates:

- Resource listing
- Create page
- Edit page
- Detail page
- Search
- Pagination
- Sorting

without requiring controllers or frontend code.

---

## @KraftAdminLookup

Relationships between resources are handled using `@KraftAdminLookup`.

```kotlin
@KraftAdminLookup(
    resource = Department::class,
    displayField = "name"
)
var departmentId: UUID?
```

Instead of asking administrators to enter a UUID manually, KraftAdmin displays a searchable lookup field and stores the selected identifier automatically.

This makes relationships much easier to manage while keeping your domain model unchanged.

---

## @KraftAdminDependsOn

Forms can react dynamically to user input.

```kotlin
@KraftAdminField(inputType = FormInputType.CHECKBOX)
var remote = false

@KraftAdminDependsOn(
    field = "remote",
    value = "true"
)
var homeOfficeAllowance = 0.0
```

In this example, the **Home Office Allowance** field only appears when **Remote** is enabled.

Conditional fields help reduce clutter and make forms easier to complete.

---

## @KraftAdminListener

Business logic can be attached to resource lifecycle events.

```kotlin
@Component
class UserListeners {

    @KraftAdminListener(
        on = [KraftAdminEvent.BEFORE_CREATE],
        resource = "User"
    )
    fun beforeCreate(user: User) {
        user.email = user.email.lowercase()
    }

}
```

Listeners can be used to validate data, transform values, send notifications, or integrate with external systems before or after CRUD operations.

---

# Built for Spring Boot

KraftAdmin integrates naturally with existing Spring Boot applications.

It works alongside:

- Spring MVC
- Spring Data JPA
- Spring Security
- Spring Validation
- Hibernate
- OAuth2
- JWT Authentication

No changes to your existing architecture are required.

---

# Major Features

KraftAdmin provides everything needed to build modern administration interfaces.

### Resource Management

- Automatic CRUD generation
- Search
- Sorting
- Pagination
- Detail pages

### Forms

- Automatic field inference
- Rich form components
- Conditional fields
- Validation
- File uploads

### Security

- Spring Security integration
- Role-based authorization
- Route protection

### Storage

- Local filesystem
- AWS S3
- Cloudinary

### Developer Experience

- Annotation-driven configuration
- Convention over configuration
- Extensible architecture
- Theme customization
- Localization
- Telemetry support


---

# Flexible Storage

Uploaded files can be stored using different providers.

Supported providers include:

- Local filesystem
- AWS S3
- Cloudinary

Switching providers requires only configuration changes.

---

# Flexible Security

Authentication is delegated to your application.

KraftAdmin supports:

- Spring Security
- Sessions
- JWT
- OAuth2
- OIDC
- Custom providers

The framework never requires duplicate user accounts or separate authentication logic.

---

# Developer Experience

KraftAdmin emphasizes convention over configuration.

If you don't specify how a field should behave, the framework chooses the most appropriate component automatically.

For example:

| Kotlin Type | Generated Component |
|-------------|---------------------|
| String | Text Field |
| Int | Number Field |
| Boolean | Checkbox |
| LocalDate | Date Picker |
| Enum | Select |
| Collection | Multi Select |
| ByteArray | File Upload |

Most applications require very little configuration to become fully functional.

---

# Documentation Structure

This guide is organized into several sections:

- Installation
- Configuration
- Resources
- Fields
- Security
- File Storage
- Customization
- API Reference

Each chapter builds upon the previous one while remaining independent enough to be used as a reference.

---

# Next Steps

If you're new to KraftAdmin, continue with the Installation guide to add the framework to your project and generate your first administration interface.