import React from 'react';
import { List, Datagrid, Edit, SimpleForm, ImageField, TextField, EditButton, DisabledInput, ImageInput, ReferenceField, Show, SimpleShowLayout } from 'react-admin';
import IconComponent from '@material-ui/icons/CameraAlt';
import {PointerInput, ImageParseInput} from "../components/inputs";

const ListComponent = (props) => (
    <List {...props}>
        <Datagrid>
            <ReferenceField label="Lead" source="language.id" reference="Lead">
                <TextField source="name" label = "Nome"/>
            </ReferenceField>
            <ReferenceField label="Fundo" source="background.id" reference="Background">
                <TextField source="name" label = "Nome"/>
                <ImageField source="image._url" label = "Imagem"/>
            </ReferenceField>
            <ImageField source="image._url" label = "Foto"/>
            <EditButton basePath="/Photograph" />
        </Datagrid>
    </List>
);

const Title = () => {
    return <span>Fotografia</span>;
};
export const ShowComponent = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
        <ReferenceField label="Lead" source="language.id" reference="Lead">
                <TextField source="name" label = "Nome"/>
            </ReferenceField>
            <ReferenceField label="Fundo" source="background.id" reference="Background">
                <TextField source="name" label = "Nome"/>
                <ImageField source="image._url" label = "Imagem"/>
            </ReferenceField>
            <ImageField source="image._url" label = "Foto"/>
        </SimpleShowLayout>
    </Show>
);

export const EditComponent = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <DisabledInput source="objectId" />
            <ImageParseInput source="image" label="foto"/>

        </SimpleForm>
    </Edit>
);

const props = {
    list: ListComponent,
    edit: EditComponent,
    icon: IconComponent,
    show: ShowComponent,
    name: "Photograph",
    options: {label: "Fotografia"}
};
export default props;