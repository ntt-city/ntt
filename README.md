# ntt

ntt is the root repository to something very cool.

![clean code](https://blog.cleancoder.com/assets/clean_code_72_color.png)

# [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
![architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

## [Functional Programming and Immutability](https://blog.cleancoder.com/uncle-bob/2017/07/11/PragmaticFunctionalProgramming.html)

* FP is easier to write, easier to read, easier to test, and easier to understand.
* FP makes concurrency much safer.

__Homoiconic__: the code is data that the program can manipulate.

A function in Java is like f(x), to turn this into a function in Lisp or Clojure, you simply move the first parenthesis to the left: (f x).

this is a Clojure interface definition:

```
(defprotocol Gateway
  (get-internal-episodes [this])
  (get-public-episodes [this]))
```

in TypeScript it would look like this:

```
public interface Gateway {
	getInternalEpisodes: () => Array<Episode>;
	getPublicEpisodes: () => Array<Episode>;
}
```

The following code: (1 2 3) represents a list of three integers. If the first element of a list happens to be a function, as in: (f 2 3) then it becomes a function call. Thus, all function calls in Clojure are lists; and lists can be directly manipulated by the code. Thus, a program can construct and execute other programs.

Clojure targets Java and [ClojureScript](https://clojure.org/about/clojurescript) targets JavaScript.

### ClojureScript vs TypeScript

TypeScript is also one of the few technologies created at Microsoft and then adopted by Google (for Angular), giving it unified endorsement and respect and securing it’s long term place in client-side dev.
TypeScript feels like a natural evolution of JavaScript, it’s not just another client-side technology that will be gone in two years.
ClojureScript has a significant following and more so than the average fleeting client-side new tech. Yes it has endorsement by Google, etc.. but it’s a niche.
As soon as the masses discover the niche limitations, it will be too late and hundreds of thousands of lines of code written with it will be out there to be maintained.
TypeScript isn’t.

### Clojure Notation in Typescript.

[what, ...how]

['interface', 'Gateway', ['get-internal-episodes'], ['get-public-episodes']]

# Testing

Dijkstra said it long, long ago. "Testing shows the presence, not the absence of bugs." To paraphrase: Experiments can only disprove, never prove, a theory.” And yet every day we are willing to bet our lives on those unproven theories of Newton, Einstein, Maxwell, and Boltzmann. If experiments are good enough for science, why aren’t unit tests good enough for software?


# Using this module

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
