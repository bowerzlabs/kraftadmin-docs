---
title: Installation
description: Install KraftAdmin into your Spring Boot project.
---

# Installation

KraftAdmin is distributed through Maven Central and can be installed using either Gradle or Maven.

---

# Requirements

Before installing KraftAdmin, ensure your project uses:

| Requirement | Version |
|-------------|----------|
| Java | 21+ |
| Kotlin | 2.1+ |
| Spring Boot | 3.5+ |

---

# Latest Version

The latest stable release is:

```text
{{ latestVersion }}
```

> The documentation automatically displays the latest published version.

---

# Gradle (Kotlin DSL)

```kotlin
dependencies {
    implementation("com.kraftadmin:kraftadmin:{{ latestVersion }}")
}
```

---

# Gradle (Groovy)

```groovy
dependencies {
    implementation 'com.kraftadmin:kraftadmin:{{ latestVersion }}'
}
```

---

# Maven

```xml
<dependency>
    <groupId>com.kraftadmin</groupId>
    <artifactId>kraftadmin</artifactId>
    <version>{{ latestVersion }}</version>
</dependency>
```

---

# Snapshot Versions

For testing upcoming features, snapshot releases are available.

```kotlin
implementation("com.kraftadmin:kraftadmin:{{ snapshotVersion }}")
```

---

# Verify Installation

Create your first admin resource.

```kotlin
@KraftAdminResource
data class User(
    @Id
    val id: Long,

    val name: String
)
```

Start your application and navigate to:

```
http://localhost:8080/admin
```

---

# Next Steps

- Configure KraftAdmin
- Secure the dashboard
- Create your first resource