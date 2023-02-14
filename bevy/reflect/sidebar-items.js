window.SIDEBAR_ITEMS = {"attr":[["reflect_trait",""]],"derive":[["FromReflect","Derives the `FromReflect` trait."],["Reflect",""],["TypeUuid",""]],"enum":[["DynamicVariant","A dynamic representation of an enum variant."],["ReflectMut","A mutable enumeration of “kinds” of reflected type."],["ReflectOwned","An owned enumeration of “kinds” of reflected type."],["ReflectPathError","An error returned from a failed path string query."],["ReflectRef","An immutable enumeration of “kinds” of reflected type."],["TypeInfo","Compile-time type information for various reflected types."],["VariantField",""],["VariantInfo","A container for compile-time enum variant info."],["VariantType","Describes the form of an enum variant."]],"fn":[["array_apply","Applies the reflected array data to the given array."],["array_debug","The default debug formatter for [`Array`] types."],["array_hash","Returns the `u64` hash of the given array."],["array_partial_eq","Compares two arrays (one concrete and one reflected) to see if they are equal."],["enum_debug","The default debug formatter for [`Enum`] types."],["enum_hash","Returns the `u64` hash of the given enum."],["enum_partial_eq","Compares an [`Enum`] with a [`Reflect`] value."],["list_apply","Applies the elements of `b` to the corresponding elements of `a`."],["list_debug","The default debug formatter for [`List`] types."],["list_hash","Returns the `u64` hash of the given list."],["list_partial_eq","Compares a [`List`] with a [`Reflect`] value."],["map_apply","Applies the elements of reflected map `b` to the corresponding elements of map `a`."],["map_debug","The default debug formatter for [`Map`] types."],["map_partial_eq","Compares a [`Map`] with a [`Reflect`] value."],["struct_debug","The default debug formatter for [`Struct`] types."],["struct_partial_eq","Compares a [`Struct`] with a [`Reflect`] value."],["tuple_apply","Applies the elements of `b` to the corresponding elements of `a`."],["tuple_debug","The default debug formatter for [`Tuple`] types."],["tuple_partial_eq","Compares a [`Tuple`] with a [`Reflect`] value."],["tuple_struct_debug","The default debug formatter for [`TupleStruct`] types."],["tuple_struct_partial_eq","Compares a [`TupleStruct`] with a [`Reflect`] value."]],"macro":[["impl_from_reflect_value",""],["impl_reflect_struct","A replacement for `#[derive(Reflect)]` to be used with foreign types which the definitions of cannot be altered."],["impl_reflect_value",""]],"mod":[["erased_serde","github crates-io docs-rs"],["prelude",""],["serde",""],["std_traits",""],["utility","Helpers for working with Bevy reflection."]],"struct":[["ArrayInfo","A container for compile-time array info."],["ArrayIter","An iterator over an [`Array`]."],["DynamicArray","A fixed-size list of reflected values."],["DynamicEnum","A dynamic representation of an enum."],["DynamicInfo","A container for compile-time info related to Bevy’s dynamic types, including primitives."],["DynamicList","A list of reflected values."],["DynamicMap","An ordered mapping between reflected values."],["DynamicStruct","A struct type which allows fields to be added at runtime."],["DynamicTuple","A tuple which allows fields to be added at runtime."],["DynamicTupleStruct","A tuple struct which allows fields to be added at runtime."],["EnumInfo","A container for compile-time enum info, used by `TypeInfo`."],["FieldIter","An iterator over the field values of a struct."],["ListInfo","A container for compile-time list info."],["ListIter","An iterator over an [`List`]."],["MapInfo","A container for compile-time map info."],["MapIter","An iterator over the key-value pairs of a [`Map`]."],["NamedField","The named field of a reflected struct."],["ParsedPath","A pre-parsed path to an element within a type."],["ReflectDeserialize","A struct used to deserialize reflected instances of a type."],["ReflectFromPtr","[`Reflect`] values are commonly used in situations where the actual types of values are not known at runtime. In such situations you might have access to a `*const ()` pointer that you know implements [`Reflect`], but have no way of turning it into a `&dyn Reflect`."],["ReflectFromReflect","Type data that represents the [`FromReflect`] trait and allows it to be used dynamically."],["ReflectHasher","A `Hasher` for hashing an arbitrary stream of bytes."],["ReflectSerialize","A struct used to serialize reflected instances of a type."],["StructInfo","A container for compile-time struct info."],["StructVariantInfo","Type info for struct variants."],["TupleFieldIter","An iterator over the field values of a tuple."],["TupleInfo","A container for compile-time tuple info."],["TupleStructFieldIter","An iterator over the field values of a tuple struct."],["TupleStructInfo","A container for compile-time tuple struct info."],["TupleVariantInfo","Type info for tuple variants."],["TypeRegistration","A record of data about a type."],["TypeRegistry","A synchronized wrapper around a [`TypeRegistry`]."],["TypeRegistryArc","A synchronized wrapper around a [`TypeRegistry`]."],["TypeRegistryInternal","A registry of reflected types."],["UnitVariantInfo","Type info for unit variants."],["UnnamedField","The unnamed field of a reflected tuple or tuple struct."],["Uuid","A Universally Unique Identifier (UUID)."],["ValueInfo","A container for compile-time info related to general value types, including primitives."],["VariantFieldIter","An iterator over the fields in the current enum variant."]],"trait":[["Array","A static-sized array of [`Reflect`] items."],["Enum","A trait representing a reflected enum."],["FromReflect","A trait for types which can be constructed from a reflected type."],["FromType","Trait used to generate [`TypeData`] for trait reflection."],["GetField","A convenience trait which combines fetching and downcasting of struct fields."],["GetPath","A trait which allows nested [`Reflect`] values to be retrieved with path strings."],["GetTupleField","A convenience trait which combines fetching and downcasting of tuple fields."],["GetTupleStructField","A convenience trait which combines fetching and downcasting of tuple struct fields."],["GetTypeRegistration","A trait which allows a type to generate its [`TypeRegistration`]."],["List","An ordered, mutable list of [Reflect] items. This corresponds to types like [`std::vec::Vec`]."],["Map","An ordered mapping between [`Reflect`] values."],["Reflect","A reflected Rust type."],["Struct","A reflected Rust regular struct type."],["Tuple","A reflected Rust tuple."],["TupleStruct","A reflected Rust tuple struct."],["TypeData","A trait for types generated by the `#[reflect_trait]` attribute macro."],["TypeUuid","A trait for types with a statically associated UUID."],["TypeUuidDynamic","A trait for types with an associated UUID."],["Typed","A static accessor to compile-time type information."]]};