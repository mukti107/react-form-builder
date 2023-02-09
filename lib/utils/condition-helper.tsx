import { endsWith, every, get, includes, isEmpty, isArray, isBoolean, some, startsWith } from 'lodash';

export type Predicate = '='|'!='|'<'|'>'|'isIn'|'isNotIn'|'contains'|'startsWith'|'endsWith'| 'contains' | 'doesNotContain';

export type ConditionMatchType = 'all'|'none'|'any';

export type SimpleCondition = [string, Predicate, any]

export interface ComplexCondition {
    matchType: ConditionMatchType;
    rules: Condition[];
}

export type Condition =  SimpleCondition | ComplexCondition;

/**
 * 
 * @param {*} object 
 * @param {Array<Condition>} conditions 
 * @param {*} matchType 
 * @returns 
 */
export function checkCondition(object: any, condition: Condition): boolean {
    if(isBoolean(condition)){return condition;}

    if(isArray(condition)){return _checkCondition(object, condition)}

    switch (condition.matchType) {
        case 'none':
            return !some(condition.rules, condition => checkCondition(object, condition))
        case 'any':
            return some(condition.rules, condition => checkCondition(object, condition))
        case 'all':
        default:
            return every(condition.rules, condition => checkCondition(object, condition))
    }
}

function _checkCondition(object: any, condition: SimpleCondition): boolean {
  const [key, predicate, value] = condition;
  const currentValue = get(object, key);
  switch (predicate) {
    case '=':
      return currentValue === value;
    case '!=':
      return currentValue != value;
    case '>':
      return currentValue > value;
    case '<':
      return currentValue < value;
    case 'startsWith':
      return startsWith(currentValue, value);
    case 'endsWith':
      return endsWith(currentValue, value);
    case 'contains':
    case 'isIn':
      return includes(value, currentValue);
    case 'doesNotContain':
    case 'isNotIn':
      return !(includes(value, currentValue));
    default:
      return false
  }
}
