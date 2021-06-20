import ResumeApp from './components/Resume/ResumeApp'
import RayApp from './components/Ray/RayApp'

export const routes = [
  {
    path: '/',
    name: 'ResumeApp',
    component: ResumeApp
  },
  {
    path: '/ray',
    name: 'RayApp',
    component: RayApp
  },
];