import { createBrowserRouter } from "react-router-dom";
import ListingTools from "../component/ListingTools/ListingTools";
import Main from "../Layout/Main";
import About from "./../component/About/About";
import Home from "./../component/Home/Home";
import Product from "./../component/product/product";
import SignIn from "../component/SignInUp/SignIn/SignIn";
import Login from "../component/SignInUp/Login/Login";
import AuthPage from "../component/SignInUp/AuthPage";
import AddAITools from "../component/Home/AddAITools/AddAITools";
import Community from "../component/Community/Community/Community";
import CommunityPost from "../component/Community/CommunityPost/CommunityPost";
import CommunitySection from "../Layout/CommunitySection";
import Advertise from "./../component/Advertise/Advertise/Advertise";
import AddSection from "../Layout/AddSection";
import AdvertisePost from "../component/Advertise/AdvertisePost/AdvertisePost";
import AdvertisementStats from "../component/Advertise/AdvertisementStats/AdvertisementStats";
import BlogSection from "../Layout/BlogSection";
import Blog from "../component/Blog/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Main></Main>
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <div>
            <Home></Home>
          </div>
        ),
      },
      {
        path: "/about",
        element: (
          <div>
            <About></About>
          </div>
        ),
      },
      {
        path: "/tools",
        element: (
          <div>
            <ListingTools></ListingTools>
          </div>
        ),
      },
      {
        path: "/product",
        element: (
          <div>
            <Product></Product>
          </div>
        ),
      },
      {
        path: "/signIn",
        element: (
          <div>
            <AuthPage></AuthPage>
          </div>
        ),
      },
      {
        path: "/addTools",
        element: (
          <div>
            <AddAITools></AddAITools>
          </div>
        ),
      },
    ],
  },
  {
    path: "/community",
    element: (
      <div>
        <CommunitySection></CommunitySection>
      </div>
    ),
    children: [
      {
        path: "/community",
        element: (
          <div>
            <Community></Community>
          </div>
        ),
      },
      {
        path: "/community/post",
        element: (
          <div>
            <CommunityPost></CommunityPost>
          </div>
        ),
      },
    ],
  },
  {
    path: "/advertise",
    element: (
      <div>
        <AddSection></AddSection>
      </div>
    ),
    children: [
      {
        path: "/advertise",
        element: (
          <div>
            <Advertise></Advertise>
          </div>
        ),
      },
      {
        path: "/advertise/post",
        element: (
          <div>
            <AdvertisePost></AdvertisePost>
          </div>
        ),
      },
      {
        path: "/advertise/status",
        element: (
          <div>
            <AdvertisementStats></AdvertisementStats>
          </div>
        ),
      },
    ],
  },
  {
    path: "/blog",
    element: (
      <div>
        <BlogSection></BlogSection>
      </div>
    ),
    children: [
      {
        path: "/blog",
        element: (
          <div>
            <Blog></Blog>
          </div>
        ),
      },
      // {
      //   path: "/blog/post",
      //   element: (
      //     <div>
      //       <AdvertisePost></AdvertisePost>
      //     </div>
      //   ),
      // },
    ],
  },
]);
