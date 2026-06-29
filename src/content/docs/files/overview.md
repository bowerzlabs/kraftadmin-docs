---

title: File Storage Overview
description: Learn how KraftAdmin stores, updates, and manages uploaded files across local and cloud storage providers.
-----------------------------------------------------------------------------------------------------------------------

# File Storage

KraftAdmin includes a provider-based storage abstraction that allows uploaded files to be stored using different storage backends without changing your application code.

Whether you choose local disk storage during development or cloud providers such as Amazon S3 or Cloudinary in production, the programming model remains identical.

All media fields—including images, videos, audio, and documents—use the same storage pipeline.

---

# Supported Providers

KraftAdmin currently includes built-in support for:

* Local File System
* Amazon S3
* Cloudinary

Additional providers can easily be implemented by creating a custom storage provider.

---

# Why a Storage Abstraction?

Instead of tightly coupling uploads to a specific cloud platform, KraftAdmin introduces a common interface:

```kotlin
interface AdminStorageProvider
```

Every storage provider implements the same operations:

* Upload files
* Update existing files
* Delete files
* Determine ownership of a file

Because every provider exposes the same contract, switching from local storage to cloud storage requires little or no changes to your entity definitions.

---

# Storage Architecture

```
              Browser
                  │
                  ▼
          Multipart Request
                  │
                  ▼
          KraftAdmin Resource
                  │
                  ▼
        AdminStorageProvider
                  │
      ┌───────────┼────────────┐
      ▼           ▼            ▼
 Local Storage  Amazon S3   Cloudinary
                  │
                  ▼
            Public File URL
                  │
                  ▼
          Persisted in Entity
```

The administration engine never communicates directly with the storage platform.

Instead, it delegates every operation to the configured storage provider.

---

# Upload Lifecycle

When an administrator uploads a file, KraftAdmin performs the following sequence:

```
Administrator

      │

Select File

      │

HTTP Multipart Request

      │

Validate File

      │

AdminStorageProvider.upload()

      │

Storage Platform

      │

Public URL Returned

      │

Entity Saved
```

The returned URL becomes the value stored inside your entity.

For example:

```text
https://res.cloudinary.com/demo/image/upload/users/avatar.jpg
```

or

```text
https://my-bucket.s3.amazonaws.com/products/image.png
```

or

```text
/admin/files/users-8d91abf.png
```

The entity stores only the URL—not the file contents.

---

# Updating Files

Updating an existing file is handled automatically.

Instead of manually deleting the previous asset, providers implement an `update()` operation.

```
Current File
      │
      ▼
Delete Old Asset
      │
      ▼
Upload Replacement
      │
      ▼
Return New URL
```

The default implementation performs the following:

1. Check whether the previous file belongs to the current provider.
2. Delete the previous asset.
3. Upload the replacement.
4. Return the new URL.

Applications rarely need to implement this logic manually.

---

# Deleting Files

When an entity is deleted or a file is replaced, KraftAdmin delegates cleanup to the storage provider.

```
Delete Entity

      │

AdminStorageProvider.delete()

      │

Storage Platform

      │

Asset Removed
```

Each provider knows how to locate and remove its own assets.

---

# File Ownership

Every provider implements a `contains()` function.

```kotlin
fun contains(fileUrl: String): Boolean
```

This method determines whether a particular URL belongs to that provider.

For example:

| URL                                   | Provider      |
| ------------------------------------- | ------------- |
| `/admin/files/avatar.png`             | Local Storage |
| `https://bucket.s3.amazonaws.com/...` | Amazon S3     |
| `https://res.cloudinary.com/...`      | Cloudinary    |

This enables safe replacement of files without accidentally deleting assets managed by another provider.

---

# Integration with Form Fields

Storage providers are automatically used by file-based form fields.

These field types include:

* IMAGE
* FILE
* DOCUMENT
* VIDEO
* AUDIO

Example:

```kotlin
@KraftAdminField(
    inputType = FormInputType.IMAGE
)
lateinit var avatar: String
```

When an administrator uploads a new image, the configured storage provider receives the file and returns a public URL.

---

# File Validation

Upload validation is configured using the `FileConfig` annotation.

Typical validation options include:

* Allowed file extensions
* Allowed MIME types
* Maximum file size
* Minimum file size
* Multiple uploads
* Maximum number of files

Example:

```kotlin
@KraftAdminField(
    inputType = FormInputType.IMAGE,
    fileConfig = FileConfig(
        maxSizeBytes = 5 * 1024 * 1024,
        allowedExtensions = [
            FileExtension.JPG,
            FileExtension.PNG
        ]
    )
)
```

See the **File Configuration** guide for all available options.

---

# Local vs Cloud Storage

## Local Storage

Ideal for:

* Local development
* Small deployments
* Internal applications
* Rapid prototyping

Advantages:

* No external dependencies
* Works immediately
* Fast uploads
* Simple configuration

---

## Cloud Storage

Recommended for:

* Production deployments
* Large files
* Multiple application servers
* High availability
* CDN integration

Advantages:

* Scalable
* Durable
* Globally accessible
* Optimized for media delivery

---

# Storage Independence

One of the design goals of KraftAdmin is provider independence.

Your entities never need to know where files are stored.

Changing storage providers does not require changing entity definitions.

For example, the following field works with every supported storage provider:

```kotlin
@KraftAdminField(
    inputType = FormInputType.IMAGE
)
lateinit var profilePhoto: String
```

Whether the application stores files locally, on Amazon S3, or on Cloudinary is completely transparent to the entity.

---

# Custom Storage Providers

If your organization uses another storage platform, implement the `AdminStorageProvider` interface.

Examples include:

* Google Cloud Storage
* Azure Blob Storage
* MinIO
* DigitalOcean Spaces
* Wasabi
* Backblaze B2
* Company internal storage
* FTP servers
* Network Attached Storage (NAS)

Once registered, KraftAdmin treats custom providers exactly like the built-in implementations.

---

# Best Practices

* Use Local Storage during development.
* Use cloud storage in production.
* Organize uploads using meaningful context folders.
* Configure file validation using `FileConfig`.
* Store only public URLs inside entities.
* Avoid exposing filesystem paths directly.

---

# Next Steps

* Configure Local Storage
* Configure Amazon S3
* Configure Cloudinary
* Configure File Validation
* Implement a Custom Storage Provider
