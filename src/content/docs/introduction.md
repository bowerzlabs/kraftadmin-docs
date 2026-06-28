---
title: Introduction
description: Welcome to KraftAdmin
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

# Introduction

Welcome to **KraftAdmin**.

This is regular Markdown.

```java
public class HelloWorld {

    public static void main(String[] args) {
        System.out.println("Hello, KraftAdmin!");
    }

}
```

```yaml
server:
  port: 8080

kraftadmin:
  theme: dark
```

<Note>

KraftAdmin is designed to work with both Spring Boot MVC and REST applications.

</Note>

<Info>

Documentation pages support Markdown, MDsveX components, syntax highlighting, and interactive examples.

</Info>

<Tip>

Use PostgreSQL for production deployments to achieve the best compatibility and performance.

</Tip>

<Warning>

Never commit your `.env` file or database credentials to version control.

</Warning>

<Danger>

Changing database schemas manually may corrupt generated migrations.

</Danger>

<Important>

KraftAdmin requires **Java 21** or newer.

</Important>

<Experimental>

This feature is experimental and may change in future releases without notice.

</Experimental>

<Deprecated>

The legacy configuration API will be removed in **v2.0**. Please migrate to the new builder API.

</Deprecated>

<New>

Version **1.1** introduces built-in documentation support, theme switching, and Markdown components.

</New>

<Steps>

<Step title="Install">

Run the installer.

</Step>

<Step title="Configure">

Create your application.yml.

</Step>

</Steps>

<FileTree>

src/
├── routes/
├── lib/
└── app.html

</FileTree>

<Terminal>

npm install kraftadmin

</Terminal>

<ApiMethod
	method="GET"
	path="/api/users"
/>

Returns all users.

<Badge>Stable</Badge>
<Version since="2.0" />

<CalloutLink
	title="Authentication"
	description="Learn how KraftAdmin secures your application."
	href="/docs/security/authentication"
/>


