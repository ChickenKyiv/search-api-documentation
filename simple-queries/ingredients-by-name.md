# Ingredients By Name

## Ingredients By Name

This ingredients was not attached to recipes. But still have data stored.

```text
Asparagus
Carrots
Celery
```

[http://localhost:3000/api/ingredient?filter\[where\]\[name\]=Asparagus](http://localhost:3000/api/ingredient?filter[where][name]=Asparagus)

[http://localhost:3000/api/ingredient?filter\[where\]\[name\]=Carrots](http://localhost:3000/api/ingredient?filter[where][name]=Carrots)

[http://localhost:3000/api/ingredient?filter\[where\]\[name\]=Carrots](http://localhost:3000/api/ingredient?filter[where][name]=Celery)

This 3 URLs not working

This ingredients attached to different recipes\(OR NOT\)

```text
scallions
apple
banana
beef roast
black pepper
```

```text
Black Pepper
apple
sugar
water
mozarella cheese
Potatoes
scallions
```

By searching one of this ingredient, server will return at least 2 recipes\(Single Ingredient mention\).

URL = "black pepper"

Return

#### Case 2

We're using a few ingredients

```text
Apple
Grapes
```

URL = "black pepper"

Return

#### Case 3

