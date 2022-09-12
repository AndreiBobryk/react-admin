// import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import * as React from "react";
import { Admin, EditGuesser, ListGuesser, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { NewsList, NewsEdit, NewsCreate } from "./list/news";
import { AttractionList, AttractionEdit, AttractionCreate } from "./list/attractions";
import { ApprovedCreate, ApprovedEdit, ApprovedList } from "./list/approved";
import { CardCreate, CardEdit, CardList } from "./list/cards";
import { MenuCreate, MenuEdit, MenuList } from "./list/menu";
import { NoticeCreate, NoticeEdit, NoticeList } from "./list/notice";

// import  dataProvider from "./dataProvider"

// require('dotenv').config()
// console.log(process.env)


const dataProvider = jsonServerProvider("http://localhost:8080");
// console.log('dataProvider', dataProvider.getList("attraction", {}).then(data=>console.log('data', data)))

const App = () => (
<Admin dataProvider={dataProvider} >
   <Resource name="news" list={NewsList} edit={ NewsEdit } create ={ NewsCreate }/>               
   <Resource name="attraction" list={AttractionList} edit={ AttractionEdit } create={AttractionCreate} recordRepresentation="address1" />               
   <Resource name="approved" list={ ApprovedList }  edit={ApprovedEdit} create={ApprovedCreate}/>               
   <Resource name="card" list={ CardList }  edit={ CardEdit } create={ CardCreate }/>               
   <Resource name="menu" list={ MenuList }  edit={ MenuEdit } create={ MenuCreate }/>               
   <Resource name="notice" list={ NoticeList }  edit={ NoticeEdit } create={ NoticeCreate }/>               
</Admin>);

export default App;
