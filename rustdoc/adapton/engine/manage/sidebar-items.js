initSidebarItems({"fn":[["cnt","Counts various engine cost metrics, returning a product of sums (`Cnt`)"],["engine_is_dcg","True iff the current engine is a `DCG`"],["engine_is_naive","True iff the current engine is `Naive`"],["init_dcg","Initializes global state with a fresh DCG-based engine; returns the old engine. The DCG is the central implementation structure behind Adapton. At a high level, it consists of a data dependence graph (the \"demanded computation graph\"), and an associated memoization table."],["init_engine","alias for `use_engine`"],["init_naive","Initializes global state with a (\"fresh\") Naive engine; returns the old engine. The naive engine is stateless, and performs no memoization and builds no dependence graphs. (Since the naive engine is stateless, every instance of the naive engine is equivalent to a \"fresh\" one)."],["use_engine","Initializes global state with a fresh DCG-based engine; returns the old engine"]]});