initSidebarItems({"enum":[["Dir2",""],["List",""],["NameElse",""],["Tree",""]],"fn":[["eager_tree_of_tree","Produces a tree with the same structure as its input, but without any articulations.  Useful for `println`-style debugging, and for equality comparisons across distinct engine implementations (e.g., to verify the DCG-based engine)."],["filter_list_of_tree","Filter the leaf elements of a tree using a user-provided predicate, `pred`. Returns a list of the elements for which the predicate returns `true`. Retains exactly one name between any two elements that, in the original sequence, were separated by a name. Does not insert names that were not present in the original sequence."],["filter_tree_of_tree","Filter the leaf elements of a tree using a user-provided predicate, `pred`. Returns a tree of the elements for which the predicate returns `true`. Retains all names from the original tree, even if they merely name empty sub-trees."],["list_append",""],["list_art",""],["list_cons",""],["list_filter_eager","Eagerly filters the list, guided by names in input list. Memoizes recursion for each name in input."],["list_filter_lazy","Lazily filters the list, guided by names in input list. Creates lazy named thunks in output for each name in input."],["list_fold","Ignores names; performs no memoization; use tree_fold_* for lists that could be long."],["list_gen",""],["list_is_empty",""],["list_map_eager","Eagerly maps the list. Uses (eager) memoization for each name in `l`."],["list_map_lazy","Lazily maps the list, guided by names in input list. Creates lazy named thunks in output for each name in input."],["list_merge","Produce a lazy list that consists of merging two input lists. The output is lazy to the extent that the input lists contain `name`s. When the input lists are each sorted according to `Ord`; the output is sorted."],["list_merge_wrapper",""],["list_name",""],["list_nil",""],["list_of_tree","List the leaf elements and names of a tree, in the given order, via a sequential, in-order traversal. Direction `Dir2::Left` lists elements from left to right. (Leftmost elements are in the head of the list). Direction `Dir2::Right` lists elements from right to left. (Rightmost elements are in the head of the list). Preserves the order of elements, up to `dir`, and the names in the tree."],["list_of_vec","Constructs a linked list that consists of elements and names, as given by the input vector (in that order). Not incremental; used only for setting up inputs for tests."],["list_pop",""],["list_push",""],["list_reverse","Eagerly maps the list. Uses (eager) memoization for each name in `l`."],["map_empty",""],["map_find",""],["map_fold",""],["map_update",""],["mergesort_list_of_tree","Demand-driven sort over a tree's leaves, whose elements are `Ord`. To the extent that the tree contains `name`s, the output is lazy, and thus sorts on-demand. Demanding the first element is `O(n)` for a tree with `n` leaves. Demanding the next element requires more comparisons, but fewer than the first element. Demanding the last element requires only `O(1)` comparisons. In total, the number of comparisons to demand the entire output is, as usual, `O(n ° log(n))`."],["mergesort_list_of_tree2","Demand-driven sort over a tree's leaves, whose elements are `Ord`. To the extent that the tree contains `name`s, the output is lazy, and thus sorts on-demand. Demanding the first element is `O(n)` for a tree with `n` leaves. Demanding the next element requires more comparisons, but fewer than the first element. Demanding the last element requires only `O(1)` comparisons. In total, the number of comparisons to demand the entire output is, as usual, `O(n ° log(n))`."],["monoid_of_tree","Aggregates the leaf elements of a tree using a user-defined monoid.  The monoid consists of an identity element `id_elm` and binary operation over leaf values `bin_op`. Derived from `tree_fold_up`."],["prune_tree_of_tree","Produces a tree with the same structure as its input, but without any empty subtrees, and with articulations placed around the subtrees of named binary nodes."],["tree_fold_seq",""],["tree_fold_up","Fold over the structure of the tree, with results flowing up, from `nil` and `leaf` cases to the binary cases of `bin` and `name`. This folding pattern is suitable for aggregating the leaf elements via an associative operation, such as a monoid (e.g., counting, addition, multiplication, maximum, minimum, etc.). See `monoid_of_tree` for a wrapper function that offers this usage. This folding pattern is also suitable for producing copies of the tree's structure."],["tree_fold_up_nm_dn","Like `tree_fold_up`, except that names from `name` nodes are passed down, to the next `nil` and `leaf` cases. The name from a `name` constructor associates to its right subtree, which is consistent with a left-to-right, in-order traversal of the tree. The recursive argument `nm` provides the name for the left subtree, if any."],["tree_of_list",""],["tree_of_list_rec",""],["vec_of_list",""]],"mod":[["raz","Random Access Zipper (RAZ). Purely functional sequences with global access (via a balanced tree structure) and simple local edits (via a zipper structure)."],["trie",""]],"trait":[["Level","Levels for a probabilistically-balanced trees. For more details see Pugh and Teiltelbaum's POPL 1989 paper, and its \"Chunky List\" representation (*Incremental Computation via Function Caching*)."],["ListElim","Types that can be pattern-matched like a list of `X` are `ListElim<X>`. We consider iterators to be a similar (nearly analogous) trait. The key distinction here are that list elimination is a pattern-match used with (pure) recursion, as opposed to an imperative for-loop, as is typical of iteration; further, lists in Adapton contain data (of type `X`) and names (of type `Name`)."],["ListIntro","Types that can be created like a list of `X` are `ListIntro<X>`"],["MapElim",""],["MapIntro",""],["RoseElim","Rose Trees: A tree with arbitrary branching at each node. See also, Definition 2 (page 2) of   *Parallel Implementation of Tree Skeletons*, by D.B. Skillicorn 1995."],["RoseIntro","Rose Trees: A tree with arbitrary branching at each node. See also, Definition 2 (page 2) of   *Parallel Implementation of Tree Skeletons*, by D.B. Skillicorn 1995."],["SetElim",""],["SetIntro",""],["TreeElim",""],["TreeIntro","Types that can be created like a (binary) tree with leaves of type `Leaf` are `TreeIntro<Leaf>`. We recognize that monoids are a nearly-analogous case; the key differences with monoids are that trees contain names (see `name` fn) and articulations (see `art` fn); further, the binary cases `name` and `bin` carry levels of type `Lev`, which helps establish and maintain balance."]]});