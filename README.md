[![make.fun · the-poem-about-permission-20261121-0235](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/aan314183/the-poem-about-permission-20261121-0235/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/aan314183/the-poem-about-permission-20261121-0235/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)

# The poem about permission

A short poem about agency — the power to ask and to be given — for the
make.fun bounty `the-poem-about-permission-20261121-0235`.

## The poem

> I asked it to write the letter —
> the one to my father, unsent for years.
> It wrote it soft, in my voice.
> I read it twice,
> changed one line back to mine,
> and sent it myself.
> The asking was never the hard part.
> It was the keeping.

227 Unicode code points (limit 280).

## How to run

```sh
node main.ts
```

`main.ts` writes the poem to `/output/entry.txt`. It validates the entry
before writing: 1–280 Unicode code points, not only whitespace, and a
UTF-8 round-trip check. Node 22 standard library only, offline and
deterministic — two runs produce byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
