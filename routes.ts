import ContentfulRequests from "./plugins/contentfulRequest";
const contentfulRequest = new ContentfulRequests()

async function generatePlacePageRoutes(): Promise<any[]> {
    const routes = [] as any
    const response  = await contentfulRequest.getHolidayDevicePageContent()
    response.pageContent.forEach((content) => {
        if(content.fields.slug) {
            routes.push({ route: `/destinations/place/${content.fields.slug}`})
        }           
    })
    return routes
}

async function generatePackagePageRoutes(): Promise<any[]> {
    const routes = [] as any
    const response  = await contentfulRequest.getPackagePageRoutes()
    for (const [key, value] of Object.entries(response)){
        if(value.fields.packageSlug) {
            routes.push({ route: `/destinations/package/${value.fields.packageSlug}`})
        } 
    }
    return routes
}

export async function generateRoutes(): Promise<any[]> {
    const placePageRoutes = await generatePlacePageRoutes()
    const packagePageRoutes = await generatePackagePageRoutes()
    return [...placePageRoutes, ...packagePageRoutes]
}