## The Typescript utility to typesafely check object keys

### Consider this start code

```ts
type Response = {
  name: 'name-1' | 'name-2';
};

const responses: Response[] = [
  {
    name: 'name-1',
  },
  {
    name: 'name-2',
  },
];

const mapResponses = {
  'name-1': 1,
};
```

### Problem, try map responses for client

```ts
responses.map((response) => {
  if (response.name in mapResponses) {
    // ooops, in-guard doesn't work cause response.name is dynamic!
    return mapResponses[response.name];
  }

  return response;
});
```

### Solution, use the hasOwnKey predicate function

```ts
import hasOwnKey from 'has-own-key';

responses.map((response) => {
  if (hasOwnKey(mapResponses, response.name)) {
    // now it works!
    return mapResponses[response.name];
  }

  return response;
});
```
