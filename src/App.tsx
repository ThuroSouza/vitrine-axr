import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { HomePage } from './pages/Home'

const ServicesPage = lazy(() => import('./pages/Services').then(({ ServicesPage }) => ({ default: ServicesPage })))
const ClientsPage = lazy(() => import('./pages/Clients').then(({ ClientsPage }) => ({ default: ClientsPage })))
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetails').then(({ ProjectDetailsPage }) => ({ default: ProjectDetailsPage })))
const InstitutionalPage = lazy(() => import('./pages/Institutional').then(({ InstitutionalPage }) => ({ default: InstitutionalPage })))
const ObjectivesPage = lazy(() => import('./pages/Objectives').then(({ ObjectivesPage }) => ({ default: ObjectivesPage })))
const NotFoundPage = lazy(() => import('./pages/NotFound').then(({ NotFoundPage }) => ({ default: NotFoundPage })))

export default function App() {
  return <BrowserRouter><Routes><Route element={<AppLayout />}><Route index element={<HomePage />} /><Route path="servicos" element={<ServicesPage />} /><Route path="clientes" element={<ClientsPage />} /><Route path="clientes/:slug" element={<ProjectDetailsPage />} /><Route path="institucional" element={<InstitutionalPage />} /><Route path="objetivos" element={<ObjectivesPage />} /><Route path="*" element={<NotFoundPage />} /></Route></Routes></BrowserRouter>
}
