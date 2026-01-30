import {
  Users,
  ClipboardCheck,
  Wallet,
  MessageSquare,
  Shield,
  Smartphone,
  ArrowRight,
  Mail,
  Phone,
  Menu,
  X,
  Check,
} from 'lucide-react'

export const iconComponents = {
  Users,
  ClipboardCheck,
  Wallet,
  MessageSquare,
  Shield,
  Smartphone,
  ArrowRight,
  Mail,
  Phone,
  Menu,
  X,
  Check,
}

export const getIcon = (iconName, size = 24) => {
  const Icon = iconComponents[iconName]
  return Icon ? <Icon size={size} /> : null
}
