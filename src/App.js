// import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import * as React from "react";
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { NewsList, NewsEdit, NewsCreate } from "./news";
import { AttractionList, AttractionEdit, AttractionCreate } from "./attractions";
// import  dataProvider from "./dataProvider"

// require('dotenv').config()
// console.log(process.env)


const dataProvider = jsonServerProvider("http://localhost:8080");
// console.log('dataProvider', dataProvider.getList("attraction", {}).then(data=>console.log('data', data)))

const App = () => (
<Admin dataProvider={dataProvider} >
   <Resource name="news" list={NewsList} edit={ NewsEdit } create ={ NewsCreate }/>               
   <Resource name="attraction" list={AttractionList} edit={AttractionEdit} create={AttractionCreate} />               
</Admin>);

export default App;
