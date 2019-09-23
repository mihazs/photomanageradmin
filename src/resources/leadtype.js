// in posts.js
import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, DisabledInput, TextInput } from 'react-admin';

import IconComponent from '@material-ui/icons/Face';

const ListComponent = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="nome"/>
            <EditButton basePath="/LeadType" />
        </Datagrid>
    </List>
);

const Title = ({ record }) => {
    return <span>Tipo de lead {record ? `"${record.name}"` : ''}</span>;
};

export const EditComponent = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <DisabledInput source="objectId" />
            <TextInput source="name" label="nome"/>
        </SimpleForm>
    </Edit>
);

export const CreateComponent = (props) => (
    <Create title="Criar um tipo de lead" {...props}>
        <SimpleForm>
            <TextInput source="name" label="nome"/>
        </SimpleForm>
    </Create>
);

const props = {
    list: ListComponent,
    edit: EditComponent,
    create: CreateComponent,
    icon: IconComponent,
    name: "LeadType",
    options: {label: "Tipo de Lead"}
};
export default props;