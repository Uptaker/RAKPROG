import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from './pages/Posts';
import './scss/App.scss'
import CustomHeader from './components/CustomHeader';
import CustomFooter from './components/CustomFooter';
import { Layout } from 'antd';
import Register from './pages/Register';
import Login from './pages/Login';
import EditPost from './pages/EditPost';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
    <Layout>

      <Header>
        <Route path="/" component={CustomHeader} />
      </Header>

      <Content>
        <Switch>
          <Route exact path="/" component={ShowMagic} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/posts/edit" component={EditPost} />
        </Switch>
      </Content>

      <Footer>
        <Route path="/" component={CustomFooter} />
      </Footer>

    </Layout>
    </BrowserRouter>
  )
}

export default App;
