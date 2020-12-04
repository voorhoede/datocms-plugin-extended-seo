let config = { title: '', description: '', image: '' }

export function buildPreviewURL(social, options = {}) {
  config = Object.assign(config, options)
  const baseUrl = 'https://heads-up-devtools.netlify.app'
  const params = new URLSearchParams()
  params.set('title', config.title || '')
  params.set('description', config.description || '')
  params.set('image', config.image || '')

  params.set('theme', 'default')

  if (social === 'slack') {
    params.set('additionalData', JSON.stringify([]))
  }

  return `${baseUrl}/previews/${social}/${social}.html?${params}`
}
