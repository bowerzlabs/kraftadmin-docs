---
title: Local Storage
description: Store uploaded files on your application's local filesystem.
---

# Local Storage

The Local Storage provider stores uploaded files directly on the server running your application.

It is the default storage implementation used by KraftAdmin whenever no cloud storage provider has been configured.

Because it requires no external services, Local Storage is ideal for:

- Local development
- Internal administration tools
- Small deployments
- Proof-of-concepts
- Self-hosted applications

---

# How it Works

When a file is uploaded, KraftAdmin:

1. Generates a unique filename.
2. Saves the file to a configured upload directory.
3. Returns a public URL that can be stored in your entity.

```
Browser
    │
    ▼
KraftAdmin
    │
    ▼
LocalFileSystemAdapter
    │
    ▼
uploads/admin/
    │
    ▼
Stored File
```

Every uploaded file receives a unique filename to prevent collisions.

---

# Default Configuration

By default, files are stored in:

```
uploads/admin/
```

and exposed through:

```
/admin/files/
```

For example:

```
uploads/
└── admin/
    ├── users-74cda6d1.jpg
    ├── products-61df7b2a.png
    └── posts-a73bcb81.pdf
```

The corresponding public URLs become:

```
/admin/files/users-74cda6d1.jpg

/admin/files/products-61df7b2a.png

/admin/files/posts-a73bcb81.pdf
```

---

# Automatic File Naming

Files are never stored using their original filename.

Instead, KraftAdmin generates a unique filename using:

- field context
- random UUID
- original file extension

For example:

Original upload:

```
avatar.png
```

Stored as:

```
users-89f5dcab-6f2c-4b61-a67d.png
```

This prevents filename collisions while preserving the file extension.

---

# Context Folders

Every upload includes a **context**.

The context helps identify where a file belongs.

Example:

```kotlin
@KraftAdminField(
    inputType = FormInputType.IMAGE
)
var profilePhoto: String
```

The generated filename may become:

```
users-3f1d21ae.jpg
```

Another resource:

```kotlin
@KraftAdminField(
    inputType = FormInputType.FILE
)
var manual: String
```

may produce:

```
products-19ca733.pdf
```

This makes stored assets easier to organize.

---

# Updating Files

When an existing file is replaced, KraftAdmin automatically:

1. uploads the new file
2. removes the old file
3. stores the new URL

No manual cleanup is required.

```
Old Image
      │
      ▼
Delete
      │
      ▼
Upload New Image
      │
      ▼
Save New URL
```

This prevents unused files from accumulating on disk.

---

# Deleting Files

When an entity is deleted, KraftAdmin can remove the associated files automatically.

For example:

```
Delete Product
       │
       ▼
Delete Image
       │
       ▼
Delete PDF
```

Only files managed by the Local Storage provider are deleted.

---

# URL Detection

The provider determines ownership using the configured public URL prefix.

Example:

```
/admin/files/avatar.jpg
```

belongs to the Local Storage provider.

Whereas:

```
https://res.cloudinary.com/...
```

does not.

This allows multiple storage providers to coexist safely.

---

# Configuration

The Local Storage adapter can be configured with a custom upload directory and public URL.

```kotlin
LocalFileSystemAdapter(
    uploadDir = "uploads/admin",
    publicPrefix = "/admin/files"
)
```

## uploadDir

Directory where uploaded files are stored.

Example:

```text
uploads/admin
```

or

```text
data/uploads
```

---

## publicPrefix

Public URL used when generating file links.

Example:

```text
/waswo/admin/files
```

or

```text
/files
```

Every generated file URL begins with this prefix.

---

# Example

```kotlin
val storage = LocalFileSystemAdapter(
    uploadDir = "uploads/admin",
    publicPrefix = "/admin/files"
)
```

---

# Advantages

Local Storage provides several benefits:

- No third-party services
- No API keys
- No cloud configuration
- Fast local access
- Ideal for development
- Works completely offline
- Automatic file replacement
- Automatic cleanup

---

# Limitations

Since files are stored on the application server, Local Storage is not recommended for horizontally scaled deployments.

If multiple application instances are running, uploaded files are not automatically shared between servers.

For production environments requiring scalability or CDN delivery, consider using:

- Cloudinary
- Amazon S3
- another custom `AdminStorageProvider`

---

# When to Use Local Storage

Choose Local Storage when:

- developing locally
- running internal business applications
- deploying to a single server
- building prototypes
- external cloud storage is unnecessary

For larger deployments, cloud storage providers offer better scalability, redundancy, and global availability.

---

# Next Steps

- Configure Cloudinary storage
- Configure Amazon S3 storage
- Learn about file upload fields
- Customize file validation with `FileConfig`