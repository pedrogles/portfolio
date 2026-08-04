import type { IconType } from 'react-icons'
import {
  FiCode,
  FiDatabase,
  FiEdit3,
  FiGrid,
  FiLayout,
  FiRefreshCw,
  FiServer,
  FiTool,
  FiUploadCloud,
} from 'react-icons/fi'
import type { Service, ServiceIconName } from '../../../types/content'

const iconByName: Record<ServiceIconName, IconType> = {
  api: FiServer,
  code: FiCode,
  database: FiDatabase,
  deploy: FiUploadCloud,
  form: FiEdit3,
  layout: FiLayout,
  maintenance: FiTool,
  table: FiGrid,
}

interface ServiceCardProps {
  readonly service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconByName[service.icon] ?? FiRefreshCw

  return (
    <article className="service-card">
      <span aria-hidden="true" className="service-card__icon">
        <Icon focusable="false" />
      </span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  )
}
