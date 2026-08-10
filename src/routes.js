import showBlogs from './components/showBlogs.kdu';
import addBlog from './components/addBlog.kdu';

export default [
  { path: '/', component: showBlogs },
  { path: '/add', component: addBlog }
]
