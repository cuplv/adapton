initSidebarItems({"enum":[["ArtIdChoice","An `ArtIdChoice` choses between `Eager`, `Structural` and `Nominal` identities for articulation points introduced by `thunk`."],["Engine","The engine API works in two modes: `Naive` and `DCG`. A `Naive` engine is stateless, whereas the `DCG` is stateful."]],"fn":[["cell","Creates a named reference cell (an eager `Art<_>`) whose content can change over time."],["force","Demands and observes the value of an `&Art<T>`, returning a (cloned) value of type `T`."],["name_fork","Create two names from one"],["name_fork3","Create three names from one"],["name_fork4","Create four names from one"],["name_of_isize","Create a name from a `isize`"],["name_of_str","Create a name from a `str`"],["name_of_string","Create a name from a `string`"],["name_of_usize","Create a name from a `usize`"],["name_pair","Create one name from two (binary name composition)"],["name_unit","Create a name from unit, that is, create a \"leaf\" name."],["ns","Creates or re-enters a given namespace; performs the given computation there."],["put","Creates an unnamed, immutable reference cell (an eager `Art<_>`) whose content may not change over time."],["set","Mutates a mutable articulation."],["structural","Enters a special \"namespace\" where all name uses are ignored; instead, Adapton uses structural identity."],["thunk","Allocates a thunk, an `Art<T>` that consists of a suspended computation that produces a value of type `T`."]],"mod":[["manage","Operations that monitor and alter the active engine.  Incremental applications should not use these operations directly."],["reflect","Reflects the DCG engine, including both the effects of the programs running in it, and the internal effects of the engine cleaning and dirtying the DCG.  For the latter effects, see the `trace` module."]],"struct":[["Art","*Articulations:* for incrementally-changing data/computation."],["Cnt","*Engine Counts*: Metrics that reflect the time and space costs of the engine."],["DCG","*(DCG) Demanded Computation Graph*: The cache of past computation."],["Flags","Flags control runtime behavior of the DCG."],["Name","*Names*: First-class data that identifies a mutable cell (see `cell`) or a thunk (see `thunk`).  When a name identifies different content over time, it describes *where* incremental changing is occurring, relative to other (unaffected) parts of data structures or computations."]]});