---
title: File Configuration
description: Configure uploads for file and media fields
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

# File Configuration

`FileConfig` customizes how KraftAdmin validates and accepts uploaded files.

It is used together with `@KraftAdminField` when the field uses one of the media input types such as:

- `FormInputType.FILE`
- `FormInputType.IMAGE`
- `FormInputType.VIDEO`
- `FormInputType.AUDIO`
- `FormInputType.DOCUMENT`

```kotlin
@KraftAdminField(
    inputType = FormInputType.FILE,
    fileConfig = FileConfig(...)
)
```

<Info>

If no `FileConfig` is provided, KraftAdmin uses sensible defaults.

</Info>

---

# Default Configuration

```kotlin
@KraftAdminField(
    inputType = FormInputType.FILE,
    fileConfig = FileConfig()
)
```

Default values:

| Property | Default |
|----------|---------|
| `multiple` | `false` |
| `maxFiles` | `1` |
| `allowedExtensions` | Any |
| `allowedMimeTypes` | Any |
| `minSizeBytes` | `0` |
| `maxSizeBytes` | `10 MB` |

---

# Multiple Uploads

Allow uploading more than one file.

```kotlin
@KraftAdminField(
    inputType = FormInputType.FILE,
    fileConfig = FileConfig(
        multiple = true,
        maxFiles = 5
    )
)
var documents: List<String> = emptyList()
```

---

# Maximum Files

Limit how many files may be uploaded.

```kotlin
fileConfig = FileConfig(
    multiple = true,
    maxFiles = 10
)
```

---

# Allowed Extensions

Restrict uploads by file extension.

```kotlin
fileConfig = FileConfig(
    allowedExtensions = [
        FileExtension.JPG,
        FileExtension.PNG,
        FileExtension.WEBP
    ]
)
```

Supported extensions include:

## Images

- JPG
- JPEG
- PNG
- GIF
- WEBP
- SVG

## Documents

- PDF
- DOC
- DOCX
- TXT
- CSV
- XLS
- XLSX
- PPT
- PPTX

## Video

- MP4
- WEBM
- MOV

## Audio

- MP3
- WAV
- OGG
- AAC
- FLAC

## Archives

- ZIP
- RAR
- GZ

---

# Allowed MIME Types

Validate uploaded files using MIME types.

```kotlin
fileConfig = FileConfig(
    allowedMimeTypes = [
        MimeType.IMAGE_JPEG,
        MimeType.IMAGE_PNG
    ]
)
```

This provides stronger validation than relying on file extensions alone.

---

# Minimum File Size

Reject files smaller than a specified size.

```kotlin
fileConfig = FileConfig(
    minSizeBytes = 1024
)
```

Only files larger than **1 KB** are accepted.

---

# Maximum File Size

Restrict the maximum upload size.

```kotlin
fileConfig = FileConfig(
    maxSizeBytes = 20 * 1024 * 1024
)
```

The above example allows uploads up to **20 MB**.

---

# Image Upload Example

```kotlin
@KraftAdminField(
    label = "Profile Photo",
    inputType = FormInputType.IMAGE,
    fileConfig = FileConfig(
        allowedExtensions = [
            FileExtension.JPG,
            FileExtension.PNG,
            FileExtension.WEBP
        ],
        maxSizeBytes = 5 * 1024 * 1024
    )
)
var avatar: String? = null
```

---

# PDF Upload Example

```kotlin
@KraftAdminField(
    label = "Resume",
    inputType = FormInputType.FILE,
    fileConfig = FileConfig(
        allowedExtensions = [
            FileExtension.PDF
        ],
        allowedMimeTypes = [
            MimeType.PDF
        ]
    )
)
var resume: String? = null
```

---

# Multiple Document Upload

```kotlin
@KraftAdminField(
    label = "Attachments",
    inputType = FormInputType.FILE,
    fileConfig = FileConfig(
        multiple = true,
        maxFiles = 10,
        maxSizeBytes = 50 * 1024 * 1024
    )
)
var attachments: List<String> = emptyList()
```

---

# Best Practices

<Tip>

Always validate both file extensions and MIME types. Extensions are easy to rename, while MIME types provide an additional layer of verification.

</Tip>

<Tip>

Use `multiple = true` only when the field represents a collection of files.

</Tip>

<Warning>

Never rely solely on client-side validation. KraftAdmin validates uploads on the server, but uploaded files should still be scanned and stored securely.

</Warning>

---

# FileConfig Properties

| Property | Description |
|----------|-------------|
| `multiple` | Allow multiple uploads |
| `maxFiles` | Maximum number of uploaded files |
| `allowedExtensions` | Allowed file extensions |
| `allowedMimeTypes` | Allowed MIME types |
| `minSizeBytes` | Minimum upload size |
| `maxSizeBytes` | Maximum upload size |

---

## See Also

- Image
- File
- Video
- Audio
- Document