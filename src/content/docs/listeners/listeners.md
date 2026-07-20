---

title: Event Listeners
description: Run custom logic when resources are created, updated, deleted, or acted upon.
------------------------------------------------------------------------------------------

# Event Listeners

KraftAdmin allows you to run your own code when something happens inside the administration panel.

For example, you can:

* Send an email after an order is created
* Prevent a record from being deleted
* Write an audit log after a record is deleted
* Run custom logic after an update
* React when a custom action is executed

You do this by placing `@KraftAdminOn` on a method in a Spring bean.

```java
@Component
public class OrderListeners {

    @KraftAdminOn(
        events = { KraftAdminEvent.AfterCreate.class },
        entityClass = Order.class
    )
    public void onOrderCreated(KraftAdminEvent.AfterCreate event) {
        // Your custom logic
    }
}
```

KraftAdmin automatically discovers the listener and calls it when the matching event occurs.

---

## Basic Example

Suppose your application has an `Order` entity.

```java
@Component
public class OrderListeners {

    @KraftAdminOn(
        events = { KraftAdminEvent.AfterCreate.class },
        entityClass = Order.class
    )
    public void onOrderCreated(KraftAdminEvent.AfterCreate event) {

        Order order = (Order) event.getEntity();

        System.out.println(
            "Order created: " + order.getId()
        );
    }
}
```

Whenever an `Order` is created through KraftAdmin, the method is called after the creation has completed.

The event contains information about what happened, including the affected entity.

---

# The `@KraftAdminOn` Annotation

```kotlin
@KraftAdminOn(
    vararg val events: KClass<out KraftAdminEvent>,
    val resource: String = "",
    val entityClass: KClass<*> = Any::class,
    val order: Int = 0
)
```

The annotation has four configuration options:

| Property      | Purpose                                          |
| ------------- | ------------------------------------------------ |
| `events`      | The events the method listens for                |
| `resource`    | Restricts the listener to a resource name        |
| `entityClass` | Restricts the listener to a specific entity type |
| `order`       | Controls execution order between listeners       |

---

# `events`

The `events` property defines which events should trigger the method.

```java
@KraftAdminOn(
    events = {
        KraftAdminEvent.AfterCreate.class
    }
)
public void handleCreate(KraftAdminEvent.AfterCreate event) {
}
```

You can listen to multiple events with one method:

```java
@KraftAdminOn(
    events = {
        KraftAdminEvent.AfterCreate.class,
        KraftAdminEvent.AfterUpdate.class
    }
)
public void handleChanges(KraftAdminEvent event) {
}
```

Use multiple events when the same logic should run for more than one type of operation.

For example, you might want to clear a cache after both creating and updating a record.

---

# Entity-Specific Listeners

The most common way to configure a listener is with `entityClass`.

```java
@KraftAdminOn(
    events = { KraftAdminEvent.AfterCreate.class },
    entityClass = Order.class
)
public void onOrderCreated(KraftAdminEvent.AfterCreate event) {
    Order order = (Order) event.getEntity();

    // Handle the created order
}
```

This listener only runs when the event affects an `Order`.

It does not run for:

* Users
* Products
* Vehicles
* Any other resource

This is generally the preferred approach because it is type-safe and makes the listener's purpose clear.

---

# Resource-Based Listeners

You can also filter events using the resource name.

```java
@KraftAdminOn(
    events = { KraftAdminEvent.AfterCreate.class },
    resource = "Order"
)
public void onOrderCreated(KraftAdminEvent.AfterCreate event) {
}
```

The `resource` value is matched against the event's resource name.

This is useful when:

* You know the resource name but do not want to reference the entity class
* The resource is provided dynamically
* You are integrating with a resource provider

An empty `resource` value means that the listener is not filtered by resource name.

```java
@KraftAdminOn(
    events = { KraftAdminEvent.AfterDelete.class }
)
public void auditDelete(KraftAdminEvent.AfterDelete event) {
    // Can receive delete events from multiple resources
}
```

---

# `entityClass` vs `resource`

Both options can be used to restrict which events a listener receives.

### Using `entityClass`

```java
@KraftAdminOn(
    events = { KraftAdminEvent.AfterUpdate.class },
    entityClass = Order.class
)
```

This checks the actual entity type.

### Using `resource`

```java
@KraftAdminOn(
    events = { KraftAdminEvent.AfterUpdate.class },
    resource = "Order"
)
```

This checks the resource name.

For most application code, `entityClass` is the recommended option.

---

# Before and After Events

KraftAdmin provides events that happen before and after an operation.

The difference is important.

## Before Events

Before events run before an operation is completed.

For example:

```java
@KraftAdminOn(
    events = { KraftAdminEvent.BeforeDelete.class },
    entityClass = Order.class
)
public void preventDelete(KraftAdminEvent.BeforeDelete event) {

    Order order = (Order) event.getEntity();

    if (order.getStatus() == OrderStatus.SHIPPED) {
        throw new IllegalStateException(
            "Cannot delete a shipped order"
        );
    }
}
```

If the listener throws an exception, the operation is stopped.

This makes before events useful for validation and business rules.

```text
Before Operation
        ↓
Listener runs
        ↓
Exception?
   ↙          ↘
 Yes           No
  ↓             ↓
Cancel       Continue
operation    operation
```

Typical uses include:

* Preventing deletion
* Validating business rules
* Blocking updates
* Checking application state
* Enforcing additional conditions

---

## After Events

After events run after an operation has completed.

```java
@KraftAdminOn(
    events = { KraftAdminEvent.AfterCreate.class },
    entityClass = Order.class
)
public void onOrderCreated(KraftAdminEvent.AfterCreate event) {

    Order order = (Order) event.getEntity();

    emailService.sendConfirmation(order);
}
```

Typical uses include:

* Sending notifications
* Writing audit logs
* Clearing caches
* Triggering integrations
* Updating external systems

---

# Preventing an Operation

A listener can prevent a before-operation from continuing by throwing an exception.

```java
@KraftAdminOn(
    events = { KraftAdminEvent.BeforeDelete.class },
    entityClass = Order.class
)
public void preventDeleteIfShipped(
    KraftAdminEvent.BeforeDelete event
) {
    Order order = (Order) event.getEntity();

    if (order.getStatus() == OrderStatus.SHIPPED) {
        throw new IllegalStateException(
            "Cannot delete a shipped order"
        );
    }
}
```

The exception stops the operation.

This allows you to enforce rules that are specific to your application.

For example:

```java
if (vehicle.isCurrentlyRented()) {
    throw new IllegalStateException(
        "A rented vehicle cannot be deleted."
    );
}
```

---

# Listening to Custom Actions

Event listeners can also react to custom KraftAdmin actions.

For example, if you have an action called `approve-order`, you can listen for the action event.

```java
@KraftAdminOn(
    events = { KraftAdminEvent.BeforeAction.class },
    entityClass = Order.class
)
public void beforeOrderAction(
    KraftAdminEvent.BeforeAction event
) {
    Order order = (Order) event.getEntity();

    // Run logic before the custom action
}
```

This can be useful for:

* Validating whether an action is allowed
* Recording an audit entry
* Sending notifications
* Performing additional checks

For example:

```java
@KraftAdminOn(
    events = { KraftAdminEvent.BeforeAction.class },
    entityClass = Order.class
)
public void validateOrderAction(
    KraftAdminEvent.BeforeAction event
) {
    Order order = (Order) event.getEntity();

    if (order.getStatus() == OrderStatus.CANCELLED) {
        throw new IllegalStateException(
            "Actions cannot be performed on cancelled orders."
        );
    }
}
```

---

# Execution Order

Multiple listeners can listen to the same event.

The `order` property controls the order in which they run.

```java
@KraftAdminOn(
    events = { KraftAdminEvent.AfterCreate.class },
    entityClass = Order.class,
    order = 1
)
public void firstListener(
    KraftAdminEvent.AfterCreate event
) {
}
```

```java
@KraftAdminOn(
    events = { KraftAdminEvent.AfterCreate.class },
    entityClass = Order.class,
    order = 100
)
public void secondListener(
    KraftAdminEvent.AfterCreate event
) {
}
```

The listener with the lower order runs first.

```text
order = 1
    ↓
order = 10
    ↓
order = 100
```

The default order is `0`.

Use `order` when one listener must run before another.

---

# Multiple Listeners

You can create multiple listener classes.

```java
@Component
public class OrderListeners {

    @KraftAdminOn(
        events = { KraftAdminEvent.AfterCreate.class },
        entityClass = Order.class
    )
    public void sendConfirmation(
        KraftAdminEvent.AfterCreate event
    ) {
        // Send confirmation email
    }
}
```

```java
@Component
public class AuditListeners {

    @KraftAdminOn(
        events = { KraftAdminEvent.AfterDelete.class }
    )
    public void auditDelete(
        KraftAdminEvent.AfterDelete event
    ) {
        // Write audit record
    }
}
```

This allows you to keep different types of application logic separate.

For example:

* `OrderListeners` — order-specific business logic
* `AuditListeners` — audit logging
* `NotificationListeners` — email and notifications
* `IntegrationListeners` — external services

---

# Example: Complete Order Listener

The following example demonstrates several common use cases.

```java
@Component
public class OrderListeners {

    private final EmailService emailService;

    public OrderListeners(EmailService emailService) {
        this.emailService = emailService;
    }

    @KraftAdminOn(
        events = { KraftAdminEvent.AfterCreate.class },
        entityClass = Order.class
    )
    public void onOrderCreated(
        KraftAdminEvent.AfterCreate event
    ) {
        Order order = (Order) event.getEntity();

        emailService.sendConfirmation(order);
    }

    @KraftAdminOn(
        events = { KraftAdminEvent.BeforeDelete.class },
        entityClass = Order.class
    )
    public void preventInvalidDelete(
        KraftAdminEvent.BeforeDelete event
    ) {
        Order order = (Order) event.getEntity();

        if (order.getStatus() == OrderStatus.SHIPPED) {
            throw new IllegalStateException(
                "Cannot delete a shipped order."
            );
        }
    }

    @KraftAdminOn(
        events = { KraftAdminEvent.AfterDelete.class },
        entityClass = Order.class
    )
    public void auditDelete(
        KraftAdminEvent.AfterDelete event
    ) {
        // Write an audit record
    }

    @KraftAdminOn(
        events = { KraftAdminEvent.AfterUpdate.class },
        entityClass = Order.class
    )
    public void onOrderUpdated(
        KraftAdminEvent.AfterUpdate event
    ) {
        Order order = (Order) event.getEntity();

        // React to the update
    }
}
```

---

# Running Background Work

KraftAdmin listeners run as normal application code.

If your listener performs slow work, such as sending a request to an external service, you can move that work to a background executor.

For example:

```java
@KraftAdminOn(
    events = { KraftAdminEvent.AfterUpdate.class },
    entityClass = Order.class
)
public void onOrderUpdated(
    KraftAdminEvent.AfterUpdate event
) {
    CompletableFuture.runAsync(() -> {
        // Slow background work
        emailService.sendUpdateNotification(
            (Order) event.getEntity()
        );
    });
}
```

You can also use Spring's asynchronous support if it is enabled in your application.

```java
@Async
@KraftAdminOn(
    events = { KraftAdminEvent.AfterUpdate.class },
    entityClass = Order.class
)
public void onOrderUpdated(
    KraftAdminEvent.AfterUpdate event
) {
    // Runs asynchronously when Spring async support is configured
}
```

KraftAdmin does not require listeners to use a specific background execution strategy. Your application remains in control of how asynchronous work is scheduled.

---

# Listener Requirements

A listener method should:

1. Be declared on a Spring-managed bean.
2. Be annotated with `@KraftAdminOn`.
3. Listen to one or more KraftAdmin events.
4. Accept the matching event as its parameter.

Example:

```java
@Component
public class MyListeners {

    @KraftAdminOn(
        events = { KraftAdminEvent.AfterCreate.class }
    )
    public void handle(
        KraftAdminEvent.AfterCreate event
    ) {
        // Listener logic
    }
}
```

Because the class is a Spring component, KraftAdmin can discover it during application startup.

---

# Choosing the Right Event

Use **before events** when you need to make a decision about an operation.

```text
Should this operation be allowed?
        ↓
Use a Before event
```

Use **after events** when you want to react to something that already happened.

```text
The operation is complete.
What should happen next?
        ↓
Use an After event
```

A simple rule:

| Requirement              | Event type                                  |
| ------------------------ | ------------------------------------------- |
| Prevent an operation     | `Before...`                                 |
| Validate an operation    | `Before...`                                 |
| React after creation     | `AfterCreate`                               |
| React after an update    | `AfterUpdate`                               |
| Audit a deletion         | `AfterDelete`                               |
| React to a custom action | `BeforeAction` or the relevant action event |

---

# Summary

`@KraftAdminOn` gives your application a simple way to react to activity inside KraftAdmin.

You can use it to:

* Run code before an operation
* Prevent an operation
* Run code after an operation
* Listen to a specific entity
* Listen by resource name
* React to custom actions
* Control listener execution order

The listener system is intentionally lightweight: KraftAdmin tells you that something happened, and your application decides what to do next.
