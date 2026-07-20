
<script>
    import { version } from '$lib/constants/constants';
</script>

---
title: Installation
description: Install KraftAdmin into your Spring Boot project.
--------------------------------------------------------------


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
{version}
```

> The version shown above is retrieved automatically from the latest KraftAdmin release.

---

# Gradle (Kotlin DSL)

```kotlin
dependencies {
    implementation("com.kraftadmin:kraftadmin:{version}")
}
```

---

# Gradle (Groovy)

```groovy
dependencies {
    implementation 'com.kraftadmin:kraftadmin:{version}'
}
```

---

# Maven

```xml
<dependency>
    <groupId>com.kraftadmin</groupId>
    <artifactId>kraftadmin</artifactId>
    <version>{version}</version>
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

---
