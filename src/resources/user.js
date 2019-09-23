// in posts.js
import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, DisabledInput, TextInput, ReferenceInput, SelectInput } from 'react-admin';

import IconComponent from '@material-ui/icons/AccountCircle';

const ListComponent = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="username" />
            <EditButton basePath="/user" />
        </Datagrid>
    </List>
);

const Title = ({ record }) => {
    return <span>Usuário {record ? `"${record.username}"` : ''}</span>;
};

export const EditComponent = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <DisabledInput source="objectId" />
            <TextInput source="username" />
            <TextInput source="password" type="password"  />
        </SimpleForm>
    </Edit>
);

export const CreateComponent = (props) => (
    <Create title="Criar um usuário" {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="password" type="password"  />

        </SimpleForm>
    </Create>
);

const props = {
    list: ListComponent,
    edit: EditComponent,
    create: CreateComponent,
    icon: IconComponent,
    name: "User",
    options: {label: "Usuários"}
};
export default props;