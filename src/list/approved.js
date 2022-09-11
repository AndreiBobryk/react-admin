import { Datagrid, DateField, EditButton, List, NumberField, TextField, DateInput, Edit, NumberInput, SimpleForm, TextInput, Create, ReferenceField } from 'react-admin';


export const ApprovedList = () => (
    <List>
        <Datagrid>
            <DateField source="date" />
            <TextField source="language" />
            <TextField source="name" />
            <NumberField source="rating" />
            <TextField source="status" />
            <TextField source="text" />
            <TextField source="place" />
            <TextField source="title" />
            <ReferenceField source="attraction" reference="attraction" />
            <EditButton/>
        </Datagrid>
    </List>
);



export const ApprovedEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="attraction" />
            <DateInput disabled source="date" />
            <TextInput source="language" />
            <TextInput source="name" />
            <TextInput source="place" />
            <NumberInput source="rating" />
            <TextInput source="status" />
            <TextInput multiline source="text" />
            <TextInput source="title" />
            <TextInput disabled source="id" />
        </SimpleForm>
    </Edit>
);

export const ApprovedCreate = props => (
    <Create {...props}>
         <SimpleForm>
            <TextInput source="attraction" />
            <DateInput source="date" />
            <TextInput source="language" />
            <TextInput source="name" />
            <TextInput source="place" />
            <NumberInput source="rating" />
            <TextInput source="status" />
            <TextInput multiline source="text" />
            <TextInput source="title" />
            </SimpleForm>
    </Create>
)