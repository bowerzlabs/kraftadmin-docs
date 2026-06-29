---
title: Special Fields
description: Color pickers and range sliders.
---

# Special Fields

Special fields provide enhanced user interface components beyond standard form controls.

Supported components include:

- Color
- Range

---

# Color

The Color field renders a native color picker.

```kotlin
@KraftAdminField(
    inputType = FormInputType.COLOR
)
var themeColor: String = "#6366f1"
```

Administrators can choose colors visually instead of manually entering hexadecimal values.

Supported formats include:

- Hex (`#6366f1`)
- RGB (future)
- HSL (future)

---

# Range

Range fields render sliders for selecting numeric values.

```kotlin
@KraftAdminField(
    inputType = FormInputType.RANGE
)
var completion: Int = 50
```

Perfect for percentages, ratings and configurable thresholds.

---

# Validation

Range fields support standard validation.

```kotlin
@KraftAdminField(
    required = true,
    readonly = false
)
```

Future releases will introduce dedicated minimum and maximum constraints.

---

# Typical Use Cases

## Color

- Brand colors
- Theme customization
- Labels
- Categories

## Range

- Volume controls
- Progress percentages
- Ratings
- Confidence scores
- Thresholds

---

# Best Practices

Use Color whenever users need to select visual themes.

Use Range only when values exist within a bounded numeric interval and a slider provides a better experience than a number input.