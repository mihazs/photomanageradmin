// in posts.js
import React from 'react';
import { List, Datagrid, FunctionField, ChipField, SingleFieldList, Edit, SelectInput, Create, SimpleForm, TextField, EditButton, DisabledInput, TextInput, ReferenceInput, ReferenceField } from 'react-admin';
import {PointerInput} from "../components/inputs";
import IconComponent from '@material-ui/icons/AccountCircle';
/*const ReferencePointerField = ({ source, record = {} }) => ();*/

const ListComponent = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="Nome"/>
            <ReferenceField label="Linguagem" source="language.id" reference="Language">
                <TextField source="code" />
            </ReferenceField>
            <EditButton basePath="/Event" />
        </Datagrid>
    </List>
);

const Title = ({ record }) => {
    return <span>Evento {record ? `"${record.name}"` : ''}</span>;
};

export const EditComponent = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <DisabledInput source="objectId" />
            <TextInput source="name" label="Nome"/>
            <PointerInput label="Linguagem" source="language" reference="Language">
                <SelectInput optionText="code"/>
            </PointerInput>
        </SimpleForm>
    </Edit>
);

export const CreateComponent = (props) => (
    <Create title="Criar um evento" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nome"/>
            <PointerInput label="Linguagem" source="language" reference="Language">
                <SelectInput optionText="code" />
                </PointerInput>
        </SimpleForm>
    </Create>
);

const props = {
    list: ListComponent,
    edit: EditComponent,
    create: CreateComponent,
    icon: IconComponent,
    name: "Event",
    options: {label: "Evento"}
};
export default props;