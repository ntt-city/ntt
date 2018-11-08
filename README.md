# ntt
Root repository

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
