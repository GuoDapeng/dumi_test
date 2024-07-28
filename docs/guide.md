This is a guide example.

kotlin

```kotlin
fun main() {
    println({ text: String -> text.uppercase() }("hello"))
    // HELLO
}
```

shell

```shell
docker run -d \
  --name nexus \
  --restart=always \
  -p 8081:8081 \
  -p 5000:5000 \
  -v $PWD/nexus-data:/nexus-data \
  sonatype/nexus3

docker exec -it nexus /bin/bash
```
