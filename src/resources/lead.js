import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
import IconComponent from '@material-ui/icons/Accessibility';

const ListComponent = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="Nome" />
            <TextField source="phone" label="Telefone" />
            <TextField source="email" label="E-mail" />
            <ReferenceField label="Tipo" source="type" reference="LeadType">
                <TextField source="name" label = "Nome"/>
            </ReferenceField>
        </Datagrid>
    </List>
);


const props = {
    list: ListComponent,
    icon: IconComponent,
    name: "Lead",
};
export default props;