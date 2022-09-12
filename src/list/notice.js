import { Datagrid, DateField, EditButton, List, ReferenceField, TextField, DateInput, Edit, ReferenceInput, SimpleForm, TextInput, Create  } from 'react-admin';

export const NoticeList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="attraction" reference ="attraction" />
            <DateField source="endDate" />
            <DateField source="startDate" />
            <TextField source="status" />
            <TextField source="content.en.text" />
            <TextField source="id" />
            <EditButton/>
        </Datagrid>
    </List>
);


export const NoticeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="attraction" />
            <DateInput source="endDate" />
            <DateInput source="startDate" />
            <TextInput source="status" />
            <TextInput multiline source="content.en.text" />
            <TextInput disabled source="id" />
        </SimpleForm>
    </Edit>
);
export const NoticeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="attraction" reference ="attraction"  />
            <DateInput source="endDate" />
            <DateInput source="startDate" />
            <TextInput source="status" />
            <TextInput multiline source="content.en.text" />
        </SimpleForm>
    </Create>
);