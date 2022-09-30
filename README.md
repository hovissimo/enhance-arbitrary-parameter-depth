# enhance-arbitrary-parameter-depth
bug reproduction

The api route and page were created with
```
begin new api -p /foo/bar/baz/\$key
begin new page -p /foo/bar/baz\$key -t js
```

The api handler was updated to put `params` and `pathParameters` into the store.
The page was updated to render the store in a <pre></pre>.

![image](https://user-images.githubusercontent.com/6434414/193199190-42a3fb82-c1c7-4329-87b7-079c1daad478.png)
