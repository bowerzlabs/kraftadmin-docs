---
title: Number
description: Numeric input fields in KraftAdmin
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

# Number

The **Number** field is used for numeric values such as integers, floating-point numbers, decimals, and other JVM numeric types.

By default, KraftAdmin automatically detects numeric properties and renders an appropriate number input. You only need to specify `inputType = FormInputType.NUMBER` when overriding the default behavior.

<Info>

KraftAdmin automatically infers numeric fields from the property's JVM type.

</Info>

## Supported Types

The following Kotlin and Java types are supported:

| Kotlin | Java |
|---------|------|
| `Int` | `int` / `Integer` |
| `Long` | `long` / `Long` |
| `Float` | `float` / `Float` |
| `Double` | `double` / `Double` |
| `Short` | `short` / `Short` |
| `Byte` | `byte` / `Byte` |
| `BigDecimal` | `BigDecimal` |
| `BigInteger` | `BigInteger` |

---

## Automatic Detection

In most cases no annotation is required.

```kotlin
@Entity
class Product(

    var quantity: Int,

    var price: Double,

    var stock: Long
)
```

KraftAdmin automatically renders these as numeric inputs.

---

## Explicit Configuration

You can explicitly configure the field using `@KraftAdminField`.

```kotlin
@KraftAdminField(
    label = "Price",
    inputType = FormInputType.NUMBER
)
var price: Double = 0.0
```

---

## Required Field

```kotlin
@KraftAdminField(
    required = true,
    validationMessage = "Price is required."
)
var price: Double = 0.0
```

The field cannot be submitted with an empty value.

---

## Placeholder

```kotlin
@KraftAdminField(
    placeholder = "Enter product price"
)
var price: Double = 0.0
```

---

## Read-only

```kotlin
@KraftAdminField(
    readonly = true
)
var totalSales: Double = 0.0
```

The value is displayed but cannot be edited.

---

## Hide from Tables

```kotlin
@KraftAdminField(
    showInTable = false
)
var internalCost: Double = 0.0
```

Useful for values that should only appear in the edit form.

---

## Sorting

Sorting is enabled by default.

```kotlin
@KraftAdminField(
    sortable = false
)
var score: Double = 0.0
```

---

## Validation

Numeric fields also support regular expression validation.

```kotlin
@KraftAdminField(
    regex = "^\\d+(\\.\\d{1,2})?$",
    validationMessage = "Maximum two decimal places allowed."
)
var price: Double = 0.0
```

---

## Grouping

Fields can be organized into logical sections.

```kotlin
@KraftAdminField(
    group = "Pricing"
)
var price: Double = 0.0
```

---

## Best Practices

<Tip>

Use Kotlin numeric types directly whenever possible. KraftAdmin automatically selects the correct numeric component without requiring `inputType = FormInputType.NUMBER`.

</Tip>

<Warning>

Regular expressions validate the textual input before conversion to a numeric value. Ensure your regex matches the expected number format.

</Warning>

---

## Related Properties

| Property | Description |
|----------|-------------|
| `label` | Display label |
| `required` | Makes the field mandatory |
| `placeholder` | Input hint |
| `sortable` | Enables table sorting |
| `readonly` | Prevents editing |
| `showInTable` | Controls table visibility |
| `group` | Form section grouping |
| `regex` | Validation pattern |
| `validationMessage` | Custom validation message |

---

## See Also

- Text
- Range
- Date
- Select
- Checkbox