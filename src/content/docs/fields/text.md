---
title: Text
description: Text-based input fields in KraftAdmin
---

<script>
	import Note from '$lib/components/docs/Note.svelte';
	import Info from '$lib/components/docs/Info.svelte';
	import Tip from '$lib/components/docs/Tip.svelte';
	import Warning from '$lib/components/docs/Warning.svelte';
	import Danger from '$lib/components/docs/Danger.svelte';
	import Important from '$lib/components/docs/Important.svelte';
	import Experimental from '$lib/components/docs/Experimental.svelte';
	import Deprecated from '$lib/components/docs/Deprecated.svelte';
	import New from '$lib/components/docs/New.svelte';
    import Steps from '$lib/components/docs/Steps.svelte';
    import Step from '$lib/components/docs/Step.svelte';
    import FileTree from '$lib/components/docs/FileTree.svelte';
    import Terminal from '$lib/components/docs/Terminal.svelte';
    import ApiMethod from '$lib/components/docs/ApiMethod.svelte';
    import Badge from '$lib/components/docs/Badge.svelte';
    import Version from '$lib/components/docs/Version.svelte';
    import CalloutLink from '$lib/components/docs/CalloutLink.svelte';
</script>

# Text Fields

Text fields are used for collecting textual information from administrators.

KraftAdmin supports several specialized text input types that provide browser-level validation and optimized keyboards on mobile devices.

<Info>

If `inputType` is omitted, KraftAdmin automatically infers `TEXT` for `String` properties.

</Info>

---

## Available Input Types

| Input Type | Description |
|------------|-------------|
| `TEXT` | Standard single-line text input |
| `TEXTAREA` | Multi-line text |
| `EMAIL` | Email address |
| `PASSWORD` | Hidden password field |
| `TEL` | Telephone number |
| `URL` | Website address |
| `SEARCH` | Search input |
| `HIDDEN` | Hidden form field |

---

## Automatic Detection

```kotlin
@Entity
class User(

    var firstName: String,

    var lastName: String
)
```

KraftAdmin automatically renders these fields as standard text inputs.

---

## Standard Text

```kotlin
@KraftAdminField(
    label = "Full Name"
)
var name: String = ""
```

---

## Text Area

Use a textarea for long-form content.

```kotlin
@KraftAdminField(
    inputType = FormInputType.TEXTAREA
)
var biography: String = ""
```

---

## Email

Email fields use browser validation.

```kotlin
@KraftAdminField(
    inputType = FormInputType.EMAIL
)
var email: String = ""
```

---

## Password

Passwords are masked while typing.

```kotlin
@KraftAdminField(
    inputType = FormInputType.PASSWORD
)
var password: String = ""
```

<Warning>

Passwords should always be hashed before storage. KraftAdmin only controls the user interface and does not perform password hashing.

</Warning>

---

## Telephone

```kotlin
@KraftAdminField(
    inputType = FormInputType.TEL
)
var phone: String = ""
```

---

## URL

```kotlin
@KraftAdminField(
    inputType = FormInputType.URL
)
var website: String = ""
```

---

## Search

```kotlin
@KraftAdminField(
    inputType = FormInputType.SEARCH
)
var keyword: String = ""
```

Useful for search interfaces and filter forms.

---

## Hidden

```kotlin
@KraftAdminField(
    inputType = FormInputType.HIDDEN
)
var internalId: String = ""
```

Hidden fields are included in the form but are not visible to users.

---

# Common Configuration

## Required

```kotlin
@KraftAdminField(
    required = true
)
var username: String = ""
```

---

## Placeholder

```kotlin
@KraftAdminField(
    placeholder = "Enter your username"
)
var username: String = ""
```

---

## Label

```kotlin
@KraftAdminField(
    label = "Display Name"
)
var name: String = ""
```

---

## Read-only

```kotlin
@KraftAdminField(
    readonly = true
)
var slug: String = ""
```

---

## Hide from Tables

```kotlin
@KraftAdminField(
    showInTable = false
)
var biography: String = ""
```

---

## Validation

Use regular expressions to validate text.

```kotlin
@KraftAdminField(
    regex = "^[A-Za-z ]+$",
    validationMessage = "Only alphabetic characters are allowed."
)
var fullName: String = ""
```

---

## Sensitive Data

Sensitive values are masked in tables.

```kotlin
@KraftAdminField(
    sensitive = true
)
var apiKey: String = ""
```

---

## Grouping

```kotlin
@KraftAdminField(
    group = "Contact Information"
)
var email: String = ""
```

---

# Best Practices

<Tip>

Allow KraftAdmin to infer `TEXT` for ordinary strings. Only specify an `inputType` when a specialized control such as `EMAIL`, `PASSWORD`, or `URL` is required.

</Tip>

<Tip>

Use `TEXTAREA` for descriptions, articles, comments, and other multi-line content.

</Tip>

<Warning>

Client-side validation improves usability but should never replace server-side validation.

</Warning>

---

# Related Properties

| Property | Description |
|----------|-------------|
| `label` | Display label |
| `placeholder` | Placeholder text |
| `required` | Makes the field mandatory |
| `regex` | Validation pattern |
| `validationMessage` | Custom validation message |
| `readonly` | Prevent editing |
| `showInTable` | Controls table visibility |
| `sensitive` | Masks sensitive values |
| `group` | Form section |

---

## See Also

- Number
- Date & Time
- Select
- Checkbox
- WYSIWYG