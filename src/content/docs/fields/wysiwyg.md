---
title: WYSIWYG
description: Rich text editing with configurable toolbar profiles
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

# WYSIWYG

The **WYSIWYG** field provides a rich text editor for creating formatted content such as articles, blog posts, product descriptions, documentation, and marketing pages.

Unlike a standard text field, WYSIWYG fields support formatting, headings, lists, hyperlinks, images, videos, and more.

KraftAdmin includes configurable toolbar layouts through `RichTextConfig`.

<Info>

WYSIWYG fields store HTML content. Ensure that rendered content is sanitized if it will be displayed outside trusted administrative interfaces.

</Info>

---

# Basic Usage

```kotlin
@KraftAdminField(
    inputType = FormInputType.WYSIWYG
)
var content: String = ""
```

This uses the default configuration:

- Minimal toolbar
- Default placeholder

---

# RichTextConfig

The editor can be customized using `RichTextConfig`.

```kotlin
@KraftAdminField(
    inputType = FormInputType.WYSIWYG,
    wysiwygConfig = RichTextConfig(
        toolbarProfile = ToolbarProfile.STANDARD,
        placeholder = "Write your article..."
    )
)
var body: String = ""
```

---

# Toolbar Profiles

KraftAdmin provides three predefined toolbar layouts.

| Profile | Recommended For |
|----------|-----------------|
| `MINIMAL` | Comments, notes, short descriptions |
| `STANDARD` | Blog posts, product descriptions, articles |
| `FULL` | Documentation, CMS content, enterprise publishing |

---

## Minimal

The smallest editing experience.

```kotlin
wysiwygConfig = RichTextConfig(
    toolbarProfile = ToolbarProfile.MINIMAL
)
```

### Features

- Bold
- Italic
- Clear formatting

Recommended for:

- Comments
- Notes
- Feedback
- Internal messages

---

## Standard

A balanced editing experience.

```kotlin
wysiwygConfig = RichTextConfig(
    toolbarProfile = ToolbarProfile.STANDARD
)
```

### Features

- Headings
- Bold
- Italic
- Underline
- Strike-through
- Ordered lists
- Bullet lists
- Blockquotes
- Hyperlinks
- Clear formatting

Recommended for:

- Articles
- Blog posts
- Product descriptions
- Knowledge base content

---

## Full

The complete publishing experience.

```kotlin
wysiwygConfig = RichTextConfig(
    toolbarProfile = ToolbarProfile.FULL
)
```

### Features

Everything included in **Standard**, plus:

- Fonts
- Font sizes
- Text colors
- Background colors
- Images
- Videos
- Code blocks
- Text alignment
- Text direction
- Superscript/Subscript
- Indentation
- Advanced formatting

Recommended for:

- CMS platforms
- Enterprise publishing
- Documentation
- Technical articles
- Marketing pages

---

# Placeholder

Display custom helper text while the editor is empty.

```kotlin
@KraftAdminField(
    inputType = FormInputType.WYSIWYG,
    wysiwygConfig = RichTextConfig(
        placeholder = "Start writing your article..."
    )
)
var article: String = ""
```

---

# Complete Example

```kotlin
@KraftAdminField(
    label = "Article Body",
    inputType = FormInputType.WYSIWYG,
    group = "Content",

    wysiwygConfig = RichTextConfig(

        toolbarProfile = ToolbarProfile.FULL,

        placeholder = "Compose a complete article..."
    )
)
var body: String = ""
```

---

# Common Field Options

WYSIWYG fields also support every standard `@KraftAdminField` property.

```kotlin
@KraftAdminField(
    label = "Description",
    inputType = FormInputType.WYSIWYG,

    required = true,

    placeholder = "Describe the product...",

    showInTable = false,

    group = "Content"
)
var description: String = ""
```

---

# Best Practices

<Tip>

Use **MINIMAL** for comments and notes where extensive formatting is unnecessary.

</Tip>

<Tip>

Use **STANDARD** as the default choice for most applications.

</Tip>

<Tip>

Reserve **FULL** for applications where users need advanced publishing features such as documentation systems or CMS platforms.

</Tip>

<Info>

Toolbar profiles are predefined layouts that provide a consistent editing experience across your application.

</Info>

<Warning>

Rich text content contains HTML markup. If content is rendered outside trusted administrative interfaces, sanitize it before displaying it to end users.

</Warning>

---

# RichTextConfig Properties

| Property | Description |
|----------|-------------|
| `toolbarProfile` | Selects one of the predefined toolbar layouts |
| `placeholder` | Placeholder text displayed when the editor is empty |

---

# ToolbarProfile Reference

| Profile | Description |
|----------|-------------|
| `MINIMAL` | Basic formatting for lightweight editing |
| `STANDARD` | Balanced formatting tools for everyday content |
| `FULL` | Enterprise publishing with media and advanced formatting |

---

## See Also

- Text
- File
- Image
- RichTextConfig