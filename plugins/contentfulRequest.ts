import { contentfulClient } from "./contentful"


export default class ContentfulRequests {
    public async getHolidayDeviceHomeSlideshowContent(): Promise<{ slideshowContent: any[]}> {
        const data = { slideshowContent: [] }
        await contentfulClient
        .getEntries({
            content_type: 'heroHomePage',
        })
        .then((res: any)=>{
            data.slideshowContent = res?.items || []
        })
        .catch((error: Error): any =>{
            console.error(`Error: ${ error.message }`)
            console.error(`StackTrace: ${ error.stack }`)
            process.exit(1)
        })
        return data
    }

    public async getHolidayDeviceHomeCardContent(): Promise<{ cardContent: any[]}> {
        const data = { cardContent: [] }
        await contentfulClient
        .getEntries({
            content_type: 'holidayDevice',
        })   
        .then((res: any)=>{
            data.cardContent = res?.items || []
        })
        .catch((error: Error): any =>{
            console.error(`Error: ${ error.message }`)
            console.error(`StackTrace: ${ error.stack }`)
            process.exit(1)
        })
        return data
    }
    public async getHolidayDeviceHomeSeasonPackageContent(): Promise<{ seasonPackageContent: any[]}> {
        const data = { seasonPackageContent: [] }
        await contentfulClient
        .getEntries({
            content_type: 'seasonPackageGallery',
        })   
        .then((res: any)=>{
            data.seasonPackageContent = res?.items || []
        })
        .catch((error: Error): any =>{
            console.error(`Error: ${ error.message }`)
            console.error(`StackTrace: ${ error.stack }`)
            process.exit(1)
        })
        return data
    }
    public async getHolidayDeviceHomeTestimonialsContent(): Promise<{ testimonialsContent: any[]}> {
        const data = { testimonialsContent: [] }
        await contentfulClient
        .getEntries({
            content_type: 'testimonials',
        })   
        .then((res: any)=>{
            data.testimonialsContent = res?.items || []
        })
        .catch((error: Error): any =>{
            console.error(`Error: ${ error.message }`)
            console.error(`StackTrace: ${ error.stack }`)
            process.exit(1)
        })
        return data
    }
    public async getHolidayDevicePageContent(): Promise<{ pageContent: any[]}> {
        const data = { pageContent: [] }
        await contentfulClient
        .getEntries({
            content_type: 'card'
        })
        .then((res: any) => {
            data.pageContent = res?.items || []
        })
        .catch((error: Error): any => {
            console.error(`Error: ${ error.message }`)
            console.error(`StackTrace: ${ error.stack }`)
            process.exit(1)
        })
        return data
    }
    public async getHolidayDeviceHeroContent(): Promise<{ heroContent: any[]}> {
        const data = { heroContent: [] }
        await contentfulClient
        .getEntries({
            content_type: 'heroSection'
        })
        .then((res: any) => {
            data.heroContent = res?.items || []
        })
        .catch((error: Error): any => {
            console.error(`Error: ${ error.message }`)
            console.error(`StackTrace: ${ error.stack }`)
            process.exit(1)
        })
        return data
    }
    public async getPageDataBySlug(slug: string): Promise<object>{
        var data = {}
        await contentfulClient
        .getEntries({
            content_type: 'page',
            'fields.slug': `${slug}`,
        })
        .then((entry: any): any => {
            data = entry.items[0]
        })
        .catch((error: Error): any => {
            console.error(`Error: ${ error.message }`)
            console.error(`StackTrace: ${ error.stack }`)
            process.exit(1)
        })
        return data
    }
    public async getPageDataByPackageSlug(packageSlug: string): Promise<object>{
        var data = {}
        await contentfulClient
        .getEntries({
            content_type: 'packageCard',
            'fields.packageSlug': `${packageSlug}`,
        })
        .then((entry: any): any => {
            data = entry.items[0]
        })
        .catch((error: Error): any => {
            console.error(`Error: ${ error.message }`)
            console.error(`StackTrace: ${ error.stack }`)
            process.exit(1)
        })
        return data
    }
    public async getPackagePageRoutes(): Promise<object>{
        var data = {}
        await contentfulClient
        .getEntries({
            content_type: 'packageCard',
        })
        .then((entry: any): any => {
            const items: any[] = entry?.items || []
            const result: any[] = []
            items.forEach((item) => result.push(item))
            data = result
        })  
        .catch((error: Error): any => {
            console.error(`Error: ${ error.message }`)
            console.error(`StackTrace: ${ error.stack }`)
            process.exit(1)
        })
        return data
    }
    public async getPlacePageRoutes(): Promise<{ Content: any[]}> {
        const data = { Content: [] }
        await contentfulClient
        .getEntries({
            content_type: 'page',
            'fields.packageSection[exists]' : true
        })
        .then((entry: any): any => {
            data.Content = entry.items[0]
        })
        .catch((error: Error): any => {
            console.error(`Error: ${ error.message }`)
            console.error(`StackTrace: ${ error.stack }`)
            process.exit(1)
        })
        return data
    }
}