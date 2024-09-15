# Tips

## Clean Up local git branches

```bash
git branch --merged | egrep -v "(^\*|main|uat|dev)" | xargs git branch -d
```

## Environment Branch VS Release Branch

- Environment Branch -> Mainly for internal project

- Release Branch -> Mainly for open-to-download project

More details -> this [link](https://youtu.be/ZJuUz5jWb44)
