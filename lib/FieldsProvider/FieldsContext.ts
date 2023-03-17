import { createContext } from 'react';
import Fields from '../types/Fields';
import fields from './fields/default';

const FieldsContext = createContext<Fields>(fields);

export default FieldsContext;