---

title: Custom Actions
description: Add custom business operations to your KraftAdmin resources.
-------------------------------------------------------------------------

# Custom Actions

KraftAdmin custom actions allow you to add application-specific operations to your administration panel.

For example, an `Order` resource might need actions such as:

* Approve an order
* Cancel an order
* Refund an order
* Ship an order
* Send an invoice
* Mark an order as completed

Instead of putting this logic inside the admin framework, you define the operation in your own application service and expose it to KraftAdmin using `@KraftAdminCustomAction`.

```java
@KraftAdminCustomAction(
    entityClass = Order.class,
    name = "approve-order",
    label = "Approve",
    icon = KraftIcon.ICON_WALLET,
    variant = ActionVariant.SUCCESS,
    confirmMessage = "Are you sure you want to approve this order?"
)
public KraftActionResponse approve(KraftActionContext context) {

    Order order = context.entity();

    orderService.approve(order);

    return KraftActionResponse
        .ok("Order approved.")
        .build();
}
```

KraftAdmin discovers annotated methods during startup and makes them available as actions in the administration panel.

---

## Basic Action

A custom action requires:

* An entity
* A unique name
* A label
* A method that performs the operation

```java
@KraftAdminCustomAction(
    entityClass = Order.class,
    name = "approve-order",
    label = "Approve"
)
public KraftActionResponse approve(KraftActionContext context) {

    Order order = context.entity();

    orderService.approve(order);

    return KraftActionResponse
        .ok("Order approved.")
        .build();
}
```

The action will be displayed as an action for the `Order` resource.

---

# Annotation Configuration

`@KraftAdminCustomAction` provides configuration for the action's identity, appearance, behavior, input, permissions, and placement.

```java
@KraftAdminCustomAction(
    entityClass = Order.class,
    name = "approve-order",
    label = "Approve",
    icon = KraftIcon.ICON_CHECK,
    variant = ActionVariant.SUCCESS,
    target = ActionTarget.ROW,
    bulk = false,
    requiresSelection = true,
    confirmMessage = "Approve this order?",
    hideAfterExecution = false,
    refresh = true,
    order = 0,
    permission = "orders.approve",
    group = "Order Management"
)
```

---

## `entityClass`

```java
entityClass = Order.class
```

Specifies the entity or resource that the action applies to.

```java
@KraftAdminCustomAction(
    entityClass = Order.class,
    name = "approve-order",
    label = "Approve"
)
```

This action will be associated with the `Order` resource.

The action method can then access the selected entity through:

```java
Order order = context.entity();
```

### Default

```java
Nothing.class
```

In most cases, you should explicitly specify the entity class.

---

## `name`

```java
name = "approve-order"
```

The unique identifier of the action.

Use a stable, descriptive name.

```java
name = "approve-order"
```

```java
name = "refund-order"
```

```java
name = "send-invoice"
```

The name is used internally to identify the action when the frontend invokes it.

### Recommendations

Use lowercase kebab-case:

```text
approve-order
refund-order
send-invoice
mark-as-completed
```

Avoid using display text as the action name:

```text
Approve Order
```

The `name` should remain stable even if the visible label changes.

---

## `label`

```java
label = "Approve"
```

The text displayed to the administrator.

```java
label = "Approve"
```

The user sees:

```text
Approve
```

The label can be changed without changing the action's internal identifier.

For example:

```java
name = "approve-order"
label = "Approve Order"
```

---

# Appearance

## `icon`

```java
icon = KraftIcon.ICON_WALLET
```

Specifies the icon displayed alongside the action.

KraftAdmin provides predefined icons through `KraftIcon`.

```java
icon = KraftIcon.ICON_TRASH
```

```java
icon = KraftIcon.ICON_SHIP
```

```java
icon = KraftIcon.ICON_SHOPPING_CART
```

You can also provide an icon identifier directly when supported by your configured icon set.

```java
icon = "custom-icon"
```

If no icon is specified, KraftAdmin uses the default action icon.

---

## `variant`

```java
variant = ActionVariant.SUCCESS
```

Controls the visual appearance of the action.

Available variants include:

| Variant     | Intended use                        |
| ----------- | ----------------------------------- |
| `PRIMARY`   | Main or general-purpose actions     |
| `SECONDARY` | Less prominent actions              |
| `SUCCESS`   | Positive actions                    |
| `WARNING`   | Actions requiring caution           |
| `DANGER`    | Destructive or irreversible actions |

Examples:

```java
variant = ActionVariant.PRIMARY
```

```java
variant = ActionVariant.SUCCESS
```

```java
variant = ActionVariant.WARNING
```

```java
variant = ActionVariant.DANGER
```

For example, an approval action is a good candidate for `SUCCESS`:

```java
@KraftAdminCustomAction(
    entityClass = Order.class,
    name = "approve-order",
    label = "Approve",
    variant = ActionVariant.SUCCESS
)
```

A cancellation or deletion action may use `DANGER`:

```java
@KraftAdminCustomAction(
    entityClass = Order.class,
    name = "cancel-order",
    label = "Cancel",
    variant = ActionVariant.DANGER
)
```

---

# Action Placement

## `target`

```java
target = ActionTarget.ROW
```

Controls where the action is displayed in the administration interface.

For example, an action may appear:

* On an individual resource row
* In a toolbar
* In another supported action location

The default target is:

```java
ActionTarget.ROW
```

Example:

```java
@KraftAdminCustomAction(
    entityClass = Order.class,
    name = "refund-order",
    label = "Refund",
    target = ActionTarget.ROW
)
```

Use the target that matches how the operation is intended to be used.

---

# Selection and Bulk Actions

## `requiresSelection`

```java
requiresSelection = true
```

Specifies whether the action requires one or more selected resources.

The default is:

```java
true
```

For an action that operates on a specific order:

```java
requiresSelection = true
```

The selected entity can then be accessed through:

```java
Order order = context.entity();
```

An action that does not require a selected entity can use:

```java
requiresSelection = false
```

This is useful for actions that operate independently of a specific resource.

---

## `bulk`

```java
bulk = true
```

Allows the action to operate on multiple selected records.

For example:

```java
@KraftAdminCustomAction(
    entityClass = Order.class,
    name = "approve-orders",
    label = "Approve Selected",
    bulk = true
)
public KraftActionResponse approveOrders(KraftActionContext context) {

    // Process selected orders

    return KraftActionResponse
        .ok("Orders approved.")
        .build();
}
```

Use `bulk = true` for operations such as:

* Approving multiple records
* Exporting selected records
* Archiving records
* Sending notifications
* Changing the status of multiple records

Use:

```java
bulk = false
```

for actions intended for a single record.

The default is:

```java
false
```

---

# Confirmation Dialogs

## `confirmMessage`

```java
confirmMessage =
    "Are you sure you want to approve this order?"
```

Displays a confirmation dialog before the action is executed.

Example:

```java
@KraftAdminCustomAction(
    entityClass = Order.class,
    name = "refund-order",
    label = "Refund",
    confirmMessage =
        "Are you sure you want to issue a refund for this order?"
)
```

The action is not executed until the administrator confirms.

This is especially useful for:

* Deleting records
* Cancelling orders
* Issuing refunds
* Sending notifications
* Performing irreversible operations

If the value is empty:

```java
confirmMessage = ""
```

no confirmation message is displayed.

---

# Action Input

Custom actions can optionally display a form before execution.

This is useful when an action needs additional information.

For example, cancelling an order may require a reason.

```java
@KraftAdminCustomAction(
    entityClass = Order.class,
    name = "cancel-order",
    label = "Cancel",
    input = CancellationRequest.class,
    inputTitle = "Cancel Order",
    inputDescription = "Please provide a cancellation reason.",
    submitLabel = "Cancel Order",
    cancelLabel = "Close"
)
public KraftActionResponse cancel(KraftActionContext context) {

    Order order = context.entity();

    CancellationRequest request = context.input();

    order.setCancellationReason(
        request.getMessage()
    );

    orderService.cancel(order);

    return KraftActionResponse
        .ok("Order cancelled.")
        .build();
}
```

---

## Defining an Action Input

The input class is a normal class whose fields are described using `@KraftAdminField`.

```java
@Data
@NoArgsConstructor
public class CancellationRequest {

    @KraftAdminField(
        label = "Cancellation Message",
        inputType = FormInputType.WYSIWYG,
        wysiwygConfig = @RichTextConfig(
            placeholder = "Enter detailed reason",
            toolbarProfile = ToolbarProfile.STANDARD
        )
    )
    private String message;
}
```

KraftAdmin uses the field metadata to generate the form shown to the administrator.

The submitted form is then available through:

```java
CancellationRequest request =
    context.input();
```

---

## `input`

```java
input = CancellationRequest.class
```

Specifies the class used to generate the action input form.

```java
input = CancellationRequest.class
```

If no input class is provided:

```java
input = Nothing.class
```

the action does not display an input form.

---

## `inputTitle`

```java
inputTitle = "Cancel Order"
```

The title displayed at the top of the action input dialog.

Example:

```java
inputTitle = "Cancel Order"
```

---

## `inputDescription`

```java
inputDescription =
    "Please provide a cancellation reason."
```

Additional information displayed below the dialog title.

Use this to explain what information the administrator needs to provide.

---

## `submitLabel`

```java
submitLabel = "Cancel Order"
```

Controls the label of the form submission button.

Default:

```text
Submit
```

Example:

```java
submitLabel = "Confirm Cancellation"
```

---

## `cancelLabel`

```java
cancelLabel = "Close"
```

Controls the label of the button used to close the input dialog.

Default:

```text
Cancel
```

Example:

```java
cancelLabel = "Go Back"
```

---

# Action Results

Custom action methods return a `KraftActionResponse`.

```java
public KraftActionResponse approve(
    KraftActionContext context
) {
    // Perform operation

    return KraftActionResponse
        .ok("Order approved.")
        .build();
}
```

For successful operations:

```java
return KraftActionResponse
    .ok("Order approved.")
    .build();
```

For failed operations:

```java
return KraftActionResponse
    .fail("Cannot approve a cancelled order.")
    .build();
```

For example:

```java
if ("CANCELLED".equals(order.getStatus())) {

    return KraftActionResponse
        .fail(
            "Cannot approve a cancelled order."
        )
        .build();
}
```

The response is sent back to the administration interface, where KraftAdmin can display the result to the user.

---

# `hideAfterExecution`

```java
hideAfterExecution = true
```

Removes or hides the action after it has successfully executed.

This can be useful for one-way state transitions.

For example:

```text
Pending Order
     │
     ▼
Approve
     │
     ▼
Approved Order
```

After the order is approved, the `Approve` action may no longer be useful.

```java
@KraftAdminCustomAction(
    entityClass = Order.class,
    name = "approve-order",
    label = "Approve",
    hideAfterExecution = true
)
```

The default is:

```java
false
```

---

# `refresh`

```java
refresh = true
```

Controls whether the current page is refreshed after the action completes successfully.

The default is:

```java
true
```

This is useful when the action changes the entity displayed on the page.

For example, after approving an order:

```text
Before:
Status: PENDING

Action:
Approve

After:
Status: APPROVED
```

Refreshing the page allows the updated state and available actions to be displayed immediately.

You can disable the refresh behavior:

```java
refresh = false
```

when the page does not need to be reloaded after execution.

---

# `order`

```java
order = 10
```

Controls the display order of actions.

Lower values appear first.

```java
order = 0
```

appears before:

```java
order = 10
```

which appears before:

```java
order = 20
```

Example:

```java
@KraftAdminCustomAction(
    entityClass = Order.class,
    name = "approve-order",
    label = "Approve",
    order = 1
)
```

```java
@KraftAdminCustomAction(
    entityClass = Order.class,
    name = "refund-order",
    label = "Refund",
    order = 20
)
```

The default order is:

```java
0
```

---

# `permission`

```java
permission = "orders.approve"
```

Specifies an optional permission required to execute the action.

Example:

```java
@KraftAdminCustomAction(
    entityClass = Order.class,
    name = "approve-order",
    label = "Approve",
    permission = "orders.approve"
)
```

The permission value is application-defined.

This allows an application to control access to individual actions separately from general resource access.

For example:

```text
User:
    Can view orders
    Can edit orders
    Cannot approve orders
```

The `approve-order` action can require:

```java
permission = "orders.approve"
```

---

# `group`

```java
group = "Order Management"
```

Groups related actions together in the user interface.

For example:

```java
group = "Order Management"
```

Actions such as:

* Approve
* Cancel
* Refund
* Ship

can be placed into the same group.

This is useful when a resource has many custom actions.

---

# Complete Example

The following example defines several actions for an `Order` entity.

```java
@Component
@Slf4j
public class OrderActions {

    private final OrderService orderService;

    public OrderActions(OrderService orderService) {
        this.orderService = orderService;
    }

    @KraftAdminCustomAction(
        entityClass = Order.class,
        name = "approve-order",
        label = "Approve",
        icon = KraftIcon.ICON_WALLET,
        variant = ActionVariant.SUCCESS,
        confirmMessage =
            "Are you sure you want to approve this order?"
    )
    public KraftActionResponse approve(
        KraftActionContext context
    ) {

        Order order = context.entity();

        if ("CANCELLED".equals(order.getStatus())) {

            return KraftActionResponse
                .fail(
                    "Cannot approve a cancelled order."
                )
                .build();
        }

        orderService.approve(order);

        return KraftActionResponse
            .ok("Order approved.")
            .build();
    }


    @KraftAdminCustomAction(
        entityClass = Order.class,
        name = "cancel-order",
        label = "Cancel",
        icon = KraftIcon.ICON_TRASH,
        variant = ActionVariant.DANGER,
        confirmMessage =
            "Are you sure you want to cancel this order?",
        input = CancellationRequest.class,
        inputTitle = "Cancel Order",
        inputDescription =
            "Please provide a cancellation reason.",
        submitLabel = "Cancel Order",
        cancelLabel = "Close"
    )
    public KraftActionResponse cancel(
        KraftActionContext context
    ) {

        Order order = context.entity();

        CancellationRequest request =
            context.input();

        order.setCancellationReason(
            request.getMessage()
        );

        orderService.cancel(order);

        return KraftActionResponse
            .ok("Order cancelled.")
            .build();
    }


    @KraftAdminCustomAction(
        entityClass = Order.class,
        name = "refund-order",
        label = "Refund",
        icon = KraftIcon.ICON_SHOPPING_CART,
        confirmMessage =
            "Are you sure you want to issue a refund?"
    )
    public KraftActionResponse refund(
        KraftActionContext context
    ) {

        Order order = context.entity();

        orderService.refund(order);

        return KraftActionResponse
            .ok("Refund completed.")
            .build();
    }


    @KraftAdminCustomAction(
        entityClass = Order.class,
        name = "ship-order",
        label = "Ship",
        icon = KraftIcon.ICON_SHIP,
        variant = ActionVariant.PRIMARY,
        confirmMessage =
            "Are you sure you want to ship this order?"
    )
    public KraftActionResponse shipOrder(
        KraftActionContext context
    ) {

        Order order = context.entity();

        orderService.shipOrder(order);

        return KraftActionResponse
            .ok("Order shipped.")
            .build();
    }
}
```

---

# Action Context

Every custom action receives a `KraftActionContext`.

The context provides information about the action execution.

For a single-record action:

```java
Order order = context.entity();
```

For an action with input:

```java
CancellationRequest request =
    context.input();
```

This allows your action method to combine:

* The selected entity
* Additional form input
* The action execution context

without requiring the action method to manually parse HTTP requests.

---

# Recommended Structure

A good custom action should usually:

1. Receive the `KraftActionContext`.
2. Retrieve the selected entity.
3. Validate whether the operation is allowed.
4. Call your application's service layer.
5. Return a `KraftActionResponse`.

```java
public KraftActionResponse approve(
    KraftActionContext context
) {

    Order order = context.entity();

    if (!order.canBeApproved()) {
        return KraftActionResponse
            .fail("This order cannot be approved.")
            .build();
    }

    orderService.approve(order);

    return KraftActionResponse
        .ok("Order approved.")
        .build();
}
```

Keep business logic in your application's services and domain model. The custom action should primarily connect the KraftAdmin interface to that existing business logic.
