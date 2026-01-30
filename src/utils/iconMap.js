export const getIconComponent = (iconName) => {
  const iconMap = {
    users: 'Users',
    'clipboard-check': 'ClipboardCheck',
    wallet: 'Wallet',
    'message-square': 'MessageSquare',
    shield: 'Shield',
    smartphone: 'Smartphone',
    'arrow-right': 'ArrowRight',
    mail: 'Mail',
    phone: 'Phone',
    menu: 'Menu',
    x: 'X',
    check: 'Check',
  }
  return iconMap[iconName] || 'Feature'
}
