import { Datagrid, DateField, EditButton, EmailField, List, UrlField, TextField, Edit, SimpleForm, TextInput, Create, DateInput  } from 'react-admin';

export const AttractionList = () => (
    <List>
        <Datagrid>
            <TextField source="address1" />
            <TextField source="content.en.banner" />
            <DateField source="created" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="priceAdult" />
            <TextField source="priceChild" />
            <UrlField source="website" />
            <TextField source="id" />
            <EditButton/>
        </Datagrid>
    </List>
);


export const AttractionEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput multiline source="content.en.banner" />
            <DateInput source="created" />
            <TextInput source="address1" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="phone" />
            <TextInput source="priceAdult" />
            <TextInput source="priceChild" />
            <TextInput source="webimages" />
        </SimpleForm>
    </Edit>
);

export const AttractionCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="address1" />
            <TextInput multiline source="content.en.banner" />
            <DateInput source="created" />
            <TextInput source="email" />
            <TextInput source="phone" />
            <TextInput source="priceAdult" />
            <TextInput source="priceChild" />
            <TextInput source="website" />
            <TextInput source="webimages" />
        </SimpleForm>
    </Create>
);