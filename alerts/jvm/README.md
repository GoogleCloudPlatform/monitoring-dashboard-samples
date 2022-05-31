# JVM Alerts for Ops Agent

## Heap Memory Usage Near Max

Alerts on JVM heap memory usage being near maximum. When the JVM reaches its max, depending on JVM configuration could lead to Out of Memory errors.

## JVM Thread Near Limit

The JVM can spin up threads depending on the type of application. This means that this alert requires some more contextual decision-making on the threshold. When the thread count exceeds a limit (whether set by an OS or JVM configuration), then new threads cannot be spun up even if the JVM is well-provisioned.
