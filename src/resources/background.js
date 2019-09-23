// in posts.js
import React from 'react';
import { List, Datagrid, FunctionField, Edit, Create, SimpleForm, ImageField, TextField, EditButton, DisabledInput, TextInput, ImageInput, ReferenceInput, ReferenceField, SelectInput } from 'react-admin';
import IconComponent from '@material-ui/icons/Panorama';
import {PointerInput, ImageParseInput} from "../components/inputs";



const ListComponent = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="Nome"/>
            
           <ImageField source="image._url" label = "Foto"/>
            <ReferenceField label="Evento" source="event.id" reference="Event">
                <TextField source="name" label = "Nome"/>
            </ReferenceField>
            <EditButton basePath="/Background" />
        </Datagrid>
    </List>
);

const Title = ({ record }) => {
    return <span>Fundo {record ? `"${record.name}"` : ''}</span>;
};

export const EditComponent = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <DisabledInput source="objectId" />
            <TextInput source="name" label="nome"/>
            <PointerInput label="Evento" source="event" reference="Event">
                <SelectInput optionText="name"/>
            </PointerInput>
            <ImageInput source="image" label="Imagem de fundo" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const CreateComponent = (props) => (
    <Create title="Criar um evento" {...props}>
        <SimpleForm>
        <TextInput source="name" label="Nome"/>
            <PointerInput label="Evento" source="event" reference="Event">
                <SelectInput optionText="name"/>
            </PointerInput>
            <ImageParseInput source="image" label="Imagem de fundo"/>
              
        </SimpleForm>
    </Create>
);

const props = {
    list: ListComponent,
    edit: EditComponent,
    create: CreateComponent,
    icon: IconComponent,
    name: "Background",
    options: {label: "Imagem de fundo"}
};
export default props;