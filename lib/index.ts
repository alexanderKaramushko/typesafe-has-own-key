/* eslint-disable @typescript-eslint/space-before-function-paren */
/**
 * @description predicate type to confirm that object has key
 */
export default function hasOwnKey
<Keys extends string, Values, Key extends string>
(object: Record<Keys, Values>, key: Key): object is { [K in Key | Keys]: Record<Keys | Key, Values>[K] } {
  return Reflect.ownKeys(object).includes(key);
}
