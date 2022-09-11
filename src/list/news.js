import { BooleanField, Datagrid, DateField, List, TextField, UrlField,  BooleanInput, DateInput, Edit, SimpleForm, TextInput, EditButton, Create } from 'react-admin';

export const NewsList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <DateField source="publishedOnHomePage" />
            <BooleanField source="displayOnHomePage" />
            <DateField source="datePublished" />
            <TextField source="content.en.text" />
            <TextField source="status" />
            <UrlField source="url" />
            <EditButton/>
        </Datagrid>
    </List>
);


export const NewsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput multiline source="content.en.text" />
            <BooleanInput source="displayOnHomePage" />
            <DateInput source="publishedOnHomePage" />
            <TextInput source="url" />
        </SimpleForm>
    </Edit>
);

export const NewsCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="content.en.text" />
            <DateInput source="dateCreated" />
            <DateInput source="datePublished" />
            <BooleanInput source="displayOnHomePage" />
            <TextInput source="images" />
            <DateInput source="publishedOnHomePage" />
            <TextInput source="status" />
            <TextInput source="url" />
            <TextInput source="webImages" />
        </SimpleForm>
    </Create>
)

