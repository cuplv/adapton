initSidebarItems({"enum":[["ArtContent","The content of an articulation: Either a cell holding a value, or a thunk that has optionally produced a value."],["Const","Primitive constants"],["Effect","Reflected version of `engine::Effect`"],["Node","Reflected version of `engine::Node`.  Unlike the real engine, these nodes are not parameterized by a value type.  Instead, their values are all reflected into type `Val`."],["Val","Reflected value; Gives a syntax for inductive data type constructors (`Constr`), named articulations (`Art`) and primitive data (`Data`).  All values in the engine (including the values of nodes, and the values stored on edges) are represented with this reflected `Val` type.  Primarily, this distinction between actual Rust values and this type is what makes the DCG engine \"reflected\" by the definitions in this module, and not identical to them."]],"fn":[["dcg_reflect_begin","Begin recording (reflections of) DCG effects.  See `dcg_reflect_end()`."],["dcg_reflect_end","Stop recording (reflections of) DCG effects, and return them as a forrest (of DCG traces).  See `dcg_reflect_begin()`."],["dcg_reflect_now","Reflect the DCG's internal structure now.  Does not reflect any engine effects over this DCG (e.g., no cleaning or dirtying), just the program effects recorded by the DCG's structure. Returns None if the engine is `Naive` and thus has no reflected state whatsoever."],["preds_of_node","Get the `Pred`s of a `Node`, if they are defined."],["reflect_val","Rust data and articulation reflection: Transform any(*) Rust data that derives `Debug` into a reflected `Val`.  "],["string_of_loc","See doc for `write_loc`. Returns this output as a string."],["string_of_name","See doc for `write_name`. Returns this output as a string."],["string_of_path","See doc for `write_path`. Returns this output as a string."],["succs_of_node","Get the `Succ`s of a `Node`, if they are defined."],["write_loc","Write a concise human-readable version of the location (not the verbose, machine-parsable `Debug` version).  "],["write_name","Write a concise human-readable version of the name (not the verbose, machine-parsable `Debug` version)."],["write_path","Write a concise human-readable version of the path (not the verbose, machine-parsable `Debug` version)."]],"mod":[["trace","Gives effects and traces for cleaning and dirtying, the engine's internal DCG traversal/processing.  By contrast, the enclosing module (`reflect`) only gives reflected versions of the DCG itself, not changes that the engine makes to it."]],"struct":[["CompNode","Reflected version of `engine::CompNode`.  Stores a reflected value of type `Option<Val>`, which is `None` when the node has not yet been executed, and `Some(_)` otherwise."],["DCG","Reflected version of `engine::DCG`."],["Frame","Reflected version of `engine::Frame`."],["Loc","Reflected version of `engine::Loc` A `Loc` is a particular template for a `Name`: It is a path (a possibly-empty list of `Name`s), followed by a distinguished `Name`.  A `Loc` can be thought of roughly like a file path in UNIX (but Adapton has nothing to do with files, or with UNIX, directly)."],["Pred","Reflected version of `engine::Pred`"],["PureNode","Reflected version of `engine::PureNode`.  Stores a reflected value of type `Val`."],["RefNode","Reflected version of `engine::MutNode`.  Stores a reflected value of type `Val`."],["Succ","Reflected version of `engine::Succ`.  Unlike the real engine's `Succ` type, this version stores a reflected value (of type `Val`)."]],"trait":[["Reflect","This trait consists of the ability for a reference to `Self` to produce a `T`.  Conceptually, that value of type T is the \"reflection\" of `Self`.  A large set of types in `engine` implement this trait for a particular type in this module, which represents its reflection.  The documentation of this module makes this correspondance clear."]],"type":[["Path","A `Path` here is just a `Vec` of `Name`s"]]});