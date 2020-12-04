import { SiteClient } from 'datocms-client'

export default function useData(datoApiToken) {
  const datoClient = new SiteClient(datoApiToken)
  async function getImageUrl(imageObject) {
    const uploadId = imageObject?.upload_id
    if (!uploadId) {
      return undefined
    }

    const image = await datoClient.uploads.find(uploadId)
    return image.url
  }

  return {
    getImageUrl,
  }
}
