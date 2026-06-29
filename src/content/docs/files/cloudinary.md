---
title: Cloudinary
description: Store uploaded files in Cloudinary for scalable cloud-based media management.
---

# Cloudinary

Cloudinary is a cloud-based media management platform that provides secure storage, image optimization, video processing, and global content delivery through an integrated CDN.

KraftAdmin includes a built-in Cloudinary storage provider that uploads files directly to your Cloudinary account while keeping the core library free from mandatory Cloudinary dependencies.

---

# Why Cloudinary?

Cloudinary is an excellent choice for applications that manage large numbers of media assets.

It provides:

- Global CDN delivery
- Automatic image optimization
- Video hosting
- Image transformations
- Responsive image generation
- High availability
- Secure HTTPS delivery

Instead of storing files on your application server, assets are uploaded directly to Cloudinary and referenced using permanent URLs.

---

# How It Works

```
Browser
      │
      ▼
KraftAdmin
      │
      ▼
CloudinaryProvider
      │
      ▼
Cloudinary API
      │
      ▼
Cloudinary Storage
      │
      ▼
Public HTTPS URL
```

Once uploaded, the returned Cloudinary URL is stored in your entity.

Example:

```
https://res.cloudinary.com/my-cloud/image/upload/v1748123/admin/users/avatar.jpg
```

---

# Zero Compile Dependency

One of the design goals of KraftAdmin is to avoid forcing unnecessary dependencies onto applications.

The `CloudinaryProvider` communicates with Cloudinary entirely through Java reflection.

This means KraftAdmin **does not require** the Cloudinary SDK at compile time.

If your application already includes the Cloudinary SDK, KraftAdmin detects and uses it automatically.

---

# Creating the Provider

Pass your application's configured Cloudinary instance into the provider.

```kotlin
val storage = CloudinaryProvider(cloudinary)
```

The `cloudinary` object is your application's configured `Cloudinary` client.

---

# Upload Process

When a file is uploaded, the provider:

1. receives the raw file bytes
2. calls Cloudinary's uploader API
3. stores the asset
4. returns the generated secure URL

Internally, KraftAdmin uploads files using:

```
resource_type = auto
```

This allows Cloudinary to automatically determine whether the uploaded asset is:

- image
- video
- document
- audio
- archive

without additional configuration.

---

# Folder Organization

Uploads are automatically grouped into folders.

The folder structure follows:

```
admin/<context>
```

Examples:

```
admin/users
```

```
admin/products
```

```
admin/blog-posts
```

A user profile image might become:

```
admin/users/avatar.jpg
```

while a product manual becomes:

```
admin/products/manual.pdf
```

This keeps media organized inside your Cloudinary dashboard.

---

# Generated URLs

After a successful upload, Cloudinary returns a secure HTTPS URL.

Example:

```
https://res.cloudinary.com/demo/image/upload/v123456/admin/users/avatar.jpg
```

This URL is stored directly in your entity and can be used immediately by the frontend.

---

# Updating Files

Replacing a file is automatic.

The storage lifecycle is:

```
Existing File
        │
        ▼
Delete Old Asset
        │
        ▼
Upload New File
        │
        ▼
Store New URL
```

This prevents orphaned media from accumulating in your Cloudinary account.

---

# Deleting Files

When an entity is removed, KraftAdmin deletes the corresponding Cloudinary asset.

The provider extracts the asset's public identifier from the stored URL and calls Cloudinary's delete API.

Example:

Stored URL

```
https://res.cloudinary.com/demo/image/upload/v123/admin/users/avatar.jpg
```

Public ID extracted:

```
admin/users/avatar
```

This identifier is then used to permanently remove the asset.

---

# Ownership Detection

The provider only deletes files that belong to Cloudinary.

It determines ownership by inspecting the URL.

Example:

```
https://res.cloudinary.com/...
```

belongs to Cloudinary.

Local files or Amazon S3 URLs are ignored.

This allows multiple storage providers to coexist safely.

---

# Supported File Types

Because uploads use Cloudinary's automatic resource detection, virtually any supported media type can be uploaded.

Common examples include:

- Images
- PDFs
- Word documents
- Videos
- Audio files
- ZIP archives

No manual resource type configuration is required.

---

# Integration Example

```kotlin
@Bean
fun storageProvider(
    cloudinary: Cloudinary
): AdminStorageProvider {

    return CloudinaryProvider(cloudinary)
}
```

Once registered, every file upload within KraftAdmin automatically uses Cloudinary.

---

# Advantages

Cloudinary offers numerous benefits:

- Global CDN
- Automatic image optimization
- Automatic format conversion
- Responsive images
- Video support
- Secure HTTPS URLs
- High availability
- Automatic file replacement
- No local disk usage

---

# Considerations

Cloudinary is a managed cloud service.

Depending on your usage, storage and bandwidth may incur costs.

Applications requiring complete on-premise storage or offline deployments may prefer the Local Storage provider instead.

---

# Best Use Cases

Cloudinary is recommended for:

- Production deployments
- Public-facing websites
- E-commerce platforms
- Content management systems
- Blogs
- Social applications
- Applications serving large numbers of images or videos

---

# Next Steps

- Configure Amazon S3 storage
- Learn about Local Storage
- Configure file upload fields
- Customize uploads using `FileConfig`
```