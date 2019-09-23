// in posts.js
import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

import IconComponent from '@material-ui/icons/Translate';

const ListComponent = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="code" label="Código" />
        </Datagrid>
    </List>
);



const props = {
    list: ListComponent,
    icon: IconComponent,
    name: "Language",
    options: {label: "Linguagem"}
};
export default props;