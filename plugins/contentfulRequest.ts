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
}