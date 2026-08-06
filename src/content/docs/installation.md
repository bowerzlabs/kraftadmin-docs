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
| ----------- | ------- |
| Java        | 17+     |
| Kotlin      | 1.9+    |
| Spring Boot | 3.0+    |

---

# Latest Version

The latest stable release is:

```text
0.1.28-beta
```

The current release version is `0.1.28-beta`.

---

# Gradle (Kotlin DSL)

```kotlin
dependencies {
    implementation("com.bowerzlabs:kraft-admin:0.1.28-beta")
}
```

---

# Gradle (Groovy)

```groovy
dependencies {
    implementation 'com.bowerzlabs:kraft-admin:0.1.28-beta'
}
```

---

# Maven

```xml
<dependency>
    <groupId>com.bowerzlabs</groupId>
    <artifactId>kraft-admin</artifactId>
    <version>0.1.28-beta</version>
</dependency>
```

---

# Snapshot Versions

For testing upcoming features, snapshot releases may be available.

Snapshot versions are intended for development and testing rather than production deployments.

---

# Verify Installation

After adding the dependency, start your Spring Boot application.

KraftAdmin should be available at:

```text
http://localhost:8080/admin
```

The `/admin` path is currently the default and only supported administration path.