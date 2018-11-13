# ntt

nnt is the root repository to something very cool.

![clean code](https://blog.cleancoder.com/assets/clean_code_72_color.png)

# [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
![architecture](https://blog.cleancoder.com/assets/clean_code_72_color.png)

## [Functional Programming and Immutability](https://blog.cleancoder.com/uncle-bob/2017/07/11/PragmaticFunctionalProgramming.html)

* FP is easier to write, easier to read, easier to test, and easier to understand.
* FP makes concurrency much safer.

__Homoiconic__: the code is data that the program can manipulate.

A function in Java is like f(x), to turn this into a function in Lisp or Clojure, you simply move the first parenthesis to the left: (f x).

this is a Clojure code:
```
(deftype Gateway-imp [db]
  Gateway
  (get-internal-episodes [this]
    (internal-episodes db))

  (get-public-episodes [this]
    (public-episodes db)))
```

The following code: (1 2 3) represents a list of three integers. If the first element of a list happens to be a function, as in: (f 2 3) then it becomes a function call. Thus, all function calls in Clojure are lists; and lists can be directly manipulated by the code. Thus, a program can construct and execute other programs.

Clojure targets Java and [ClojureScript](https://clojure.org/about/clojurescript) targets JavaScript.

## Sub-module initialization
```
git submodule add https://github.com/ntt-city/ntt-flow.git
git submodule add https://github.com/ntt-city/ntt-hub.git
git submodule add https://github.com/ntt-city/ntt-pod.git
git submodule add https://github.com/ntt-city/ntt-view.git

git submodule update --init
```

## Commit submodule
```
git commit ./submodule -m "Added submodule as ./subm"
```

## Commit all submodules
```
git submodule foreach git commit --amend
```

## Push everything in one go
```
git push --recurse-submodules=on-demand
```
or
```
git submodule foreach git push -u origin master
```

## Current status

```
git submodule status --recursive
```
