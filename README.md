# Scoped Var
This is a sass library that enables to limit the scope of custom properties(which is called `CSS Variable`) to `:host`.

# Demo
https://nontangent.github.io/angular-scoped-var-demo/

source: https://github.com/nontangent/angular-scoped-var-demo


## Install
```sh
$ npm i -D scoped-var
```

## Usage
### Normal Mode
If you want to let custom properties scoped in `:host`, you should add `@use 'scoped-var' as *;` to the top of `.scss` file.

```scss
@use 'scoped-var' as *;

:host {
  // Define host scoped variable by `@mixin var($name, $value)`
  @include var(--color, red);
}

:host {
  // Use host scoped variable
  color: var(--color);
}
```


The above code will compiled as below.(`@@@@@@@@` is random characters.)

```scss

:host {
  --color: red;
  --color-SCOPED-IN-@@@@@@@@: var(--color);
}

:host {
  color: var(--color-SCOPED-IN-@@@@@@@@);
}
```

In this case, you can override `:host` scoped custom property in `first-child` and `second-child` from `parent` component.

```scss
// parant.component.scss
@use 'scoped-var' as *;

:host {
  @include var(--color, blue);
}

:host {
  first-child {
    --color: #{var(--color)};
  }

  second-child {
    --color: #{var(--color)};
  }
}
```

### Strict Mode

If you use `scoped-var` as non strict mode, this library does not raise error when you use undefined variable in `:host`.


```scss
@use 'scoped-var' as *;

:host {
  color: var(--color);
  // this code is compiled as below. not changed.
  // color: var(--color);
}
```

If you want to prohibit the use of variables that are not defined in the scope, you should use `@use 'scoped-var/strict' as *;`.

```scss
@use 'scoped-var/strict' as *;

:host {
  color: var(--color);
}
```

In this case, you failed to compile and compiler throw following error.

```
SassError: `var(--color)` scoped in `9unvsa3y` is not defined`
```

## LICENSE
MIT