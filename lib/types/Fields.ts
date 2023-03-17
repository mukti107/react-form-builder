import { FieldSchema } from "./FormSchema";

export type Fields = {[key: FieldSchema['type']]: React.FunctionComponent<any>};

export default Fields;