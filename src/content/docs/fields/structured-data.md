---
title: Structured Data
description: Working with arrays, objects and JSON values.
---

# Structured Data

KraftAdmin supports editing complex structured values beyond primitive fields.

Supported field types include:

- JSON
- ARRAY
- OBJECT

---

# JSON

JSON fields are useful for storing flexible configuration or metadata.

```kotlin
@KraftAdminField(
    inputType = FormInputType.JSON
)
var settings: String = "{}"
```

The editor provides syntax highlighting and formatted JSON editing.

---

# Arrays

Arrays allow editing ordered collections.

```kotlin
@KraftAdminField(
    inputType = FormInputType.ARRAY
)
var tags: List<String> = emptyList()
```

Administrators can add, remove and reorder values.

---

# Objects

Object fields represent nested structures.

```kotlin
@KraftAdminField(
    inputType = FormInputType.OBJECT
)
var address: Address = Address()
```

Nested properties are rendered using expandable forms.

---

# Validation

Structured fields continue to support normal validation.

```kotlin
@KraftAdminField(
    required = true
)
```

---

# Typical Use Cases

JSON

- Application settings
- Dynamic schemas
- API payloads

Arrays

- Tags
- Categories
- Skills
- Labels

Objects

- Addresses
- Contact information
- Embedded value objects
- Nested configuration

---

# Best Practices

Use strongly typed entities whenever possible.

Reserve JSON fields for data whose structure changes frequently.