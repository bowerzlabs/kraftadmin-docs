---
title: Relations
description: Managing JPA entity relationships inside KraftAdmin.
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

# Relations

KraftAdmin automatically detects JPA relationships and renders them as relational selectors.

Supported relationship types include:

- One-to-One
- Many-to-One
- One-to-Many
- Many-to-Many

---

# Automatic Detection

```kotlin
@ManyToOne
var department: Department? = null
```

No annotation is required.

KraftAdmin automatically renders a relation selector.

---

# Explicit Relation

```kotlin
@KraftAdminField(
    inputType = FormInputType.RELATION
)
@ManyToOne
var department: Department? = null
```

---

# Multiple Relations

Collections automatically become multi-selection relation components.

```kotlin
@ManyToMany
var roles: MutableSet<Role> = mutableSetOf()
```

Equivalent explicit configuration:

```kotlin
@KraftAdminField(
    inputType = FormInputType.MULTI_RELATION
)
@ManyToMany
var roles: MutableSet<Role> = mutableSetOf()
```

---

# Display Fields

By default KraftAdmin attempts to determine the most meaningful property to display.

You can explicitly define it.

```kotlin
@KraftAdminField(
    displayField = true
)
var name: String = ""
```

The property marked with `displayField` becomes the label shown inside relationship selectors.

Example:

```
Departments

Finance

Engineering

Marketing
```

instead of

```
Department #17
Department #42
Department #53
```

---

# Lazy Loading

Relationships are loaded only when required by the interface.

Large datasets remain responsive through pagination and lazy loading.

---

# Searching

Relation fields provide searchable lookups.

Administrators can quickly locate related records without scrolling through long lists.

---

# Best Practices

- Always define a display field.
- Use concise entity names.
- Avoid exposing technical identifiers.
- Prefer lazy loading for large datasets.