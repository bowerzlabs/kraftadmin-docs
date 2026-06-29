---
title: Date & Time
description: Date and time fields in KraftAdmin
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

# Date & Time

The **Date & Time** field types allow administrators to select dates, times, or complete timestamps using native browser controls.

KraftAdmin automatically detects common Java and Kotlin date/time types and renders the appropriate input component.

<Info>

In most cases you do not need to specify an input type. KraftAdmin infers the correct component from the property's type.

</Info>

## Available Input Types

| FormInputType | Description |
|---------------|-------------|
| `DATE` | Date picker |
| `TIME` | Time picker |
| `DATETIME` | Date and time picker |

---

## Supported Types

The following JVM types are automatically detected.

| Kotlin / Java Type | Default Input |
|--------------------|---------------|
| `LocalDate` | `DATE` |
| `LocalTime` | `TIME` |
| `LocalDateTime` | `DATETIME` |
| `OffsetDateTime` | `DATETIME` |
| `Instant` | `DATETIME` |
| `java.util.Date` | `DATETIME` |

---

## Automatic Detection

```kotlin
@Entity
class Event(

    var eventDate: LocalDate,

    var startTime: LocalTime,

    var createdAt: LocalDateTime
)
```

KraftAdmin automatically generates the appropriate date and time pickers.

---

## Explicit Configuration

You can explicitly specify the desired input type.

```kotlin
@KraftAdminField(
    label = "Start Date",
    inputType = FormInputType.DATE
)
var startDate: LocalDate? = null
```

---

### Date & Time

```kotlin
@KraftAdminField(
    label = "Published At",
    inputType = FormInputType.DATETIME
)
var publishedAt: LocalDateTime? = null
```

---

### Time Only

```kotlin
@KraftAdminField(
    label = "Opening Time",
    inputType = FormInputType.TIME
)
var openingTime: LocalTime? = null
```

---

## Required Field

```kotlin
@KraftAdminField(
    required = true,
    validationMessage = "Please select a date."
)
var eventDate: LocalDate? = null
```

---

## Placeholder

Some browsers ignore placeholders for native date controls.

```kotlin
@KraftAdminField(
    placeholder = "Select a date"
)
var eventDate: LocalDate? = null
```

---

## Read-only

```kotlin
@KraftAdminField(
    readonly = true
)
var createdAt: LocalDateTime? = null
```

The value is visible but cannot be modified.

---

## Hide from Tables

```kotlin
@KraftAdminField(
    showInTable = false
)
var lastModified: LocalDateTime? = null
```

Useful for audit timestamps.

---

## Sorting

Date fields are sortable by default.

```kotlin
@KraftAdminField(
    sortable = false
)
var scheduledAt: LocalDateTime? = null
```

---

## Grouping

```kotlin
@KraftAdminField(
    group = "Scheduling"
)
var eventDate: LocalDate? = null
```

---

## Best Practices

<Tip>

Use the Java Time API (`LocalDate`, `LocalTime`, and `LocalDateTime`) instead of legacy `java.util.Date` whenever possible. These types are immutable, timezone-aware where appropriate, and provide better interoperability with modern Spring Boot applications.

</Tip>

<Info>

Audit fields such as `createdAt` and `updatedAt` are typically marked as read-only since they are managed automatically by the application.

</Info>

<Warning>

Always store timestamps using a consistent timezone (typically UTC) and convert them for display when necessary.

</Warning>

---

## Related Properties

| Property | Description |
|----------|-------------|
| `label` | Display label |
| `required` | Makes the field mandatory |
| `placeholder` | Input hint |
| `readonly` | Prevents editing |
| `sortable` | Enables table sorting |
| `showInTable` | Controls table visibility |
| `group` | Form section grouping |
| `validationMessage` | Custom validation error |

---

## See Also

- Number
- Text
- Select
- Checkbox
- Range