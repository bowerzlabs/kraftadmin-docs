---
title: Fields Overview
description: Understanding how KraftAdmin generates form fields from your domain model.
---

# Fields Overview

Fields are the foundation of every KraftAdmin resource.

When a class is annotated with `@KraftAdminResource`, KraftAdmin inspects each property and automatically generates the appropriate user interface component for creating, editing and viewing data.

For most applications, no manual configuration is required. The framework uses the property's Java or Kotlin type together with its annotations to determine the most suitable field.

```kotlin
@KraftAdminResource
@Entity
class User(

    var firstName: String,

    var age: Int,

    var active: Boolean,

    var birthday: LocalDate,

    var department: Department?
)
```

KraftAdmin automatically generates an administration form containing:

- Text input for `firstName`
- Number input for `age`
- Checkbox for `active`
- Date picker for `birthday`
- Relation selector for `department`

No field annotations are necessary.

---

# Automatic Type Inference

By default, KraftAdmin maps JVM types to the most appropriate input component.

| Java / Kotlin Type | Generated Field |
|--------------------|-----------------|
| `String` | Text |
| `Int`, `Long`, `Float`, `Double`, `BigDecimal` | Number |
| `Boolean` | Checkbox |
| `LocalDate` | Date |
| `LocalTime` | Time |
| `LocalDateTime` | Date & Time |
| `Enum` | Select |
| `Collection<Enum>` | Multi Select |
| Entity Relationship | Relation |
| Collection of Entities | Multi Relation |

Automatic inference keeps entity classes clean while still producing rich administration interfaces.

---

# Overriding Field Types

Although KraftAdmin chooses sensible defaults, any field can be customized using `@KraftAdminField`.

```kotlin
@KraftAdminField(
    label = "Biography",
    inputType = FormInputType.TEXTAREA
)
var bio: String = ""
```

The `inputType` property allows you to replace the automatically inferred component with another supported field.

---

# Field Configuration

Every field supports a common set of configuration options.

```kotlin
@KraftAdminField(
    label = "First Name",
    placeholder = "Enter your first name",
    required = true,
    readonly = false,
    group = "Personal Information"
)
```

Some field types also expose additional configuration.

Examples include:

- `FileConfig` for uploads
- `RichTextConfig` for WYSIWYG editors
- `displayField` for entity relationships

---

# Field Categories

KraftAdmin organizes fields into several categories.

## Basic Inputs

Standard inputs used in most forms.

- Text
- Number
- Textarea
- Password
- Email
- Telephone
- URL
- Search
- Hidden

---

## Date & Time

Components for temporal values.

- Date
- Time
- DateTime

---

## Selection

Choose one or more predefined values.

- Select
- Multi Select
- Radio
- Checkbox

---

## Media

Upload and manage files.

- File
- Image
- Audio
- Video

Media fields support advanced upload validation through `FileConfig`.

---

## Rich Content

Create formatted documents and articles.

- WYSIWYG Editor

Rich text editors can be customized using `RichTextConfig` and predefined toolbar profiles.

---

## Relations

Manage relationships between entities.

- Relation
- Multi Relation

Relationship fields automatically integrate with your JPA entity mappings and provide searchable lookups.

---

## Structured Data

Work with complex data structures.

- JSON
- Array
- Object

These fields are useful when storing flexible or nested data.

---

## Special Fields

Specialized UI components.

- Color
- Range

These provide richer user experiences than standard text or number inputs.

---

# Validation

All field types integrate with KraftAdmin's validation system.

Common validation features include:

- Required fields
- Regular expression validation
- Read-only fields
- Sensitive data masking
- Custom validation messages

Additional validation rules are available for specific field types such as file uploads and rich text editors.

---

# Best Practices

- Prefer automatic type inference whenever possible.
- Override the field type only when a different user experience is required.
- Group related fields using the `group` property to improve form organization.
- Use descriptive labels and placeholders to make forms easier to understand.
- Configure specialized fields such as uploads and rich text editors using their dedicated configuration annotations.

---

# Next Steps

Continue with the field-specific documentation to learn about each component in detail.

- Basic Inputs
- Date & Time
- Selection
- Media
- Rich Content
- Relations
- Structured Data
- Special Fields