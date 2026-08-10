import showBlogs from './components/showBlogs.kdu';
import addBlog from './components/addBlog.kdu';
import singleBlog from './components/singleBlog.kdu';

export default [
  { path: '/', component: showBlogs },
  { path: '/add', component: addBlog },
  { path: '/blog/:id', component: singleBlog }
]
