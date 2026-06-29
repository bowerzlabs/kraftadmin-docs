---
title: Selection
description: Configure dropdowns, radio buttons, checkboxes and multi-select inputs.
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

# Selection Fields

Selection fields allow administrators to choose one or more values from predefined options.

In most cases, KraftAdmin automatically infers the appropriate selection component from the property type. You can also explicitly configure the component using `inputType`.

## Automatic Type Inference

KraftAdmin automatically maps common types to selection components.

<!-- | Property Type | Component |
|--------------|-----------|
| `Boolean` | Checkbox |
| `Enum` | Select |
| `Collection<Enum>` | Multi Select |
| Entity | Relation |
| Collection<Entity> | Multi Relation | -->

No additional configuration is required.

---

# Select

Use a dropdown when only one value should be selected.

```kotlin
enum class Status {
    DRAFT,
    REVIEW,
    PUBLISHED
}

@KraftAdminField
var status: Status = Status.DRAFT
```

Or explicitly specify the component.

```kotlin
@KraftAdminField(
    inputType = FormInputType.SELECT
)
var status: Status = Status.DRAFT
```

---

# Multi Select

Allows selecting multiple values.

```kotlin
enum class Permission {
    READ,
    WRITE,
    DELETE
}

@KraftAdminField(
    inputType = FormInputType.MULTI_SELECT
)
var permissions: Set<Permission> = emptySet()
```

The administrator can choose multiple options from a searchable list.

---

# Radio Buttons

Radio buttons are ideal when there are only a few available choices.

```kotlin
@KraftAdminField(
    inputType = FormInputType.RADIO
)
var status: Status = Status.DRAFT
```

Unlike a Select, every available option is immediately visible.

---

# Checkbox

Boolean properties automatically render as checkboxes.

```kotlin
@KraftAdminField
var enabled: Boolean = true
```

Equivalent explicit configuration:

```kotlin
@KraftAdminField(
    inputType = FormInputType.CHECKBOX
)
var enabled: Boolean = true
```

---

# Validation

Selection fields support every standard field option.

```kotlin
@KraftAdminField(
    required = true,
    readonly = false,
    placeholder = "Choose a status"
)
```

| Property | Description |
|----------|-------------|
| `required` | Selection must not be empty |
| `readonly` | Displays but cannot be changed |
| `placeholder` | Default placeholder text |
| `label` | Custom display label |
| `group` | Form section grouping |

---

# Best Practices

- Use **Select** for lists with many options.
- Use **Radio** when there are fewer than five choices.
- Use **Checkbox** only for boolean values.
- Use **Multi Select** when multiple values are expected.
- Prefer automatic type inference unless a different UI is desired.