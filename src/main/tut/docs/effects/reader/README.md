---
layout: docs
title: Reader
permalink: /docs/effects/reader/
---

## ReaderM

The reader effect allows obtaining values from the environment. The initial seed for the environment value is provided
at runtime interpretation.

The `reader` effect supports parametrization to any seed value type while remaining type safe throughout the program declaration. 

The constrains placed by this effect is that there needs to be an implicit evidence of `MonadReader[M[_], R]` 
for any runtime `M[_]` used in its interpretation. `R` represents the seed value type. 

The reader effect comes with two operations `ask` and `reader`.

### ask

`ask` simply returns the entire environment in its current state.

```tut:book
import freestyle._
import freestyle.implicits._
import freestyle.effects.reader
import cats.data.Reader
import cats.implicits._

case class Config(n: Int)

type ConfigEnv[A] = Reader[Config, A]

val rd = reader[Config]

import rd.implicits._

def programAsk[F[_]: rd.ReaderM] =
  for {
    _ <- 1.pure[FreeS[F, ?]]
    c <- rd.ReaderM[F].ask
    _ <- 1.pure[FreeS[F, ?]]
  } yield c
    
programAsk[rd.ReaderM.Op].exec[ConfigEnv].run(Config(n = 10))
```

### reader

`reader` allows extracting values of the environment and lifting them into the context of `FreeS`

```tut:book
def programReader[F[_]: rd.ReaderM] =
  for {
    a <- 1.pure[FreeS[F, ?]]
    b <- rd.ReaderM[F].reader(_.n)
    c <- 1.pure[FreeS[F, ?]]
  } yield a + b + c
    
programReader[rd.ReaderM.Op].exec[ConfigEnv].run(Config(n = 1))
```
