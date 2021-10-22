import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from './pages/Posts';
import './scss/App.scss'
import CustomHeader from './components/CustomHeader';
import CustomFooter from './components/CustomFooter';
import { Layout } from 'antd';
import ShowPosts from './pages/ShowPosts';
import Register from './pages/Register';
import Login from './pages/Login';

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
          <Route exact path="/posts/show" component={ShowPosts} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
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
