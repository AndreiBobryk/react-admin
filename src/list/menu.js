import {
  BooleanField,
  Datagrid,
  EditButton,
  List,
  TextField,
  BooleanInput,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

export const MenuList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="content.en.title" />
      <BooleanField source="footer" />
      <TextField source="link" />
      <BooleanField source="menu" />
      <TextField source="order" />
      <TextField source="type" />
      <TextField source="id" />
      <EditButton />
    </Datagrid>
  </List>
);

export const MenuEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="content.en.title" />
      <BooleanInput source="footer" />
      <TextInput source="link" />
      <BooleanInput source="menu" />
      <TextInput source="order" />
      <TextInput source="type" />
      <TextInput disabled source="id" />
    </SimpleForm>
  </Edit>
);

export const MenuCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="content.en.title" />
      <BooleanInput source="footer" />
      <TextInput source="link" />
      <BooleanInput source="menu" />
      <TextInput source="order" />
      <TextInput source="type" />
      <TextInput disabled source="id" />
    </SimpleForm>
  </Create>
);
