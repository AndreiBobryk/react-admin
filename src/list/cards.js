import {
  Datagrid,
  DateField,
  EditButton,
  EmailField,
  List,
  NumberField,
  TextField,
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

export const CardList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="place" />
      <NumberField source="rating" />
      <TextField source="status" />
      <TextField source="text" />
      <DateField source="date" />
      <EmailField source="email" />
      <TextField source="language" />
      <TextField source="type" />
      <EditButton />
    </Datagrid>
  </List>
);

export const CardEdit = () => (
  <Edit>
    <SimpleForm>
      <DateInput source="date" />
      <TextInput source="email" />
      <TextInput source="language" />
      <TextInput source="name" />
      <TextInput source="place" />
      <NumberInput source="rating" />
      <TextInput source="status" />
      <TextInput multiline source="text" />
      <TextInput source="title" />
      <TextInput source="type" />
      <TextInput disabled source="id" />
    </SimpleForm>
  </Edit>
);

export const CardCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DateInput source="date" />
      <TextInput source="email" />
      <TextInput source="language" />
      <TextInput source="name" />
      <TextInput source="place" />
      <NumberInput source="rating" />
      <TextInput source="status" />
      <TextInput multiline source="text" />
      <TextInput source="title" />
      <TextInput source="type" />
    </SimpleForm>
  </Create>
);
