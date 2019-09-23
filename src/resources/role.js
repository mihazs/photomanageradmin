// in posts.js
import React from 'react';
import { List, Datagrid, TextField, ReferenceArrayInput, TextInput, SimpleFormIterator, EditButton } from 'react-admin';

import IconComponent from '@material-ui/icons/AssignmentInd';

const ListComponent = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="Nome" />
            
        </Datagrid>
    </List>
);
const EditComponent = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="Nome" />
            <ReferenceArrayInput label="Usuários" source="users" reference="User">
                <SimpleFormIterator>
                    <TextInput source="username"/>
                </SimpleFormIterator>
            </ReferenceArrayInput>
        </Datagrid>
    </List>
);



const props = {
    list: ListComponent,
    icon: IconComponent,
    edit: EditComponent,
    name: "_Role",
    options: {label: "Cargos"}
};
export default props;