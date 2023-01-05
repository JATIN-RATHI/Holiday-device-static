import ContentfulRequests from "./plugins/contentfulRequest";
const contentfulRequest = new ContentfulRequests()

async function generatePlacePackagePageRoutes(): Promise<any[]> {
    const routes = [] as any
    const response  = await contentfulRequest.getHolidayDevicePageContent()
    response.pageContent.forEach((content) => {
        if(content.fields.slug) {
            routes.push({ route: `/destinations/place/${content.fields.slug}`})
        }           
    })
    return routes
}

export async function generateRoutes(): Promise<any[]> {
    const placePageRoutes = await generatePlacePackagePageRoutes()
    return { ...placePageRoutes }
}