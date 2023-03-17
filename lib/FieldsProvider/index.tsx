import React, { useContext, useMemo } from 'react';
import Fields from '../types/Fields';
import FieldsContext from './FieldsContext';

interface FieldsProviderProps {
    fields?: Fields;
    children: React.ReactNode;
}

const FieldsProvider: React.FunctionComponent<FieldsProviderProps> = ({fields, children}) => {

    const defaultFields = useContext(FieldsContext);

    const mergedFields = useMemo(()=>{
        if(!fields) return defaultFields;

        return {
            ...defaultFields,
            ...fields,
        };
    }, [defaultFields, fields]);

    return <FieldsContext.Provider value={mergedFields}>
        {children}
    </FieldsContext.Provider>;
    };

    export default FieldsProvider;